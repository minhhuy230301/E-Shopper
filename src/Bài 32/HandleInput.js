import { useState } from "react";
import Error from "../Bài 13/Error";
import Login from "../Login";
function HandleInput(e) {
  e.preventDefault();
  const [inputs, setInputs] = useState("");
  //function dùng chung cho các thẻ input,textarea,...
  const nameInput = e.target.name;
  const value = e.target.value;
  setInputs((state) => ({ ...state, [nameInput]: value }));
  // return <Login inputs={inputs} />;
}
export default HandleInput;
