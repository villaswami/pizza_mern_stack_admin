import React from "react";
// import { Spinner } from "react-bootstrap";

const Loader = () => {
  // return <Spinner animation="border" variant="info" />;
  return(
    <div style={{height:"100vh",width:"100vw",alignItems:'center'}}>
      <img src="images/load.gif" alt="" srcset="" />
    </div>
  )
};

export default Loader;
