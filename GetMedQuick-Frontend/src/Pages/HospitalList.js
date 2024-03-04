import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/HospitalList.css";
import bac from "../Assets/Doctor.png";
import { useParams } from "react-router-dom";
import Equipments from "./Equipments";
import { getDataFromAPI, postDataToAPI } from "../HelperMethods/APiMethods";
import RootUrl from "../URL";
// import Errorimg from "../Assets/Err.png";

const HospitalList = () => {
  const searchData = useParams();
  const [dataArr, setDataArr] = React.useState([]);

  React.useEffect(() => {
    getDataFromAPI(
      `${RootUrl}/searchhospital/${searchData.category}/${searchData.query}`
    )
      .then((res) => {
        if (!res.isError && res.response) setDataArr(res.response);
        console.log(res.response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="list-cen">
      {dataArr.length > 0 ? (
        dataArr.map((data) => {
          return (
            <Card className="list-crd">
              <div className="internal-crd">
                <div className="word-txt">
                  <Card.Header as="h5">{data.name || ""}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      Hospital Name : {data.hospitalId.name}{" "}
                    </Card.Title>

                    <Card.Text>
                      {" "}
                      City : {data.hospitalId.address.city} landmark :{" "}
                      {data.hospitalId.address.landmark}
                    </Card.Text>

                    <Equipments state={data} type={{ hospitalist: true }} />
                  </Card.Body>
                </div>
                <div className="hos-img">
                  <img src={bac} alt="Hospital" className="list-img" />
                </div>
              </div>
            </Card>
          );
        })
      ) : (
        <>
          {/* <img src={Errorimg}/> */}
        </>
      )}
    </div>
  );
};

export default HospitalList;
