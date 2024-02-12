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
import { Context } from "../../UseContext/Context";

function AdminLogin({ children }) {
  const Navigate = useNavigate();
  const [, setLogin, , , , , , , , , , , , , adminData, ,] =
    useContext(Context);
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AdminSubmit = () => {
    adminData.map((element) => {
      if (
        element.Name === name &&
        element.ID === id &&
        element.Email === email &&
        element.Password === password
      ) {
        Navigate("/admin/home");
        setLogin(true);
      } else {
        alert("The given data is not correct");
      }
    });
  };

  return (
    <div className="col-12 ps-5 pe-5 d-flex justify-content-center">
      <div className="col-md-6 col-12">
        <MDBContainer className="p-3 mt-5 d-flex flex-column w-50 vh-100">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink className="text-white bg-secondary">
                {<p className="h3 my-auto">Admin Login</p>}
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBInput
            wrapperClass="mb-4"
            label="Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="ID"
            type="text"
            onChange={(event) => setID(event.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <MDBBtn className="mb-4 mx-auto" onClick={AdminSubmit}>
            Sign in
          </MDBBtn>

          <div className="text-center">
            <p>
              Not an admin? <Link to={"/login"}>Userlogin</Link>
            </p>
          </div>
        </MDBContainer>
      </div>
    </div>
  );
}

export default AdminLogin;
