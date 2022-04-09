import React from "react";
import { Container, Row, Col ,Image} from "react-bootstrap";

const About = () => {
  return (
    <div style={{background:"azure"}}>
      <Container style={{ marginTop: "50px" }}>
        <h1>Whoem we are</h1>
        <p>
        Pizza Hut and our franchise partners’ values challenge and inspire us to elevate the Pizza Hut brand and culture while championing the customer experience. In everything we do, in everything we are, we will always feed more possibilities and help you become your best, make friends, and have fun.The Pizza Hut brand has a long history of firsts – the first national chain to offer online delivery ordering, the first pizza delivery to outer space, a world-record setting delivery to the summit of Mt. Kilimanjaro – and we’re not slowing down any time soon. Pizza Hut is always looking for ways to innovate processes and deliver an even more exceptional service and product.


        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            The Edge Pizza
Pizza Hut Specialty, The Edge pizza, is a perfect choice. They include all your favorite toppings and flavors, like pepperoni and cheese. Plus, they’re made with fresh dough and topped with a sauce that goes right to the edge of the crust, so you get more flavor in every bite.

Ultimate Cheese Lover’s Pizza
The Ultimate Cheese Lover’s Pizza features double the cheese, creamy garlic Parmesan sauce, and toppings like pepperoni, Italian sausage, green peppers, red onions, and black olives on top of our classic hand-tossed crust.

BBQ Bacon Cheeseburger Pizza
BBQ Bacon Cheeseburger Pizza is topped with a smoky barbecue sauce base, bacon crumbles, ground beef, cheddar cheese and pickles on top of our classic hand-tossed crust makes this mouthwatering pie irresistible. It’s a cheeseburger and a pizza.

Chicken Supreme Pizza
Savory white meat chicken chunks mixed in a zesty alfredo sauce made from scratch using fresh creamery butter then piled high atop our thin crispy crust. It’s a foolproof flavor that you will never get tired of. You have to try chicken supreme pizza for once

Veggie Lover’s Pizza
Loaded with mushrooms, red onions, and bell peppers along with mozzarella cheese on top of our thin crispy crust, make this veggie lover’s dream come true. You can finally enjoy pizza in peace without constantly picking up stuff from the top because you don’t consume meat.

Pizza Hut Specialty Pizzas are the perfect way to enjoy your favorite flavors without having to choose. This new line of specialty pizzas will satisfy any craving. Each one is loaded with premium ingredients and topped with signature sauce for a flavorful combination. You can order them online or visit your local Pizza Hut today.

To know what goes on a supreme pizza, read this article and visit Vera Pizza Napoletana to stay updated.
            </p>
          </Col>
          <Col md={6}>
            <Image  src="images/farmhouse.jpg" style={{width: "100%", height: "100%" }} />
          </Col>
        </Row>
        <Row>
          <h1>Our Cheif's</h1>
          <Col md={3}>
          <Image src="images/cheif1.jpg" />
          </Col>
          <Col md={3}>
            <Image src="images/cheif.jpg" />
          </Col>
          <Col md={3}>
          <Image src="images/cheif2.jpg" />
          </Col>
          <Col md={3}>
          <Image src="images/cheif3.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
