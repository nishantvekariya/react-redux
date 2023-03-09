import { useEffect, useState } from "react";
import "../../style.css";
import { Col, Container, Row } from "react-bootstrap";
import { FooterLink } from "../footer/style";
import { HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function TopHeader({ cart }) {
  const [CartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    let cartCount = 0;
    cart.forEach((item) => {
      cartCount += item.qty;
    });
    setCartCounter(cartCount);
  }, [cart, CartCounter]);

  return (
    <section className="header-top bg-black text-white p-2 sticky-top">
      <Container>
        <Row>
          <Col className="text-end">
            <Link className="me-5 FooterLink text-white" to="/shoppingCart">
              <FooterLink>
                <HeartFill className="me-2"></HeartFill>
                Shopping Cart
                <span className="ms-1">({CartCounter})</span>
              </FooterLink>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.rCart.cart,
  };
};

export default connect(mapStateToProps)(TopHeader);
