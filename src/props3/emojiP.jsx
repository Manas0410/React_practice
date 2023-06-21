import EmojisChild from "./EmojisChild";

const EmojisParent = () => {
  const onEmojiSelected = (data) => {
    console.log("Data Parent: ", data);
  };

  return (
    <>
      <p>Parent</p>
      <EmojisChild onSelected={onEmojiSelected} />
    </>
  );
};

export default EmojisParent;
