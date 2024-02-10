import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import AdminNavBar from "../Nav/NavBar";
import "../Home/Home.css";
import { Form } from "react-bootstrap";
import { Context } from "../../UseContext/Context";
import { useNavigate } from "react-router-dom";
import { Info } from "@mui/icons-material";

function UsersDetails() {
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
  const [searchUser, setSearchUser] = useState(""); //value from the search bar
  const Navigate = useNavigate();

  const DeleteUser = (Index) => {
    const UpdatedUserData = [...userData];
    UpdatedUserData.splice(Index, 1);
    setUserData(UpdatedUserData);
  };
  return (
    <div className="vh-100">
      <div>
        <AdminNavBar />
        <div className="col-md-5 mx-auto px-4 mb-5">
          <Form className="mt-4 border">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setSearchUser(event.target.value)}
            />
          </Form>
        </div>
        {searchUser === ""
          ? userData.map((element, Index) => {
              return (
                <div className="px-5 mt-2 col-md-10 mx-auto">
                  <MDBCard className="mb-3">
                    <MDBCardBody className="p-1">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src={
                                "data:image/png;base64,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"
                              }
                              fluid
                              className="rounded-3"
                              style={{ width: "65px" }}
                              alt="Shopping item"
                            />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5" className="my-auto">
                              {element.Name}
                            </MDBTypography>
                            <p className="small mb-0">{`${element.Email}`}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center me-2">
                          <Info
                            className="text-primary me-3"
                            style={{cursor:"pointer"}}
                            onClick={() => Navigate(`${element.UserName}`)}
                          />
                          <MDBIcon
                            fas
                            icon="trash-alt"
                            className="text-danger"
                            style={{cursor:"pointer"}}
                            onClick={() => DeleteUser(Index)}
                          />
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              );
            })
          : userData.map((element, Index) => {
              return (
                <div>
                  {element.Name.toLowerCase().includes(
                    searchUser.toLowerCase()
                  ) ||
                  element.UserName.toLowerCase().includes(
                    searchUser.toLowerCase()
                  ) ||
                  element.Email.toLowerCase().includes(
                    searchUser.toLowerCase()
                  ) ? (
                    <div className="px-5 mt-2 col-md-10 mx-auto">
                      <MDBCard
                        className="mb-3"
                      >
                        <MDBCardBody className="p-1">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={
                                    "data:image/png;base64,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"
                                  }
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5" className="my-auto">
                                  {element.Name}
                                </MDBTypography>
                                <p className="small mb-0">{`${element.Email}`}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center me-2">
                              <Info
                                className="text-primary me-3"
                                style={{cursor:"pointer"}}
                                onClick={() => Navigate(`${element.UserName}`)}
                              />
                              <MDBIcon
                                fas
                                icon="trash-alt"
                                className="text-danger"
                                style={{cursor:"pointer"}}
                                onClick={() => DeleteUser(Index)}
                              />
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default UsersDetails;
