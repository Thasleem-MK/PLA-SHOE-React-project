import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Menu,
  ShoppingCart,
  Person,
  SupervisorAccount,
} from "@mui/icons-material";
import "./Style.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../UseContext/Context";

function NavBar() {
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
  const Navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="Plashoe">
            ADMIN PAGE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Menu />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 NavBar"
              style={{ maxHeight: "100px", width: "100%" }}
              navbarScroll
            >
              <div className="NavLeft">
                <Nav.Link onClick={() => Navigate("/admin/home")}>HOME</Nav.Link>
                <Nav.Link onClick={() => Navigate("/admin/usersdeatails")}>USERS</Nav.Link>
                <Nav.Link onClick={() => Navigate("/admin/productsdeatails")}>PRODUCTS</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
