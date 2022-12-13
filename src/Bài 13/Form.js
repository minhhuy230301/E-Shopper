import { useState } from "react";
import { TextareaHTMLAttributes } from "react";
import Error from "./Error";
function Form(props) {
  // ---THE TEXTAREA TAG---
  //   const [state, setState] = useState(true);
  //   const handleChange = (e) => {
  //     setState(e.target.value.toUpperCase());
  //   };
  //   const handleSubmit = (e) => {
  //     alert("name:" + state);
  //     e.preventDefault();
  //   };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         name:
  //         <textarea value={state} onChange={handleChange} />
  //         {/* <input type="text" value={state} onChange={handleChange} /> */}
  //       </label>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // ---BÁO LỖI 1---
  //   const [email, setEmail] = useState("");
  //   const [loi1, setLoi1] = useState("");
  //   const [pass, setPass] = useState("");
  //   const [loi2, setLoi2] = useState("");
  //   function thaydoiEmail(e) {
  //     let getValue = e.target.value;
  //     setEmail(getValue);
  //   }
  //   function thaydoiPass(e) {
  //     let getValue = e.target.value;
  //     setPass(getValue);
  //   }
  //   function checkForm(e) {
  //     //dung su kien mac dinh
  //     e.preventDefault();
  //     if (email == "") {
  //       setLoi1("vui long nhap email");
  //     } else {
  //       setLoi1("");
  //     }
  //     if (pass == "") {
  //       setLoi2("vui long nhap pass");
  //     } else {
  //       setLoi2("");
  //     }
  //     if (email != "" && pass != "") {
  //       console.log("ok");
  //     }
  //   }
  //   return (
  //     <div className="App">
  //       <form onSubmit={checkForm}>
  //         <input type="text" value={email} name="email" onChange={thaydoiEmail} />
  //         <p>{loi1}</p>
  //         <input type="text" value={pass} name="email" onChange={thaydoiPass} />
  //         <p>{loi2}</p>
  //         <button type="submit">send</button>
  //       </form>
  //     </div>
  //   );
  // ---BÁO LỖI 2 (DÙNG TỎNG DỰ ÁN)---
  const [inputs, setInputs] = useState("");
  const [errors, setErrors] = useState({}); //setError: Lưu trũ toàn bộ lỗi dưới dạng object

  const handleInput = (e) => {
    //function dùng chung cho các thẻ input,textarea,...
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorSubmit = {};
    let flag = true;
    if (inputs.email == undefined) {
      flag = false;
      errorSubmit.email = "Vui lòng nhập email";
    }
    if (inputs.password == undefined) {
      flag = false;
      errorSubmit.password = "Vui lòng nhập password";
    }
    if (inputs.user == undefined) {
      flag = false;
      errorSubmit.user = "Vui lòng nhập user";
    }
    if (!flag) {
      setErrors(errorSubmit);
    }
    console.log(errorSubmit);
  };

  // function renderError() {
  //   //Khi lỗi là object
  //   if (Object.keys(errors).length > 0) {
  //     return Object.keys(errors).map((key, index) => {
  //       return <li key={index}>{errors[key]}</li>;
  //     });
  //   }
  // }
  // function renderError() { //Khi lỗi là Array
  //   if (errors.length > 0) {
  //     return errors.map((value, key) => {
  //       return <li key={key}>{value}</li>;
  //     });
  //   }
  // }
  return (
    <div>
      {/* {renderError()} */}
      <Error errors={errors} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
        />
        <input type="text" name="user" onChange={handleInput} />
        <button type="submit" className="btn btn-default">
          Login
        </button>
      </form>
    </div>
  );
  //   ---THE SELECT TAG---
  //   const [state, setState] = useState("demo1");

  //   function handleChange(e) {
  //     let getvalue = e.target.value;
  //     setState(getvalue);
  //   }
  //   function handleSubmit(e) {
  //     alert("Name: " + state);
  //     e.preventDefault();
  //   }
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <select value={state} onChange={handleChange}>
  //         <option value="demo1">Demo1</option>
  //         <option value="demo2">Demo2</option>
  //         <option value="demo3">Demo3</option>
  //       </select>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // ---HANDLING MULTIPLE INPUTS---
  //   const [isGoing, setIsGoing] = useState(true);
  //   const [guest, setGuest] = useState(2);
  //   function renderList(e) {
  //     const target = e.target;
  //     if (target.type === "checkbox") {
  //       setIsGoing(target.checkbox);
  //     } else {
  //       setGuest(target.value);
  //     }
  //   }
  //   return (
  //     <form>
  //       <label>
  //         is going
  //         <input
  //           name="isGoing"
  //           type="checkbox"
  //           checked={isGoing}
  //           onChange={renderList}
  //         />
  //       </label>
  //       <label>
  //         is guest
  //         <input
  //           name="guest"
  //           type="textarea"
  //           checked={guest}
  //           onChange={renderList}
  //         />
  //       </label>
  //     </form>
  //   );
}

export default Form;
