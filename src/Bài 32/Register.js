import { useState } from "react";
import Error from "../Bài 13/Error";
function Register(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    select: "",
  });
  const [errors, setErrors] = useState({}); //setError: Lưu trũ toàn bộ lỗi dưới dạng object
  const [getfile, setFile] = useState("");

  const handleInput = (e) => {
    //function dùng chung cho các thẻ input,textarea,...
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  function IsEmail() {
    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(inputs.email)) {
      return false;
    } else {
      return true;
    }
  }
  function handleFile(e) {
    // const nameInput = e.target.name;
    // const value = e.target.value;
    // setFile((state) => ({ ...state, [nameInput]: value }));
    setFile(e.target.files);
  }
  function IsImg() {
    const typeImg = ["png", " jpg", "jpeg", "PNG", "JPG"];
    var img_val = getfile[0].type.lastIndexOf("/") + 1;
    var checkImg = getfile[0].type.substring(img_val);
    var result = typeImg.includes(checkImg);
    if (!result) {
      return false;
    } else {
      return true;
    }
  }
  const handleSubmit = (e) => {
    console.log(getfile);

    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    //Email
    if (inputs.email == "") {
      flag = false;
      errorSubmit.email = "Vui lòng nhập email";
    } else if (!IsEmail()) {
      flag = false;
      errorSubmit.email = "Địa chỉ email không hợp lệ";
    }
    //Password
    if (inputs.password == "") {
      flag = false;
      errorSubmit.password = "Vui lòng nhập password";
    }
    //File
    if (!getfile) {
      flag = false;
      errorSubmit.file = "Vui lòng chọn file";
    } else if (getfile[0].size > 1024 * 1024) {
      flag = false;
      errorSubmit.file = "File vượt quá 1mb";
    } else if (!IsImg()) {
      flag = false;
      errorSubmit.file = "File này không phải hình ảnh";
    }
    //Giới tính
    if (inputs.select == "") {
      flag = false;
      errorSubmit.select = "Vui lòng chọn giới tính";
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      setErrors({});
      const abc = {
        email: inputs.email,
        pass: inputs.password,
      };
      localStorage.setItem("account", JSON.stringify(abc));
    }
    console.log(errorSubmit);
  };

  return (
    <div>
      <Error errors={errors} />
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}
        />
        <input type="file" name="avatar" onChange={handleFile} />
        <select name="select" onChange={handleInput}>
          <option name="option" value={props.sex1[0].id} onChange={handleInput}>
            {props.sex1[0].name}
          </option>
          <option name="option" value={props.sex1[1].id} onChange={handleInput}>
            {props.sex1[1].name}
          </option>
          <option name="option" value={props.sex1[2].id} onChange={handleInput}>
            {props.sex1[2].name}
          </option>
        </select>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;
