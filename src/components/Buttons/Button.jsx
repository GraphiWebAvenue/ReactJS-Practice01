import "./Button.css";

export const Button1 = () => {
  const myStyle = {
    width: "100%",
    height: "200px",
    backgroundColor: "Red",
  };
  return (
    <>
      <button style={myStyle}>منو بمال!</button>
    </>
  );
};
export const Button2 = () => {
  return (
    <>
      <button>چی شده؟</button>
    </>
  );
};
