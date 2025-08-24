import "./Button.css";
export const Button = ({ text, bg }) => {
  return (
    <>
      <button className="btn" style={{ backgroundColor: bg }}>
        {text}
      </button>
    </>
  );
};
