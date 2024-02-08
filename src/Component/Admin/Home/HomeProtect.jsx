import React, { useContext } from "react";
import { Context } from "../../UseContext/Context";
import { Navigate } from "react-router-dom";

function HomeProtect({ children }) {
  const [
    login,
    setLogin,
    search,
    setSearch,
    cartlength,
    setCartlength,
    logedUser,
    setLogedUser,
    productData,
    setProductData,
    userData,
    setUserData,
    cartBillAmount,
    setCartBillAmount,
    adminData,
    setAdminData,
  ] = useContext(Context);
  return <div>{login ? children : <Navigate to={"/admin/login"} />}</div>;
}

export default HomeProtect;
