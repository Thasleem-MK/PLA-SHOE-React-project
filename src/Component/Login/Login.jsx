import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../UseContext/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleHook from "../Hook/TitleHook";

function Login() {
  TitleHook("Login");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [, setLogin, , , , setCartlength, , setLogedUser, , , userData, , , ,] =
    useContext(Context);
  const Navigate = useNavigate();
  const loginSubmit = () => {
    userData.forEach((element) => {
      if (
        (element.Email === user || element.UserName === user) &&
        element.Password === password
      ) {
        setLogin(true);
        Navigate("/profile");
        setLogedUser(element);
        setCartlength(element.Cart.length);
      }
    });
  };

  return (
    <MDBContainer className="p-3 mt-5 d-flex flex-column w-50 vh-100">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink style={{ backgroundColor: "lightblue" }}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <Link to={"/register"}>
            <MDBTabsLink>Register</MDBTabsLink>
          </Link>
        </MDBTabsItem>
      </MDBTabs>
      <MDBInput
        wrapperClass="mb-4"
        label="Username or Email"
        id="form1"
        type="text"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <MDBBtn className="mb-4" onClick={loginSubmit}>
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <Link to={"/register"}>Register</Link>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Login;
