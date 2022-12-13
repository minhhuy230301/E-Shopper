import { render } from "@testing-library/react";
import { useState } from "react";
function Warning(props) {
  function Warn(props) {
    if (!props.warn) {
      return null;
    }
    return <div>Warning</div>;
  }
  function Login() {
    const [showWarning, setWarning] = useState(true);
    function handleToogleClick() {
      setWarning(!showWarning);
    }
    return (
      <div>
        <Warn warn={showWarning}>
          <button onClick={handleToogleClick}>
            {showWarning ? "Hide" : "Show"}
          </button>
        </Warn>
      </div>
    );
  }
}

export default Warning;
