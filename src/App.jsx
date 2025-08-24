import "./App.css";
import { Form } from "./components/Forms/Form";
import { Input } from "./components/Forms/Input";

function App() {
  return (
    <>
      <Form title_form="Login Form" btn_text_form="Login">
        <Input type={"email"} label_text={"Enter Your Email:"}></Input>
        <Input type={"password"} label_text={"Enter Your Password:"}></Input>
      </Form>
      <Form title_form="Register Form" btn_text_form="Register">
        <Input type={"text"} label_text={"First & SureName:"}></Input>
        <Input type={"email"} label_text={"Enter Your Email:"}></Input>
        <Input type={"text"} label_text={"Enter Your Password:"}></Input>
      </Form>
    </>
  );
}

export default App;
