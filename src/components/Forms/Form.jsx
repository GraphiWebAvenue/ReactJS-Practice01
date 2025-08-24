import { Button } from "./Button";
import "./Form.css";
import { Input } from "./Input";

export const Form = ({ title_form, btn_text_form, children }) => {
  return (
    <>
      <form className="form">
        <h2>{title_form}</h2>
        {children}
        <Button btn_text_form={btn_text_form}></Button>
      </form>
    </>
  );
};
