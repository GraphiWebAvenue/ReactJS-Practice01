import { Button } from "./Button";
import "./Form.css";
import { Input } from "./Input";

export const Form = ({ tilte_form, btn_text_form }) => {
  return (
    <>
      <form className="form">
        <h2>{tilte_form}</h2>
        <Input type={"email"} label_text={"Enter Your Email:"}></Input>
        <Input type={"password"} label_text={"Enter Your Password:"}></Input>
        <Button btn_text_form={btn_text_form}></Button>
      </form>
    </>
  );
};
