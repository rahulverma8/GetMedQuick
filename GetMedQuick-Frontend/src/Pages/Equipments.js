import React from 'react'
import { postDataToAPI } from '../HelperMethods/APiMethods'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RootUrl from '../URL';

function Equipments({ state ,type}) {

  const [resMes, setResMes] = React.useState({ mes: '', status: false });
  
  const [resMes1, setResMes1] = React.useState({ mes: '', status: false });

  console.log(state);

  const RequestToHospital = (e) => {
    postDataToAPI(`${RootUrl}/makerequest`, { to:state.hospitalId.email , tohospital : state.hospitalId._id , contact : state.hospitalId.contact ,itemname:state.name,quantity:state.quantity ,price : state.price}).then((res) => {

      if (res.isError) setResMes({ mes: "unable to request this resource", status: false })
      else setResMes({ mes: res.message, status: true });

    }).catch(() => {
      setResMes({ mes: "unable to request this resource", status: false })
    })
  }

  const AcceptRequest=()=>{
    postDataToAPI(`${RootUrl}/acceptrequest`, { to:state.fromhospital.email,name:state.fromhospital.name , itemname:state.itemname,quantity:state.quantity ,price : state.price}).then((res) => {

      if (res.isError) setResMes1({ mes: "unable to request this resource", status: false })
      else setResMes1({ mes: res.message, status: true });

    }).catch(() => {
      setResMes1({ mes: "unable to request this resource", status: false })
    })

  }

  return (
    <>
     {
      (type.hospitalist)?<div>
      <Card.Text> {state.name }  :  {state.quantity || 1}</Card.Text>
      <Card.Text> price {state.price +" Rs" || `15000 Rs`}</Card.Text>
      <Button className="req-btn " variant="primary" onClick={RequestToHospital} >Request</Button>
      <Card.Text ><p className={(resMes.status) ? "req-res-success-mes" : "req-res-err-mes"} >{resMes.mes}</p> </Card.Text>
    </div>:<div>
    <Card.Text> { state.itemname}  :  {state.quantity || 1}</Card.Text>
    <Card.Text> price {state.price +" Rs" || `15000 Rs`}</Card.Text>
    <Button className="req-btn " variant="primary" onClick={AcceptRequest} >Accept</Button>
    <Card.Text ><p className={(resMes1.status) ? "req-res-success-mes" : "req-res-err-mes"} >{resMes1.mes}</p> </Card.Text>
  </div>

  }
    </>
    
   
    

  )
}

export default Equipments;