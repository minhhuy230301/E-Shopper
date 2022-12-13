import { useState } from "react";

function Bai11vidu(props) {
  // let : cho biến có thể thay đổi dc
  // const: dung cho biến cố định

  //   const [getItem, setItem] = useState(true);

  //   function thaydoi() {
  //     setItem(!getItem);
  //   }
  //   return (
  //     <p>
  //       day la trang blog {getItem ? "on" : "off"}
  //       {/* thuật toán 3 ngôi (if else ngắn gon) */}
  //       {/* {
  //       if(getItem ==true){
  //             return "On";
  //       }else{
  //             return "off";
  //       }
  // } */}
  //       <button onClick={thaydoi}>click</button>
  //     </p>
  //   );
  function UserGreeting(props) {
    return <h1>Welcome Back</h1>;
  }
  function GuestGreeting(props) {
    return <h1>Please sign up</h1>;
  }
  function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
  }
  function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
  }
  const [isToogle, setIsToogle] = useState(true);
  // Cách viết hàm (1)
  function handleLoginClick() {
    setIsToogle(true);
  }
  // Cách viết hàm (2)
  const handleLogoutClick = () => {
    setIsToogle(false);
  };
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  const renderButton = () => {
    let button;
    if (isToogle) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }
    return button;
  };
  return (
    <div>
      <Greeting isLoggedIn={isToogle} />
      {renderButton()}
    </div>
  );
}

export default Bai11vidu;
