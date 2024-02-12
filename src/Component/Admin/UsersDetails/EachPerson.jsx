import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../UseContext/Context";
import { Button } from "react-bootstrap";
import AdminNavBar from "../Nav/NavBar";

function EachPerson() {
  const [, , , , , , , , , , userData] = useContext(Context);
  const { ID } = useParams(); //This is the user name of each person....
  const [display, setDisplay] = useState("Purchase");
  return (
    <div className="vh-100 mb-4" style={{ minHeight: "35rem" }}>
      <AdminNavBar />
      <div>
        {userData.map((element) => {
          return (
            <div>
              {element.UserName === ID ? (
                <div className="px-2">
                  <div className="col-md-6 mx-auto border mt-5 rounded">
                    <div className="pt-3 h5 text-black">
                      {element.Name.toUpperCase()}
                    </div>
                    <hr />
                    <div className="d-flex pt-1 px-1 flex-column">
                      <div className="d-flex flex-column">
                        <p className="me-auto text-black mb-0">{`Username:${element.UserName},`}</p>
                        <p className="me-auto mt-0">{`Email:${element.Email}`}</p>
                      </div>
                      <div className="mb-1">
                        <Button
                          className="me-2"
                          onClick={() => setDisplay("Cart")}
                        >
                          View Cart
                        </Button>
                        <Button onClick={() => setDisplay("Purchase")}>
                          View Order
                        </Button>
                      </div>
                      <div className="mt-2">
                        <div className="mt-2">
                          <u>
                            <h5>{display}</h5>
                          </u>
                        </div>
                        {element[display].map((Item) => {
                          return (
                            <div>
                              {
                                <MDBCard key={Item.id} className="mb-3">
                                  <MDBCardBody className="p-1">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex flex-row align-items-center">
                                        <div>
                                          <MDBCardImage
                                            src={`${Item.img}`}
                                            fluid
                                            className="rounded-3"
                                            style={{ width: "65px" }}
                                            alt="Shopping item"
                                          />
                                        </div>
                                        <div className="ms-3 d-flex">
                                          <MDBTypography
                                            tag="h5"
                                            className="my-auto"
                                          >
                                            {Item.Name}
                                          </MDBTypography>
                                          <p className="small mb-0 ms-3">{`Quantity: ${Item.Purchase}`}</p>
                                          <p className="small mb-0 ms-3 text-black h5">{`Total Amount: ${(
                                            Item.Purchase * Item.price
                                          ).toFixed(2)}`}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </MDBCardBody>
                                </MDBCard>
                              }
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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

export default EachPerson;
