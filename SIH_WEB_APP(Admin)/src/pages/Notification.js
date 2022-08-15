import { async } from "@firebase/util";
import React, { useState } from "react";
import NavBar from "../component/NavBar";
import { BASE_URL } from "../constant/constant";

import axios from "axios";

function Notification(props) {
  const [title, set_title] = useState("");
  const [description, set_description] = useState("");
  const [image, set_image] = useState("");
  const sendNotification = async () => {
    let data = {
      title: title,
      description: description,
      image: image,
    };

    axios.post(`${BASE_URL}/user/sendNotification`,data)
      .then(function (response) {
        console.log(response.data);
        alert("Notification Send !");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="wrapper">
      <NavBar />
      <div id="content">
        <input placeholder="Title" className="form-control" value={title} onChange={(e)=>set_title(e.target.value)}/>
        <br />
        <input placeholder="Description" className="form-control"  value={description} onChange={(e)=>set_description(e.target.value)} />
        <br />
        <input placeholder="Image URL" className="form-control"  value={image} onChange={(e)=>set_image(e.target.value)}/>
        <br />
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
            onClick={()=>sendNotification()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Notification;
