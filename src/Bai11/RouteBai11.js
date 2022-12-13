import { Routes, Route, Link } from "react-router-dom";

function RouteBai11(props) {
  return (
    <div>
      <Link to="/Mailbox">Mailbox</Link>
      <Link to="/NumberList">NumberList</Link>
      {props.children}
    </div>
  );
}
export default RouteBai11;
