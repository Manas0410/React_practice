const ProductView = (props) => {
  console.log("ProductView Re-Render: ", props);

  return (
    <div>
      <p>
        ProductView: {props.name} {props.count}
      </p>
    </div>
  );
};

export default ProductView;
