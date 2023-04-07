import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  InputGroup,
  InputGroupText,
  Input,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="bg-dark">
        <NavbarBrand href="/" style={{ color: "white" }}>
          Top Universities
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar></Nav>
          <InputGroup style={{ width: "50vw" }}>
            <Input />
            <InputGroupText>Search</InputGroupText>
          </InputGroup>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
