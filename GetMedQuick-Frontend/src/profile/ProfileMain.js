import React, { useEffect, useLayoutEffect, useState } from "react";
import "../Styles/ProfileMain.css";
import { useDispatch, useSelector } from "react-redux";
import { changeHospitalAuth, setHospitalData } from "../ReduxCode/Reducers";
import { Route, Routes, useNavigate } from "react-router-dom";
import FormData from "../DetailsForm/FormData";
import AvaliableCategories from "./AvaliableCategories";
import { getDataFromAPI } from "../HelperMethods/APiMethods";
import RootUrl from "../URL";

function ProfileMain() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const navigateToForm = () => {
    redirect("DetailsForm/FormData");
  };

  const reduxState = useSelector((state) => state);
  const auth = reduxState;
  const [data, setdata] = useState({});
  const [loading, setLoading] = useState(true);

  const LogOutHandler = (e) => {
    e.preventDefault();
    dispatch(changeHospitalAuth(false));
    redirect("/");
  };

  useLayoutEffect(() => {
    getDataFromAPI(`${RootUrl}/gethospital`)
      .then((resdata) => {
        console.log(resdata.response);
        setdata(resdata.response);
        // dispatch(setHospitalData(resdata.response))
        setLoading(false);
      })
      .catch(() => redirect("/"));
  }, []);

  return (
    <div className="dashboard">
      {loading ? (
        <></>
      ) : (
        <>
          <h1 className="dashboard-h1">Dashboard</h1>

          <div className="card-cont">
            <div className="card-img"></div>
            <h2 className="card-name moveup">{data.name}</h2>
            <p className="card-add moveup">
              <i class="fi-xnsuxm-map-marker-solid"></i>
              {data.address.landmark} , {data.address.city} ,{" "}
              {data.address.pincode} , India
            </p>
            <p className="card-emaill moveup">email : {data.email}</p>
            <div className="btn-set">
            <button
              className="view-btn"
              onClick={() => redirect("/hospital/requests")}
            >
              View Requests
            </button>

            <button
              className="amen-btn"
              onClick={() => redirect("/hospital/detailsform")}
            >
              Add Eminities
            </button>
            <button className="lgout-btn" onClick={LogOutHandler}>
              Logout
            </button>
            </div>
            
          </div>
          <AvaliableCategories dataArray={data} />
        </>
      )}{" "}
    </div>
  );
}

export default ProfileMain;
