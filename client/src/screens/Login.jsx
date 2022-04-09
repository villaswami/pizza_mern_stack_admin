import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <div style={{backgroundColor:"lightcoral" ,height:'100vh'}}>
     <div style={{backgroundColor:"lightcoral",alignItems:'center'}}>
      <Container>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'10%'}}>
        <Form>
          <h1>Login </h1>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              style={{width:'65%'}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              style={{width:'65%'}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
        
          <Button variant="primary" onClick={loginHandler}>
            Login
          </Button>
         
        </Form>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default Login;
