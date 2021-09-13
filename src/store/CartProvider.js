import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext value={CartContext}>{props.children}</CartContext>;
};

export default CartProvider;
