import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { getDataFromAPI } from '../HelperMethods/APiMethods';
import bac from "../Assets/Doctor.png";
import Equipments from './Equipments';
import RootUrl from '../URL';
import NoRequest from './NoRequest';


function Requests() {

  const [dataArr,setDataArr]=useState([]);

  useEffect(() => {
    getDataFromAPI(`${RootUrl}/getRequests`).then((res)=>{
      console.log(res.response);
      setDataArr(res.response);
    })
    
  }, [])
  
    
  return (
    
    <div className="list-cen">
      {
        (dataArr.length > 0) ?

          dataArr.map((data) => {
            return (
              <Card className="list-crd">
                <div className="internal-crd">
                  <div className="word-txt">
                    <Card.Header as="h5">{data.fromhospital.name  || ""}</Card.Header>
                    <Card.Body>

                      <Card.Text> City : {data.fromhospital.address.city || ""}  landmark : {data.fromhospital.address.landmark || ""}</Card.Text>

                      <Equipments state={data} type={{hospitalist:false}}/>

                    </Card.Body>
                  </div>
                  <div className="hos-img">
                    <img src={bac} alt="Hospital" className="list-img" />
                  </div>
                </div>
              </Card>
            )

          }) : <><NoRequest/></>

      }

    </div>
  )
}

export default Requests;