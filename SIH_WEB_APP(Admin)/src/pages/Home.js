import React, { useState } from "react";
import NavBar from "../component/NavBar";

import $ from "jquery";
import { Link } from "react-router-dom";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Home(props) {
  function toggledrawer(params) {
    $("#sidebar").toggleClass("active");
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
              <th>Name</th>
              <th />
              <th>Email</th>
              <th />
              <th />
              <th>Mobile No</th>
              <th>State</th>
              <th />
              <th>Last Location</th>
              <th></th>
              <th />
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ height: "75vh", overflow: "scroll" }}>
            <tr className="alert" role="alert">
              <td>1</td>
              <td>Abhishek Tripathi</td>
              <td>
                <div className="email">
                  <span>abhins.0554@gmail.com</span>
                  {/* <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>s */}
                </div>
              </td>
              <td>9200234536</td>
              <td className="quantity">Chhattisgarh</td>
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
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Add User</h2>
        <button onClick={closeModal}>close</button>
        <form onSubmit={e=>e.preventDefault()}>
            <div className="form-group">
                <div className="form-wrapper">
				    <label htmlFor="">Name:</label>
					<div className="form-holder">
						<input type="text" className="form-control" />
                    </div>
			    </div>
                <div className="form-wrapper">
				    <label htmlFor="">Email:</label>
					<div className="form-holder">
						<input type="text" className="form-control" />
                    </div>
			    </div>
            </div>
            <div className="form-group">
                <div className="form-wrapper">
				    <label htmlFor="">Password:</label>
					<div className="form-holder">
						<input type="password" className="form-control"  placeholder="********"  />
                    </div>
			    </div>
                <div className="form-wrapper">
				    <label htmlFor="">Re-Password:</label>
					<div className="form-holder">
						<input type="password" className="form-control"  placeholder="********"  />
                    </div>
			    </div>
            </div>
            <div className="form-group">
                <div className="form-wrapper">
				    <label htmlFor="">Address:</label>
					<div className="form-holder">
						<input type="text" className="form-control" />
                    </div>
			    </div>
                <div className="form-wrapper">
				    <label htmlFor="">City:</label>
					<div className="form-holder">
						<input type="text" className="form-control" />
                    </div>
			    </div>
            </div>
            <div className="form-group">
                <div className="form-wrapper">
				    <label htmlFor="">Pincode:</label>
					<div className="form-holder">
						<input type="text" className="form-control" />
                    </div>
			    </div>
                <div className="form-wrapper">
				    <label htmlFor="">State:</label>
					<div className="form-holder">
						<input type="text" className="form-control" />
                    </div>
			    </div>
            </div>
            <div className="d-flex justify-content-around">
                <button>Add</button>
            </div>
        </form>
      </Modal>
    </div>
  );
}

export default Home;
