import React, { useState } from "react";
import NavBar from "../component/NavBar";

import $ from "jquery";
import { Link } from "react-router-dom";
import { _add_event_API, _fetch_event_data } from "../services/eventService";
import Modal from "react-modal";
import { toast } from "react-toastify";

function Event(props) {
  function toggledrawer(params) {
    $("#sidebar").toggleClass("active");
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height:'90vh'
    },
  };

  const [event_list,set_event_list]=useState([]);

  const _get_data = async () => {
    _fetch_event_data()
      .then((response) => {
        set_event_list(response?.data?.data);
      })
      .catch((error) => {
        if(error.response.status===403){
          localStorage.clear();
          toast.error("Session Expired !");
          window.location="/";
        }
      });
  };

  React.useEffect(() => {
    _get_data();
  }, []);


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const [title,set_title]=useState("");
  const [description,set_description]=useState("");
  const [longitude,set_longitude]=useState("");
  const [latitude,set_latitude]=useState("");
  const [image,set_image]=useState("");

  const add_event = async () => {
    _add_event_API(title,description,longitude,latitude,image)
    .then(response=>{
      if(response.data.code===200){
          response.data.message
          toast.success(response?.data?.message);
          closeModal();
          _get_data();
      }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="wrapper">
      <NavBar />
      <div id="content">
        <div className="d-flex justify-content-around">
          <button
            className="row mr-5 mb-2"
            style={{ marginTop: "-15px" }}
            onClick={toggledrawer}
          >
            Toogle
          </button>
          <button
            className="row mr-5 mb-2"
            style={{ marginTop: "-15px" }}
            type="button"
            onClick={openModal}
          >
            Add
          </button>
        </div>
        <table className="table row">
          <thead className="thead-primary">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th />
              <th>Description</th>
              <th />
              <th />
              <th>Date</th>
              <th />
              <th>Event Location</th>
              <th></th>
              <th />
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ height: "75vh", overflow: "scroll" }}>
            {event_list.map((item, index) => {
              return (
                <tr className="alert" role="alert" id={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>
                    <div className="email">
                      <span className="wrapperText">{item?.description}</span>
                      {/* <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>s */}
                    </div>
                  </td>
                  <td>{item?.createdOn}</td>
                  <td>
                    <Link to="/">Click Here</Link>
                  </td>
                  <td className="d-flex justify-content-around">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      Block
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Add Event</h2>
        <button onClick={closeModal}>close</button>
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-wrapper">
              <label htmlFor="">Title:</label>
              <div className="form-holder">
                <input type="text" className="form-control" value={title} onChange={e=>set_title(e.target.value)} />
              </div>
            </div>
          <div className="form-wrapper">
              <label htmlFor="">Description:</label>
              <div className="form-holder">
                <textarea type="text" className="form-control" value={description} onChange={e=>set_description(e.target.value)} />
              </div>
            </div>
          <div className="form-group">
            <div className="form-wrapper">
              <label htmlFor="">Latitude:</label>
              <div className="form-holder">
                <input
                  type="text"
                  className="form-control"
                  value={latitude} onChange={e=>set_latitude(e.target.value)}
                />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">Longitude:</label>
              <div className="form-holder">
                <input
                  type="text"
                  className="form-control"
                  value={longitude} onChange={e=>set_longitude(e.target.value)}
                />
              </div>
            </div>
          </div>
            <div className="form-wrapper">
              <label htmlFor="">Image:</label>
              <div className="form-holder">
                <input type="file"  className="form-control" accept="image/*" onChange={e=>set_image(e.target.files[0])} />
              </div>
            </div>
          <div className="d-flex justify-content-around">
            <button onClick={()=>add_event()}>Add</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Event;
