import React, { useContext } from "react";
import { Context } from "../UseContext/Context";
import { Navigate } from "react-router-dom";

function Protecter({ children }) {
  let [login, , , , , , , , , , , , , ,] = useContext(Context);
  return <div>{login ? children : <Navigate to={"/login"} />}</div>;
}

export default Protecter;
