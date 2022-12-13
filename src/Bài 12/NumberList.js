import { useContext } from "react";
import { UserContext } from "../UserContext";

function NumberList(props) {
  const number1 = [1, 2, 3, 4, 5];
  const number = props.number;
  const listItems = number.map((number) => <li>{number}</li>);
  const user = useContext(UserContext);
  console.log(user);
  return <ul>{listItems}</ul>;
}
export default NumberList;
