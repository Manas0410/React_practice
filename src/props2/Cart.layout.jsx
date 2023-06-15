const Cart = (props) => {
  console.log("Inside Cart: ", props);

  let totalPrice = 0;
  for (let i = 0; i < props.myKey.length; i++) {
    totalPrice += props.myKey[i].price;
  }

  return (
    <div>
      <p>
        Total Proce of {props.myKey.length} elements is {totalPrice}
      </p>
    </div>
  );
};

export default Cart;
