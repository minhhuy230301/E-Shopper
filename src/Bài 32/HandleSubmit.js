import { useState } from "react";
import Error from "../Bài 13/Error";
import Login from "../Login";
function HandleSubmit() {
  const [inputs, setInputs] = useState("");
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
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (inputs.email_dk == undefined) {
      flag = false;
      errorSubmit.email = "Vui lòng nhập email";
    } else if (!IsEmail()) {
      flag = false;
      errorSubmit.email = "Địa chỉ email không hợp lệ";
    }
    if (inputs.password_dk == undefined) {
      flag = false;
      errorSubmit.password = "Vui lòng nhập password";
    }
    if (inputs.phone_dk == undefined) {
      flag = false;
      errorSubmit.phone_dk = "Vui lòng nhập số điện thoại";
    }
    if (inputs.phone_dk == undefined) {
      flag = false;
      errorSubmit.phone_dk = "Vui lòng nhập số điện thoại";
    }
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
    if (!flag) {
      setErrors({});
      setErrors(errorSubmit);
    }
    console.log(errorSubmit);
  };
  return (
    <div>
      <Error errors={errors} />
      {/* <Login handleSubmit={HandleSubmit} /> */}
    </div>
  );
}
export default HandleSubmit;
