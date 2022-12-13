import axios from "axios";
import { useEffect, useState } from "react";

function GetRequest() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // function renderdata() {
  //   if (data.length > 0) {
  //     return data.map((value, key) => {
  //       return <li key={key}>{value.name}</li>;
  //     });
  //   }
  // }
  // return <ul>{renderdata()}</ul>;
}
export default GetRequest;
