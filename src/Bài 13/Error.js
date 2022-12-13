function Error(props) {
  function renderError() {
    let { errors } = props;
    //Khi lỗi là object
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <li key={index}>{errors[key]}</li>;
      });
    }
  }
  return <ul>{renderError()}</ul>;
}
export default Error;
