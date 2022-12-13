import axios from "axios";
import { useEffect, useState } from "react";
import Bai2GetData from "./Bai2GetData";

function Bai2SetData() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return <Bai2GetData data={data} />;
}
export default Bai2SetData;
