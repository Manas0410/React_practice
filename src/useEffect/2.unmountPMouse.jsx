import { useEffect } from "react";

const UnMounting = () => {
  useEffect(() => {
    console.log("Mounting");

    const handleMouseMove = (event) => {
      console.log({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      console.log("Unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div>I am a Mouse Move Page</div>;
};

export default UnMounting;
