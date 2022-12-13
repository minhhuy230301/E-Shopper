import { useState } from "react";
import Error from "../Bài 13/Error";
import Login from "../Login";

function LoginAndRegister() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
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
  // function checkMail() {
  //   var my_error = localStorage.getItem("error");
  //   my_error = JSON.parse(my_error);

  //   Object.keys(my_error).map(function (key, index) {
  //     console.log(my_error.email);
  //     if (my_error.email === inputs.email) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }
  // function checkPass() {
  //   var my_error = localStorage.getItem("error");
  //   my_error = JSON.parse(my_error);

  //   Object.keys(my_error).map(function (key, index) {
  //     console.log(my_error.pass);
  //     if ((my_error.pass === inputs.password)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    var my_account = localStorage.getItem("account");
    my_account = JSON.parse(my_account);

    //Email
    if (inputs.email == "") {
      flag = false;
      errorSubmit.email = "Vui lòng nhập email";
    } else if (!IsEmail()) {
      flag = false;
      errorSubmit.email = "Địa chỉ email không hợp lệ";
    }
    if (inputs.password == "") {
      flag = false;
      errorSubmit.pass = "Vui lòng nhập mật khẩu";
    }

    if (!flag) {
      setErrors(errorSubmit);
    } else {
      // setErrors({});
      if (
        my_account.email == inputs.email &&
        my_account.pass == inputs.password
      ) {
        errorSubmit.pass = "ok";
      } else {
        errorSubmit.pass = "no";
      }
    }
    console.log(errorSubmit);
  };
  return (
    <div>
      <Error errors={errors} />
      <form onSubmit={handleSubmit}>
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
        <button className="btn btn-default" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginAndRegister;
