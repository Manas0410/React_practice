const CardItem = (props) => {
  console.log("Props: ", props);
  const { id, title, onRemove, onAdd, cartMapping } = props;
  const renderActionButtons = () => {
    // From Cart
    if (!cartMapping || !onAdd) {
      return <button onClick={() => onRemove(id)}>Remove</button>;
    }

    // Otherwise it's from product
    return cartMapping[id] ? (
      <button onClick={() => onRemove(id)}>Remove from cart</button>
    ) : (
      <button onClick={() => onAdd(id)}>Add to cart</button>
    );
  };

  return (
    <li
      key={id}
      style={{
        width: 400,
        border: "1px solid silver",
        padding: 12,
        listStyleType: "none",
        marginBottom: 12,
      }}
    >
      <p>{title}</p>
      {renderActionButtons()}
    </li>
  );
};

export default CardItem;
