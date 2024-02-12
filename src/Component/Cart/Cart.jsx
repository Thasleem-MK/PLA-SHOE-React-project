import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../UseContext/Context";
import "./Style.css";
import TitleHook from "../Hook/TitleHook";

export default function Cart() {
  TitleHook("Cart");
  const [, , , , , setCartlength, logedUser, , , , userData, setUserData] =
    useContext(Context);
  const [debitCardStatus, setDebitCardStatus] = useState(false);

  const handleDebitCard = (event) => {
    event.target.value !== ""
      ? setDebitCardStatus(true)
      : setDebitCardStatus(false);
  };

  const PurchaseUpdater = (element, value) => {
    const updatedUserData = [...userData]; // Create a copy of userData
    const currentUserIndex = updatedUserData.findIndex(
      (user) => (user.UserName || user.Email) === logedUser.UserName
    );

    const updatedCart = updatedUserData[currentUserIndex].Cart.map(
      (product) => {
        if (product.Name === element.Name) {
          if (product.Purchase >= 2 && value < 0) {
            product.Purchase += value; // Decrement Purchase value for the matching product
          } else if (product.Purchase >= 0 && value > 0) {
            product.Purchase += value; // Increment Purchase value for the matching product
          }
        }
        return product;
      }
    );

    updatedUserData[currentUserIndex].Cart = updatedCart; // Update the user's cart in the copy of userData
    setUserData(updatedUserData); // Update the state with the new user data
  };

  return (
    <div className="col-12">
      {userData.map((User) => {
        if ((User.UserName || User.Email) === logedUser.UserName) {
          return (
            <div>
              {
                <section
                  className="h-100 h-custom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                      <MDBCol>
                        <MDBCard>
                          <MDBCardBody className="p-4">
                            <MDBRow>
                              <MDBCol lg="7">
                                <MDBTypography tag="h5">
                                  <Link
                                    className="text-body"
                                    to={"/collection"}
                                  >
                                    <MDBIcon
                                      fas
                                      icon="long-arrow-alt-left me-2"
                                    />{" "}
                                    Continue shopping
                                  </Link>
                                </MDBTypography>

                                <hr />

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                  <div>
                                    <p className="mb-1">Shopping cart</p>
                                    <p className="mb-0">
                                      {`You have ${User.Cart.length} items in your cart`}
                                    </p>
                                  </div>
                                </div>
                                {User.Cart.map((element, index) => {
                                  return (
                                    <div>
                                      {
                                        <MDBCard className="mb-3">
                                          <MDBCardBody>
                                            <div className="d-flex justify-content-between">
                                              <div className="d-flex flex-row align-items-center">
                                                <div>
                                                  <MDBCardImage
                                                    src={element.img}
                                                    fluid
                                                    className="rounded-3"
                                                    style={{ width: "65px" }}
                                                    alt="Shopping item"
                                                  />
                                                </div>
                                                <div className="ms-3">
                                                  <MDBTypography tag="h5">
                                                    {element.Name}
                                                  </MDBTypography>
                                                  <p className="small mb-0">
                                                    {`${element.Gender},${element.Type}`}
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="d-flex flex-row align-items-center">
                                                <div
                                                  style={{
                                                    width: "60px",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                  }}
                                                >
                                                  <button
                                                    className="Buttons"
                                                    onClick={() => {
                                                      PurchaseUpdater(
                                                        element,
                                                        -1
                                                      );
                                                    }}
                                                  >
                                                    -
                                                  </button>
                                                  <MDBTypography
                                                    tag="h5"
                                                    className="fw-normal mb-0"
                                                  >
                                                    {element.Purchase}
                                                  </MDBTypography>
                                                  <button
                                                    className="Buttons"
                                                    onClick={() => {
                                                      PurchaseUpdater(
                                                        element,
                                                        1
                                                      );
                                                    }}
                                                  >
                                                    +
                                                  </button>
                                                </div>
                                                <div style={{ width: "80px" }}>
                                                  <MDBTypography
                                                    tag="h5"
                                                    className="mb-0"
                                                  >
                                                    {`$${(
                                                      element.Purchase *
                                                      element.price
                                                    ).toFixed(2)}`}
                                                  </MDBTypography>
                                                </div>
                                                <MDBIcon
                                                  fas
                                                  icon="trash-alt"
                                                  className="text-danger"
                                                  onClick={() => {
                                                    PurchaseUpdater(
                                                      element,
                                                      -1 * element.Purchase + 1
                                                    );
                                                    const updatedUserData = [
                                                      ...userData,
                                                    ]; // Create a copy of userData
                                                    const currentUserIndex =
                                                      updatedUserData.findIndex(
                                                        (user) =>
                                                          user.UserName ===
                                                          logedUser.UserName
                                                      );
                                                    updatedUserData[
                                                      currentUserIndex
                                                    ].Cart.splice(index, 1); // Remove the item from the cart
                                                    setUserData(
                                                      updatedUserData
                                                    ); // Update the user's data
                                                    setCartlength(
                                                      User.Cart.length
                                                    );
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </MDBCardBody>
                                        </MDBCard>
                                      }
                                    </div>
                                  );
                                })}
                              </MDBCol>

                              <MDBCol lg="5">
                                <MDBCard className="bg-primary text-white rounded-3">
                                  <MDBCardBody>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                      <MDBTypography tag="h5" className="mb-0">
                                        Card details
                                      </MDBTypography>
                                      <MDBCardImage
                                        src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/cropped-favicon-180x180.png"
                                        fluid
                                        className="rounded-3"
                                        style={{ width: "45px" }}
                                        alt="Avatar"
                                      />
                                    </div>

                                    <p className="small text-white">
                                      Card type
                                    </p>

                                    <MDBIcon
                                      fab
                                      icon="cc-mastercard fa-2x me-2"
                                    />

                                    <MDBIcon fab icon="cc-visa fa-2x me-2" />

                                    <MDBIcon fab icon="cc-amex fa-2x me-2" />

                                    <MDBIcon fab icon="cc-paypal fa-2x me-2" />

                                    <form className="mt-4">
                                      <MDBInput
                                        className="mb-4"
                                        label="Cardholder's Name"
                                        type="text"
                                        size="lg"
                                        placeholder="Cardholder's Name"
                                        contrast
                                        required
                                        onChange={(event) =>
                                          handleDebitCard(event)
                                        }
                                      />

                                      <MDBInput
                                        className="mb-4"
                                        label="Card Number"
                                        type="text"
                                        size="lg"
                                        minLength="19"
                                        maxLength="19"
                                        placeholder="1234 5678 9012 3457"
                                        contrast
                                        required
                                        onChange={(event) =>
                                          handleDebitCard(event)
                                        }
                                      />

                                      <MDBRow className="mb-4">
                                        <MDBCol md="6">
                                          <MDBInput
                                            className="mb-4"
                                            label="Expiration"
                                            type="text"
                                            size="lg"
                                            minLength="7"
                                            maxLength="7"
                                            placeholder="MM/YYYY"
                                            contrast
                                            required
                                            onChange={(event) =>
                                              handleDebitCard(event)
                                            }
                                          />
                                        </MDBCol>
                                        <MDBCol md="6">
                                          <MDBInput
                                            className="mb-4"
                                            label="Cvv"
                                            type="text"
                                            size="lg"
                                            minLength="3"
                                            maxLength="3"
                                            placeholder="&#9679;&#9679;&#9679;"
                                            contrast
                                            required
                                            onChange={(event) =>
                                              handleDebitCard(event)
                                            }
                                          />
                                        </MDBCol>
                                      </MDBRow>
                                    </form>

                                    <hr />

                                    <div className="d-flex justify-content-between">
                                      <p className="mb-2 text-white">
                                        Subtotal
                                      </p>
                                      <p className="mb-2 text-white">{`$${User.Cart.reduce(
                                        (acc, crr) => {
                                          return (acc +=
                                            crr.price * crr.Purchase);
                                        },
                                        0
                                      ).toFixed(2)}`}</p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                      <p className="mb-2 text-white">
                                        Shipping
                                      </p>
                                      <p className="mb-2 text-white">$20.00</p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                      <p className="mb-2 text-white">
                                        Total(Incl. taxes)
                                      </p>
                                      <p className="mb-2 text-white">{`$${(
                                        User.Cart.reduce((acc, crr) => {
                                          acc = acc + crr.price * crr.Purchase;
                                          return Number(acc);
                                        }, 0) + 20
                                      ).toFixed(2)}`}</p>
                                    </div>

                                    <MDBBtn
                                      color="info"
                                      block
                                      size="lg"
                                      onClick={() => {
                                        return debitCardStatus
                                          ? (() => {
                                              setCartlength(0);
                                              alert("Purchase Completed");
                                              const updatedUserData = [
                                                ...userData,
                                              ];
                                              const currentUserIndex =
                                                updatedUserData.findIndex(
                                                  (user) =>
                                                    user.UserName ===
                                                    logedUser.UserName
                                                );
                                              updatedUserData[
                                                currentUserIndex
                                              ].Purchase.push(
                                                ...updatedUserData[
                                                  currentUserIndex
                                                ].Cart
                                              ); /////Cart push to user Purchased Product Section..........

                                              updatedUserData[
                                                currentUserIndex
                                              ].Cart = [];
                                              setUserData(updatedUserData);
                                            })()
                                          : alert("Complete the card details");
                                      }}
                                    >
                                      <div className="d-flex justify-content-between">
                                        <span>{`$${(
                                          User.Cart.reduce((acc, crr) => {
                                            acc =
                                              acc + crr.price * crr.Purchase;
                                            return acc;
                                          }, 0) + 20
                                        ).toFixed(2)}`}</span>
                                        <span>
                                          Checkout{" "}
                                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                        </span>
                                      </div>
                                    </MDBBtn>
                                  </MDBCardBody>
                                </MDBCard>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </section>
              }
            </div>
          );
        }
        return 0;
      })}
    </div>
  );
}
