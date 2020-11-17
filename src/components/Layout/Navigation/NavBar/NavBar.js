import React from 'react';
import { Form, FormControl, Navbar } from 'react-bootstrap';
import Logo from './Logo/Logo';

export const NavBar = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Form className="form-center">
      <FormControl type="text" placeholder="Search" className="" />
    </Form>
  </Navbar>
);
