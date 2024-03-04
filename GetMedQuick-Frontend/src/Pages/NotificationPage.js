import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../Styles/Notification.css"

const NotificationPage = () => {
  return (
<section className="lst">
<div className="not-lst">
      <ListGroup>
        <ListGroup.Item className="lst-item" >Cras justo odio</ListGroup.Item>
        <ListGroup.Item className="lst-item">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item className="lst-item">Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className="lst-item">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
    </section>
  );
};

export default NotificationPage;
