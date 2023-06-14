const AbtChild = (myObj) => {
  const { name, city, age } = myObj;
  return (
    <p>
      {name} from {city} of age{age || 18}
    </p>
  );
};
export default AbtChild;
