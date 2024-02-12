import React, { useContext } from "react";
import "./Profile.css";
import { Context } from "../UseContext/Context";
import TitleHook from "../Hook/TitleHook";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  TitleHook("Profile");
  const [, setLogin, , , , , logedUser] = useContext(Context);
  const Navigate = useNavigate();
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="data:image/jpeg;base64,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"
                    alt="Avatar"
                    className="mt-5 mb-2"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{logedUser.Name}</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">
                          {logedUser.UserName}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {logedUser.Email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBBtn
                        className="bg-primary"
                        onClick={() => {
                          Navigate("/Collection");
                        }}
                      >
                        Go to collections
                      </MDBBtn>
                      <MDBBtn
                        className="bg-danger mt-2"
                        onClick={() => {
                          setLogin(false);
                        }}
                      >
                        Logout
                      </MDBBtn>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
