import "./style.css";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { useDispatch, connect } from "react-redux";
import { useState, useEffect } from "react";
import {
  addToCart,
  adjustQuantity,
  deleteFromCart,
  LoadCurrentItem,
} from "../../redux/reducers/cart-actios";

function ProductTrElement(props) {

  let addToCart = props.addToCart;
  let adjustQuantity = props.adjustQuantity;
  let deleteFromCart = props.deleteFromCart;
  const LoadCurrentItem = props.LoadCurrentItem;

  const [inputQty, setinputQty] = useState(props.product.qty);
  const [subTotal, setsubTotal] = useState(0);

  // useEffect(() => {
  //   const input = document.querySelector('input');
  //   const subTotalll = inputQty * props.product.price;
  //   setsubTotal(subTotal + subTotalll);
  //   let subTotShow = input.parentNode.parentNode.children[4];
  //   subTotShow.innerHTML = `${subTotalll}`;
  // }, [inputQty, setsubTotal, props.product.price])

  const onChangeQuantity = (event, type) => {
    event.preventDefault();
    let btn = event.currentTarget;
    if (type === 'add') {
      if (inputQty === props.product.maxQuantity) {
        alert("This is the last quantity for this product");
        return;
      }
      addToCart(event, props.product, props.product.id);
      let updatedQty = inputQty + 1;
      setinputQty(updatedQty);
      // adjustQuantity(props.product.id, btn.value);
      let subTotall = updatedQty * props.product.price;
      // console.log(inputQty, subTotall);
      setsubTotal(subTotal + subTotall);
      let subTotShow = btn.parentNode.parentNode.children[4];
      subTotShow.innerHTML = `${subTotall}`;
    }
    if (type === 'dec') {
      if (inputQty === 1) {
        return;
      }
      let updatedQty = inputQty - 1;
      adjustQuantity(props.product.id, updatedQty);
      setinputQty(updatedQty);
      let subTotall = updatedQty * props.product.price;
      setsubTotal(subTotal + subTotall);
      let subTotShow = btn.parentNode.parentNode.children[4];
      subTotShow.innerHTML = `${subTotall}`;
    }
  };

  return (
    <tr key={props.product.id}>
      <td>
        <img
          src={props.product.src}
          alt="productImg"
          onClick={() => LoadCurrentItem(props.product)}
        />
      </td>

      <td onClick={() => LoadCurrentItem(props.product)}>
        {props.product.name}
      </td>

      <td className="price-new">{props.product.price}$</td>

      <td>{inputQty}</td>

      <td className="subTotalShow">{props.product.price}</td>

      <td>
        <Button
          variant="dark"
          size="sm"
          className="ms-2"
          onClick={(e) => onChangeQuantity(e, 'add')}
        >
          <Icon.Plus />
        </Button>
        <Button
          variant="dark"
          size="sm"
          className="ms-2"
          onClick={(e) => {

            onChangeQuantity(e, 'dec');
          }}
        >
          <Icon.Dash />
        </Button>
        <Button
          variant="dark"
          size="sm"
          className="ms-2"
          onClick={(e) => deleteFromCart(e, props.product.id)}
        >
          <Icon.Trash />
        </Button>
      </td>
    </tr>
  );
}

const mapStatetoProps = (state) => {
  return {
    currentItem: state.rCart.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
    deleteFromCart: (e, id) => dispatch(deleteFromCart(e, id)),
    LoadCurrentItem: (product) => dispatch(LoadCurrentItem(product)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ProductTrElement);
