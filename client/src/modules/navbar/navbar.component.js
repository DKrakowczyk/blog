import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Badge
} from "shards-react";
import { Row, Col } from "shards-react";
export const NavbarLanding = props => {
  return (
    <Row>
      <Col sm="12" md="12" lg="12">
        <Navbar full="true" className="navbar-landing" type="dark" expand="md">
          <Collapse navbar>
            <Nav className="nav-landing" navbar>
              <NavItem>
                <NavLink active href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};
