import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  NavItem,
  NavLink,
  FormInput,
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  Button
} from "shards-react";
import { SIGN_UP, SIGN_IN } from "../../gql/auth.mutations";
import { openNotification } from "../../dashboard/common/notification.component";
import styled from "styled-components";
import { ROLE } from "../../../constants/constants";

const Label = styled.label`
  color: #000;
  font-size: 16px;
  float: left;
`;

const Info = styled.p`
  color: #000;
  font-size: 16px;
`;

export const AuthModal = props => {
  const [open, setOpen] = useState(props.open);
  const [isRegister, setIsRegister] = useState(false);

  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted({ signUp }) {
      SignIn();
    }
  });

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted({ signIn }) {
      localStorage.setItem("TOKEN", signIn.token);
      const decoded = jwt_decode(signIn.token);
      localStorage.setItem("ROLE", decoded.role);
      localStorage.setItem("userName", decoded.userName);
      if (decoded.role === ROLE.Admin) {
        window.location.href = "/dashboard/main";
      } else {
        window.location.reload();
      }
    }
  });

  const SignUp = async () => {
    try {
      await signUp({
        variables: { signUp: credentials }
      });
    } catch (error) {
      setOpen(false);
      openNotification(
        "error",
        "There was an error",
        "You can't register that account, try again"
      );
    }
  };

  const SignIn = async () => {
    try {
      delete credentials.userName;
      await signIn({
        variables: { signIn: credentials }
      });
    } catch (error) {
      setOpen(false);
      openNotification(
        "error",
        "There was an error",
        "You provided wrong credentials"
      );
    }
  };

  const LoginPart = (
    <>
      <FormGroup>
        <Label htmlFor="#email">Email</Label>
        <FormInput
          onChange={e =>
            setCredentials({
              userName: credentials.userName,
              email: e.target.value,
              password: credentials.password
            })
          }
          type="email"
          placeholder="Email address"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="#password">Password</Label>
        <FormInput
          onChange={e =>
            setCredentials({
              userName: credentials.userName,
              email: credentials.email,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Password"
        />
      </FormGroup>
    </>
  );

  const AuthNav =
    localStorage.getItem("TOKEN") === null ? (
      <NavLink
        onClick={() => {
          setOpen(true);
        }}
      >
        Sign In
      </NavLink>
    ) : (
      <NavLink
        onClick={() => {
          localStorage.removeItem("TOKEN");
          window.location.reload();
        }}
      >
        Logout
      </NavLink>
    );

  const ModalView = !isRegister ? (
    <div>
      <ModalHeader>Sign in</ModalHeader>
      <ModalBody>
        <Form>{LoginPart}</Form>
        <Info>
          Don't have an account?
          <a onClick={() => setIsRegister(true)}>
            <strong> Sign up now!</strong>
          </a>
        </Info>
        <Button outline squared theme="dark" onClick={() => SignIn()}>
          Sign in
        </Button>
      </ModalBody>
    </div>
  ) : (
    <div>
      <ModalHeader>Sign Up</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label htmlFor="#username">Username</Label>
            <FormInput
              onChange={e =>
                setCredentials({
                  userName: e.target.value,
                  email: credentials.email,
                  password: credentials.password
                })
              }
              placeholder="Username"
            />
          </FormGroup>
          {LoginPart}
        </Form>

        <Button outline squared theme="dark" onClick={() => SignUp()}>
          Sign up
        </Button>
      </ModalBody>
    </div>
  );

  return (
    <div>
      <NavItem>{AuthNav}</NavItem>
      <Modal
        open={open}
        toggle={() => {
          setOpen(!open);
          setIsRegister(false);
        }}
        position="center"
      >
        {ModalView}
      </Modal>
    </div>
  );
};
