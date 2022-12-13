import axios from "axios";
import { useEffect, useState } from "react";
import Bai1GetData from "./Bai1GetData";

function Bai1SetData() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return <Bai1GetData data={data} />;
}
export default Bai1SetData;
