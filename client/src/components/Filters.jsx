import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-4  mt-4">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="serach pizza"
            />
          </Col>
          
          <Col> 
            <Button
              onClick={() => {
                dispatch(filterPizza(searchkey, category)); //, category
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;
