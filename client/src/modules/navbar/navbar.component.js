import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "shards-react";
import { Row, Col } from "shards-react";
import { AuthModal } from "./auth.component";

export const NavbarLanding = props => {
  return (
    <Row>
      <Col sm="12" md="12" lg="12">
        <Navbar className="navbar-landing" type="dark" expand="md">
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
              <NavLink href="/about">Bio</NavLink>
            </NavItem>
            <AuthModal></AuthModal>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
};
