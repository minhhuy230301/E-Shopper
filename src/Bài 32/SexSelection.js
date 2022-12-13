import Form from "../Bài 13/Form";

import Register from "./Register";

function SexSelection(props) {
  const sex = [
    {
      id: "",
      name: "Vui lòng chon",
    },
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
  ];

  return (
    <>
      <Register sex1={sex} />
      {/* <Form sex2={sex} /> */}
    </>
  );
}
export default SexSelection;
