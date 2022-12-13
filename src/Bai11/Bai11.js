// import NumberList from "./Bài 12/NumberList";
import RouteBai11 from "./RouteBai11";

import Mailbox from "./Mailbox";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Messages = ["React", "Re: React", "Re:Re React"];
const number = [1, 2, 3, 4, 5];
function Bai11(props) {
  <Router>
    <RouteBai11>
      <Routes>
        <Route
          path="/Mailbox"
          element={<Mailbox unreadMessages={Messages} />}
        />
        {/* <Route path="/NumberList" element={<NumberList number={number} />} /> */}
      </Routes>
    </RouteBai11>
  </Router>;
}
export default Bai11;
