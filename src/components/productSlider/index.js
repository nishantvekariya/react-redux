import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import "./../MainSlider/style.css";
import ProductCardElement from "./utility";
import { ProductsResponsive } from "../../services/responsive";
import { connect } from "react-redux";
// import { useEffect } from "react";
import { loadProducts } from "../../redux/reducers/cart-actios";

const ProductCard = (props) => {
  const { slides } = props;
  // console.log('slidess', slides);
  // let loadProducts = props.loadProducts;


  // useEffect(() => {
  //   loadProducts(slides);
  //   const wishedProducts = slides.filter((element) => element.isAddedToWishlist === true);
  //   console.log(wishedProducts);
  // }, [loadProducts, slides]);

  return (
    <div className="productSlider mb-5 mt-5">
      <Container>
        <h5 className="text-left mb-4 ms-4">FEATURED PRODUCTS</h5>
        <Carousel controls="false" responsive={ProductsResponsive}>
          {slides?.map((slide, key) => (
            <ProductCardElement slidePro={slide} key={key} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    loadProducts: (products) => dispatch(loadProducts(products)),
  };
};

export default connect(null, mapDispatchtoProps)(ProductCard);
