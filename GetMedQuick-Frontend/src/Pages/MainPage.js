import React, { useState } from "react";
import "../Styles/MainPage.css";
import "../Styles/Request.css";
import Slider from "../component/ResourceSlider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardio from "../Assets/Cardiogram.png";
import service from "../Assets/ser.png";
import register from "../Assets/register.png";
import Contact from "../Pages/Contact";
import { FaSearch } from "react-icons/fa";
import "../Styles/SearchBar.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { getDataFromAPI } from "../HelperMethods/APiMethods";
import { useNavigate } from "react-router-dom";
import RootUrl from "../URL";
import About from "./About";
import Service from "./Service";




const MainPage = () => {

  const [searchData,setSearchData]= useState({category : "", query : ""});

  const redirect = useNavigate();
  
  const handleSearch = (e) => {
    if(e.key === "Enter"){
      redirect(`/searchresult/${searchData.category}/${searchData.query}`);
  }
    e.preventDefault();

  }
      
  const changeHandler = (e) => {
    e.preventDefault();
  
      const { name, value } = e.target;
      console.log(name, value);
      setSearchData((searchData) =>({
          ...searchData,  [name]: value 
      }));
  }
  const DropdownHandler =(value)=>{
    console.log(value);
    setSearchData((searchData) =>({
      ...searchData,  "category": value 
  }));
  }

  return (

    <section className="mainpage">
      <section className="bg-img">
        <div className="bg-content">
          <section className="srch-box">
            <div className="drop-down">
              <DropdownButton
                id="dropdown-basic-button"
                title="Category" onSelect={DropdownHandler} 
              >
                <Dropdown.Item eventKey="blood" >Blood</Dropdown.Item>
                <Dropdown.Item eventKey="organ">Organs</Dropdown.Item>
                <Dropdown.Item eventKey="medicine">Medicine</Dropdown.Item>
                <Dropdown.Item eventKey="equipment">Equipments</Dropdown.Item>
                <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="icn">
              <FaSearch className="srch" />
            </div>
            <div id="svbox">
              <input
                id="Sbox"
                type="search"
                name="query"
                placeholder="Search Equipments or any medical amenities"
                value={searchData.query}
                 onChange={changeHandler} onKeyUp={handleSearch}
              />
            </div>
          </section>
          <h2>Welcome To HCMS</h2>
          <p>
            HCMS is a centralized system connecting a community of hospitals
            together aiming to fulfill the emergency needs of people at critical
            times. It is useful when unfortunately the patient is in a critical
            condition and is in the need of blood/organs/equipment and the
            hospital is unable to deliver the needs,the hospital in need puts
            its need in the HCMS portal,it then shows the hospitals nearby
            having the needful things.This can throw off many mediators who take
            extra money and save time at the time which is so critical.
          </p>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card
                className="m-crd"
                style={{ width: "23rem", height: "18rem" }}
              >
                <img className="crd-img" src={cardio} alt="card-img" />
                <Card.Body>
                  <Card.Title>Hospitality</Card.Title>
                  <Card.Text>
                    Clinical excellence must be the priority for any health care
                    service provider.
                  </Card.Text>
                  <Button href="/#" variant="primary">Apply for Resources</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="m-crd"
                style={{ width: "23rem", height: "18rem" }}
              >
                <img src={register} className="crd-img" alt="hah"/>
                <Card.Body>
                  <Card.Title>Registration</Card.Title>
                  <Card.Text>
                    Hospitals in need of emergency things have to register at
                    the time of joining the portal.
                  </Card.Text>
                  <Button variant="primary">Register Here</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="m-crd"
                style={{ width: "23rem", height: "18rem" }}
              >
                <img src={service} className="crd-img" alt="card" />
                <Card.Body>
                  <Card.Title>Our Services</Card.Title>
                  <Card.Text>
                    We help people in need by providing the emergency factors to
                    the hospitals conncted as a community.
                  </Card.Text>
                  <Button href="/#Service" variant="primary">Our Services</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Slider/>
      <About/>
      <Service/>
      <Contact />
    </section>
  );
};

export default MainPage;
