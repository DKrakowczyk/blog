import React from "react";
import { Col, Nav, Navbar, NavItem, NavLink, Row } from "shards-react";
import { AuthModal } from "./auth.component";

export const NavbarLanding = props => {
  const path = "/" + window.location.pathname.split("/")[1];
  console.log(path);
  return (
    <Row>
      <Col sm="12" md="12" lg="12">
        <Navbar className="navbar-landing" type="dark" expand="md">
          <Nav className="nav-landing" navbar>
            <NavItem>
              <NavLink active={path === "/"} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={path === "/articles"} href="/articles">
                Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={path === "/categories"} href="/categories">
                Categories
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={path === "/about"} href="/about">
                Bio
              </NavLink>
            </NavItem>
            <AuthModal></AuthModal>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
};
