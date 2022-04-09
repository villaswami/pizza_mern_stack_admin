import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";

const Registe = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert("Password do not match");
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
    }
  };
  return (
    <>
    <div style={{backgroundColor:"olive",height:"100vh",alignItems:"center"}}>
      <Container>
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="somthing went wrong" />}
        <div style={{marginLeft:"35%"}}>        
          <Form>
          <h1>Regiteration </h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              style={{width:'50%'}}
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              style={{width:'50%'}}
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-white" >
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              style={{width:'50%'}}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control
              type="password"
              style={{width:'50%'}}
              placeholder="Confirm Password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

         
          <Button variant="primary" onClick={registerhandler}>
            Register
          </Button>
        </Form>
        </div>

      </Container>
      </div>
    </>
  );
};

export default Registe;
