function Bai1GetData(props) {
  var info = props.data;

  console.log(info);
  function renderdata() {
    if (props.data.length > 0) {
      return info.map((key, item) => {
        return (
          <li key={key.id}>
            <b>ID:{key.id}</b>
            <p style={{ marginLeft: "15px" }}>
              <p>-Name: {key.name}</p>
              <p>-UserName: {key.username}</p>
              <p>-Email: {key.email}</p>
              -Address
              <p style={{ marginLeft: "15px" }}>
                +Street: {key.address.street}
              </p>
              <p style={{ marginLeft: "15px" }}>+Suite: {key.address.suite}</p>
              <p>-Phone: {key.phone}</p>
              <p>-Website: {key.website}</p>
              -Company
              <p style={{ marginLeft: "15px" }}>+Name: {key.company.name}</p>
              <p style={{ marginLeft: "15px" }}>
                +catchPhrase: {key.company.catchPhrase}
              </p>
            </p>
            <br />
          </li>
        );
      });
    }
  }
  return <ul>{renderdata()}</ul>;
}
export default Bai1GetData;
