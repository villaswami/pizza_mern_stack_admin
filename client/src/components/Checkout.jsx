import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const userstate = useSelector((state)=> state.loginUserReducer);
  const {currentUser} = userstate;
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
     {currentUser ? (
        <StripeCheckout
       
        token={tokenHandler}
        stripeKey="pk_test_51KlrQrSHsKNej50uBdaYyNmoNS6G4KyUk7qaVj9XqLUqxzeUb3AhTVie2lE3emgGkJQr0QDPAIvTdg2hz4SUQ8qr00VfoXT4cD"
        currency="INR"
      >
        <Button>Place Order</Button>
      </StripeCheckout>
     ) :
     (
      <LinkContainer to="/login">
       <Button>Place Order</Button>
       </LinkContainer>
     )
    
    }
    </>
  );
};

export default Checkout;
