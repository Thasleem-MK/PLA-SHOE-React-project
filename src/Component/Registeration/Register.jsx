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
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../UseContext/Context";
import TitleHook from "../Hook/TitleHook";

function Register() {
  TitleHook("Registeration");
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Password: "",
    Cart: [],
    Purchase:[]
  });
  const [, , , , , , , , , , userData, setUserData, , ,] = useContext(Context);
  const [validations, setValidations] = useState({
    Name: false,
    UserName: false,
    Email: false,
    Password: false,
  });

  const handleChange = (event) => {
    const { name, value, pattern } = event.target;
    const isValidPattern = new RegExp(pattern).test(value);
    setInput({ ...input, [name]: value });
    setValidations({ ...validations, [name]: isValidPattern });
  };

  const Submit = () => {
    const isValid = Object.values(validations).every((isValid) => isValid);

    if (isValid) {
      const newUser = { ...input };
      setUserData((prevUserData) => [...prevUserData, newUser]);

      Navigate("/login");
    }
  };

  console.log(userData);
  return (
    <MDBContainer className="p-3 mt-5 d-flex flex-column w-50 vh-100">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <Link to={"/login"}>
            <MDBTabsLink>Login</MDBTabsLink>
          </Link>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink style={{ backgroundColor: "lightblue" }}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <form action="">
        <MDBInput //Input fields starts here........................................
          wrapperClass="mb-4"
          label="Name"
          id="form1"
          type="text"
          name="Name"
          value={input.Name}
          onChange={handleChange}
          required
        />
        <MDBInput
          className="Username"
          wrapperClass="mb-4"
          label="Username"
          id="form1"
          type="text"
          name="UserName"
          value={input.UserName}
          onChange={handleChange}
          pattern="^[A-Za-z0-9].{5,15}"
          required
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Email"
          id="form1"
          type="email"
          name="Email"
          value={input.Email}
          onChange={handleChange}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
        />{" "}
        <div
          className="text-danger"
          style={{ textAlign: "left", margin: "0", fontSize: "12px" }}
        >
          Password have 8 characters should contain 1 letter and 1 digit
        </div>
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          name="Password"
          value={input.Password}
          onChange={handleChange}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />{" "}
        <MDBInput
          wrapperClass="mb-4"
          label="Confirm Password"
          id="form2"
          type="password"
          name="ConfirmPassword"
          value={input.ConfirmPassword}
          pattern={input.Password}
          required
        />
        <MDBBtn className="mb-4" onClick={Submit}>
          Sign in
        </MDBBtn>
      </form>
    </MDBContainer>
  );
}

export default Register;
