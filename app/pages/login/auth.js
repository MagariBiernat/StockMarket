import axios from "axios";
import jwt from "jsonwebtoken";
const authToken = () => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "jwt" + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
return (
  <>
    <h1>{console.log(authToken)}</h1>
  </>
);

export default authToken;
