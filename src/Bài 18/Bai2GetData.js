function Bai2GetData(props) {
  var info = props.data;

  return (
    <div>
      <b>ID:{props.data.id}</b>
      <p style={{ marginLeft: "15px" }}>
        <p>-Name: {props.data.name}</p>
        <p>-UserName: {props.data.username}</p>
        <p>-Email: {props.data.email}</p>
        -Address
        <p>-Phone: {props.data.phone}</p>
        <p>-Website: {props.data.website}</p>
        -Company
      </p>
      <br />
    </div>
  );
}
export default Bai2GetData;
