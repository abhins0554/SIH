import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../component/NavBar';
import { get_Accommodation_Data } from '../services/accommodationService';

function Accommodation(props) {

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


    const [attraction_list,set_attraction_list]=useState([]);

    const get_data = async () => {
        get_Accommodation_Data()
        .then(response=>{
            set_attraction_list(response.data.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    React.useEffect(() => {
        get_data();
    }, []);

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
              <th>Description</th>
              <th />
              <th />
              <th>Date</th>
              <th />
              <th>Location</th>
              <th/>
              <th>Tags</th>
              <th></th>
              <th />
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ height: "75vh", overflow: "scroll" }}>
            {attraction_list.map((item, index) => {
              return (
                <tr className="alert" role="alert" id={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
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
                  <td>
                    {item?.tags.toUpperCase()}
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
        </div>
    );
}

export default Accommodation;