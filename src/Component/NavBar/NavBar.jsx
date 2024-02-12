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
import { Context } from "../UseContext/Context";

function NavBar() {
  const [login, setLogin, , setSearch, cartlength, setCartlength] =
    useContext(Context);
  const Navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand className="Plashoe" onClick={() => Navigate("/")}>
            PLASHOE
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
                <Nav.Link onClick={() => Navigate("/men")}>MEN</Nav.Link>
                <Nav.Link onClick={() => Navigate("/women")}>WOMEN</Nav.Link>
                <Nav.Link onClick={() => Navigate("/collection")}>
                  COLLECTION
                </Nav.Link>
                <Nav.Link onClick={() => Navigate("/lookbook")}>
                  LOOKBOOK
                </Nav.Link>
                <Nav.Link onClick={() => Navigate("/sale")}>SALE</Nav.Link>
              </div>
              <div className="NavRight">
                <Nav.Link onClick={() => Navigate("/story")}>
                  OUR STORY
                </Nav.Link>
                <Nav.Link onClick={() => Navigate("/contact")}>
                  CONTACT
                </Nav.Link>
                <Nav.Link
                  style={{ position: "relative" }}
                  title="View Cart"
                  onClick={() =>
                    login ? Navigate("/cart") : Navigate("/login")
                  }
                >
                  <ShoppingCart />
                  <span className="CartsCount ms-auto mb-auto">
                    {cartlength}
                  </span>
                </Nav.Link>
                <Nav.Link
                  title="View Profile"
                  onClick={() => Navigate("/profile")}
                >
                  <Person />
                </Nav.Link>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onClick={() => Navigate("/collection")}
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </Form>
                <Nav.Link
                  title="ADMIN"
                  onClick={() => {
                    setCartlength(0);
                    setLogin(false);
                    Navigate("/admin/home");
                  }}
                >
                  <SupervisorAccount />
                </Nav.Link>
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
