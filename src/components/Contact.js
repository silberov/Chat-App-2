import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="" />
      <div className="conatct-info">
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div
            className={props.status ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{props.status ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
