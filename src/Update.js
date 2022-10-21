import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Pages/StudentDetails.css'
const Update = () => {
  const [firstname, setFirstName] = useState("");
  const [coursename, setcourseName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setprice] = useState("");

  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setcourseName(localStorage.getItem("course Name"));
    setEmail(localStorage.getItem("Email"));
    setprice(localStorage.getItem("price"));
  }, []);

  let history = useNavigate();

  const updateAPIData = () => {
    axios
      .put(`http://localhost:5000/data/${id}`, {
        firstname,
        coursename,
        email,
        price,
      })
      .then(() => {
        alert("data updated successfully");
        history("/read");
      });
  };

  return (
    <>
      <div className="container2">
        <form className='frm'>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">First Name</label>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="text"
                placeholder="Your first name.."
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">course Name</label>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="text"
                placeholder="Your course name.."
                value={coursename}
                onChange={(e) => setcourseName(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Email</label>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="email"
                placeholder="Your email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Create new price</label>
            </div>
            <div className="col-75">
              <input
              className="form-control"
                type="text"
                placeholder="Your price.."
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Enter Password</label>
            </div>
            <div className="col-75">
              <input className="form-control" type="password" placeholder="Enter password.." />
            </div>
          </div>
          <div className="rowww">
            <div className="col-25">
              <label className="signlabel">Confirm Password</label>
            </div>
            <div className="col-75">
              <input className="form-control" type="password" placeholder="Confirm password.." />
            </div>
          </div>
          <br />
          <div className="rowww">
            <input type="reset" value="Clear" className="btn btn-primary" id='btttn'
            style={{margin:"10px"}} />
            <input
              className="btn btn-primary"
              id='btttn'
              type="button"
              value="Submit"
              onClick={updateAPIData}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
