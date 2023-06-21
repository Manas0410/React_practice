const EmojisChild = ({ onSelected }) => {
  const onEmojiClicked = (data) => {
    console.log("Data Child: ", data);
    onSelected(data);
  };

  const onEmojiEventClicked = (e) => {
    const { value } = e.target;
    console.log({ value });
  };

  return (
    <>
      <button onClick={() => onEmojiClicked("smile")}>Smile</button>
      <button onClick={() => onEmojiClicked("cry")}>Cry</button>
      <button onClick={() => onEmojiClicked("laugh")}>Laugh</button>
      <button onClick={() => onEmojiClicked("appreciate")}>Appreciate</button>
      <button onClick={() => onEmojiClicked("anger")}>Anger</button>
      <button value={"anger"} onClick={onEmojiEventClicked}>
        Anger
      </button>
      <button value={"sad"} onClick={(e) => onEmojiEventClicked(e)}>
        Sad
      </button>
    </>
  );
};

export default EmojisChild;
