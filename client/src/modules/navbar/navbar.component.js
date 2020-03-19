import React, { useState } from "react";
import {
  Navbar,
  Nav,
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
import { Row, Col } from "shards-react";
export const NavbarLanding = props => {
  const [open, setOpen] = useState(false);

  return (
    <Row>
      <Col sm="12" md="12" lg="12">
        <Navbar full="true" className="navbar-landing" type="dark" expand="md">
          <Nav className="nav-landing" navbar>
            <NavItem>
              <NavLink active href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Articles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setOpen(true)}>Log In</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Modal
          open={open}
          toggle={() => {
            setOpen(!open);
          }}
          position="center"
        >
          <ModalHeader>Log in 👋</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <label style={{ color: "#000" }} htmlFor="#username">
                  Username
                </label>
                <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                <label style={{ color: "#000" }} htmlFor="#password">
                  Password
                </label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                />
              </FormGroup>
            </Form>
            <Button
              style={{ float: "right" }}
              outline
              squared
              theme="dark"
              href="/dashboard/main"
            >
              Dark
            </Button>
          </ModalBody>
        </Modal>
      </Col>
    </Row>
  );
};
