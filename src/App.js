//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <div className="App">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"><br></br>
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text id="passwordHelpBlock" muted>
    <br></br>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>

    </div>
  );
}
export default App;
