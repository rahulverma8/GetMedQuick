import React, { useState } from "react";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { postDataToAPI } from "../HelperMethods/APiMethods";
import RootUrl from "../URL";
import { useNavigate } from "react-router-dom";
import "../Styles/Details.css";

function DetailsForm() {
  let [eminities, setEminities] = useState({
    category: "",
    name: "",
    quantity: 0,
    price: "",
  });
  const redirect = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEminities((hospital) => ({
      ...hospital,
      [name]: value,
    }));
  };

  const DropdownHandler = (value) => {
    console.log(value);
    setEminities((searchData) => ({
      ...searchData,
      category: value,
    }));
  };

  const addEminitiesHandler = () => {
    postDataToAPI(`${RootUrl}/addcategory/${eminities.category}`, eminities)
      .then((res) => {
        if ((res.message = "Success")) {
          alert("Eminities added successfully");
          redirect("/");
        } else alert("something went wrong");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  return (
    <div style={{ padding: "20vw 30vw" }}>
      <div className="drop-down">
        <DropdownButton
          id="dropdown-basic-button"
          title="Category"
          onSelect={DropdownHandler}
        >
          <Dropdown.Item eventKey="blood">Blood</Dropdown.Item>
          <Dropdown.Item eventKey="organ">Organs</Dropdown.Item>
          <Dropdown.Item eventKey="medicine">Medicine</Dropdown.Item>
          <Dropdown.Item eventKey="equipment">Equipments</Dropdown.Item>
          <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="am-input">
        <input
          className="amen-input"
          type="text"
          name="name"
          id="name"
          value={eminities.name}
          onChange={changeHandler}
        />
        <input
          className="amen-input"
          type="text"
          name="quantity"
          id="quantity"
          value={eminities.quantity}
          onChange={changeHandler}
        />
        <input
          className="amen-input"
          type="text"
          name="price"
          id="price"
          value={eminities.price}
          onChange={changeHandler}
        />
      </div>
      <div className="am-btn">
        <button className="amen-btn-D" onClick={addEminitiesHandler}>
          Add Eminity
        </button>
      </div>
    </div>
  );
}

export default DetailsForm;
