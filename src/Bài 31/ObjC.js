function ObjC(props) {
  // const objC1 = props.ccc;
  console.log(props.ccc.id);

  return (
    <div>
      <b>ID:{props.ccc.id}</b>
      <p style={{ marginLeft: "15px" }}>
        <p>-Name: {props.ccc.name}</p>
        <p>-UserName: {props.ccc.username}</p>
        <p>-Email: {props.ccc.email}</p>
        -Address
        <p style={{ marginLeft: "15px" }}>
          +Street: {props.ccc.address.street}
        </p>
        <p style={{ marginLeft: "15px" }}>+Suite: {props.ccc.address.suite}</p>
        <p>-Phone: {props.ccc.phone}</p>
        <p>-Website: {props.ccc.website}</p>
        -Company
        <p style={{ marginLeft: "15px" }}>+Name: {props.ccc.company.name}</p>
        <p style={{ marginLeft: "15px" }}>
          +catchPhrase: {props.ccc.company.catchPhrase}
        </p>
      </p>
      <br />
    </div>
  );
}
export default ObjC;
