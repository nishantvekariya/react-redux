import React from "react";
import { ButtonGroup } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactStars from "react-rating-stars-component";
import "./style.css";
import "./../MainSlider/style.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/reducers/cart-actios";

function ProductCardElement(props) {
  const addToCart = props.addToCart;

  return (
    <div className="text-center" key={props.slidePro.id}>
      <Card className="border-0 position-relative">
        <Card.Img
          variant="top"
          src={props.slidePro.image}
        />
        <ButtonGroup className="btnGroup mb-3 position-absolute">
          <Button
            variant="dark"
            size="sm"
            onClick={(e) => addToCart(e, props.slidePro, props.slidePro.id)}
          >
            Add to Cart
          </Button>
        </ButtonGroup>
        <Card.Body>
          <Card.Title>
            {props.slidePro.title}
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <Card.Text className="price-new mb-0">
                {props.slidePro.price}$
              </Card.Text>
              <Card.Text className="price-old">
                {!props.slidePro.oldPrice ? "" : props.slidePro.oldPrice}
              </Card.Text>
            </div>
            <ReactStars
              count={5}
              size={24}
              color="gray"
              a11y={true}
              edit={true}
              isHalf="true"
              value={props.slidePro.rating.rate}
              activeColor="#ffd700"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
  };
};

export default connect(null, mapDispatchtoProps)(ProductCardElement);
