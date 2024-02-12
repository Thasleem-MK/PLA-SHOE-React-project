import React, { useContext } from "react";
import TitleHook from "../Hook/TitleHook";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "../Collection/Style.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../UseContext/Context";

function Men() {
  TitleHook("Men Archieves");
  const [
    login,
    ,
    ,
    ,
    ,
    setCartlength,
    logedUser,
    ,
    productData,
    ,
    userData,
    setUserData,
  ] = useContext(Context);
  const Navigate = useNavigate();

  const PurchaseUpdater = (element) => {
    const updatedUserData = [...userData]; // Create a copy of userData
    const currentUserIndex = updatedUserData.findIndex(
      (user) => (user.UserName || user.Email) === logedUser.UserName
    );

    const updatedCart = updatedUserData[currentUserIndex].Cart.map(
      (product) => {
        if (product.Name === element.Name) {
          product.Purchase += 1; // Increment Purchase value for the matching product
        }
        return product;
      }
    );

    updatedUserData[currentUserIndex].Cart = updatedCart; // Update the user's cart in the copy of userData
    setUserData(updatedUserData); // Update the state with the new user data
  };

  const AddCart = (element) => {
    if (login) {
      userData.map((User) => {
        if ((User.UserName || User.Email) === logedUser.UserName) {
          if (User.Cart.includes(element)) {
            return PurchaseUpdater(element); //alert("This product is already in your cart");
          } else {
            User.Cart.push(element);
            setCartlength(User.Cart.length);
          }
        }
      });
    } else {
      Navigate("/login");
    }
  };

  return (
    <div className="Collection">
      {productData.map((element) => {
        return (
          <>
            {element.Gender.includes("Men") ? (
              <MDBCard className="Cards">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage src={element.img} fluid alt="..." />

                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{element.Name}</MDBCardTitle>
                  <MDBCardText>{`Price : $${element.price}`}</MDBCardText>
                  <MDBBtn onClick={() => AddCart(element)}>ADD TO CART</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
}

export default Men;
