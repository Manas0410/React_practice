// eslint-disable-next-line react/prop-types
function Greetings({ name, city }) {
    return (
      <div>
        <p>
          Hello {name}. You are from {city}
        </p>
      </div>
    );
  }
  
  export default Greetings;