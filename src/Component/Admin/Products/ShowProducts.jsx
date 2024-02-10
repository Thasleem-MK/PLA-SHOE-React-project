import React, { useContext, useState } from "react";
import AdminNavBar from "../Nav/NavBar";
import "../Home/Home.css";
import "./ShowProducts.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import "../../Collection/Style.css";
import { Context } from "../../UseContext/Context";
import { Delete, Edit } from "@mui/icons-material";

function ShowProducts() {
  const [filter, setFilter] = useState(false); //state the fiter button clicked or not
  const [showElement, setShowElement] = useState(""); //which filter element is choosed men or women or other else
  const [showModal, setShowModal] = useState(false); //State of modal, the edit button is clicked or not
  const [updatedProduct, setUpdatedProduct] = useState({}); //Updated details of existing product
  const [name, setName] = useState(""); //this is used to get the same element when the edit button clicked, becase when we use a function for the template. So we can't get the same element because of the iteration
  const [addingProduct, setAddingProduct] = useState(false); //to get the Product Add button is clicked or not??
  const [newProduct, setNewProduct] = useState({
    Name: "",
    Gender: "",
    Type: "",
    Purchase: 1,
    price: 0,
    img: "",
  }); //use to store tempararly the new adding element's details
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

  const handleChange = (event) => {
    if (event.target.value !== "" && event.target.name !== "price") {
      setUpdatedProduct({
        ...updatedProduct,
        [event.target.name]: event.target.value,
      });
    } else if (event.target.value !== "" && event.target.name === "price") {
      setUpdatedProduct({
        ...updatedProduct,
        price: Number(event.target.value),
      });
    } //..............................(2)
  };
  const handleSave = () => {
    const updatedProdectData = [...productData];
    const index = updatedProdectData.findIndex(
      (product) => product.Name === name
    );
    Object.assign(updatedProdectData[index], updatedProduct);
    setProductData(updatedProdectData);
  };

  const Cards = (element) => {
    //Display products in cards
    return (
      <div>
        <MDBCard className="Cards">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={element.img} fluid alt="..." />

            <div
              className="mask"
              style={{
                backgroundColor: "rgba(251, 251, 251, 0.15)",
              }}
            ></div>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>{element.Name}</MDBCardTitle>
            <MDBCardText>
              <Delete
                className="text-danger me-3"
                onClick={() => {
                  handleDelete(element);
                }}
              />
              <Edit
                className="text-warning ms-3"
                onClick={() => {
                  setShowModal(true);
                  setUpdatedProduct(Object.assign(updatedProduct, element));
                  setName(updatedProduct.Name); //...................(1)
                }}
              />
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        {/* ......................MODAL for editing................................................... */}
        <Modal show={showModal}>
          <ModalHeader>
            <Modal.Title className="mx-auto">EDIT PRODUCTS</Modal.Title>
          </ModalHeader>
          <ModalBody>
            <input
              className="w-100"
              type="text"
              name="Name"
              placeholder={`${updatedProduct.Name}`}
              onChange={(event) => handleChange(event)}
            />
            <select
              className="w-100 mt-1"
              name="Gender"
              onChange={(event) => {
                handleChange(event);
              }}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
            <select
              className="w-100 mt-1"
              name="Type"
              onChange={(event) => {
                handleChange(event);
              }}
            >
              <option value="Running">Running</option>
              <option value="Sneaker">Sneaker</option>
              <option value="Training">Training</option>
            </select>
            <input
              className="w-100 mt-1"
              type="text"
              name="price"
              placeholder={`$${updatedProduct.price}`}
              onChange={(event) => handleChange(event)}
            />
            <input
              className="w-100 mt-1"
              type="text"
              name="img"
              placeholder={`Product Image Link`}
              onChange={(event) => handleChange(event)}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Discard Changes
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleSave();
                setShowModal(false);
              }}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>

        {/* ..............................................For Adding New Products.................................... */}
        <Modal show={addingProduct}>
          <ModalHeader>
            <Modal.Title className="mx-auto">ADD PRODUCTS</Modal.Title>
          </ModalHeader>
          <ModalBody>
            <input
              className="w-100"
              type="text"
              placeholder={`Product Name`}
              onChange={(event) => {
                setNewProduct({ ...newProduct, Name: event.target.value });
              }}
            />

            <select
              className="w-100 mt-1"
              onChange={(event) => {
                setNewProduct({ ...newProduct, Gender: event.target.value });
              }}
            >
              <option value="Men">Men</option>
              <option value="Men">Women</option>
            </select>

            <select
              className="w-100 mt-1"
              onChange={(event) => {
                setNewProduct({ ...newProduct, Type: event.target.value });
              }}
            >
              <option value="Running">Running</option>
              <option value="Sneaker">Sneaker</option>
              <option value="Training">Training</option>
            </select>
            <input
              className="w-100 mt-1"
              type="text"
              placeholder={`Price`}
              onChange={(event) => {
                setNewProduct({ ...newProduct, price: event.target.value });
              }}
            />
            <input
              className="w-100 mt-1"
              type="text"
              placeholder={`Product Image Link`}
              onChange={(event) => {
                setNewProduct({ ...newProduct, img: event.target.value });
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setAddingProduct(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setAddingProduct(false);
                newProduct.Name !== "" &&
                newProduct.Gender !== "" &&
                newProduct.Type !== "" &&
                newProduct.price !== 0
                  ? productData.push(newProduct)
                  : alert("Please Complete the deatails");
              }}
            >
              Add to product list
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };

  const handleDelete = (element) => {
    const updatedProdectData = [...productData]; // Create a copy of productData
    const currentProductIndex = updatedProdectData.findIndex(
      (Product) => Product.Name === element.Name
    );
    updatedProdectData.splice(currentProductIndex, 1); // Remove the item from the list of products
    setProductData(updatedProdectData);
  };

  return (
    <div>
      <div>
        <AdminNavBar />
        <h1 className="h1 text-black mt-4">Product Section</h1>
        <Button
          onClick={() => {
            setFilter(!filter);
            setShowElement("");
          }}
        >
          Filter Prodects
        </Button>
        <Button className="ms-2" onClick={() => setAddingProduct(true)}>
          Add new Products
        </Button>
        <div className={filter ? "mt-1 Show" : "mt-1 Hide"}>
          <Button className="me-1" onClick={() => setShowElement("Men")}>
            Men
          </Button>
          <Button className="me-1" onClick={() => setShowElement("Women")}>
            Women
          </Button>
          <Button className="me-1" onClick={() => setShowElement("Running")}>
            Runnig
          </Button>
          <Button className="me-1" onClick={() => setShowElement("Sneaker")}>
            Sneaker
          </Button>
          <Button onClick={() => setShowElement("Training")}>Training</Button>
        </div>
        <div>
          {
            <div className="Collection">
              {showElement === ""
                ? productData.map((element) => {
                    return <>{<>{Cards(element)}</>}</>;
                  })
                : productData.map((element) => {
                    return (
                      <>
                        {element.Gender === showElement ||
                        element.Type === showElement ? (
                          <div>{Cards(element)}</div>
                        ) : (
                          ""
                        )}
                      </>
                    );
                  })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;
