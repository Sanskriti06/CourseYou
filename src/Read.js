import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './Read.css';
const Read = () => {      
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    // console.log(data);
    let { firstname, coursename, email, price, id } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstname);
    localStorage.setItem("course Name", coursename);
    localStorage.setItem("Email", email);
    localStorage.setItem("price", price);
  };

  const getData = () => {
    axios.get(`http://localhost:5000/data`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const deleteAPIData = (id) => {
    axios.delete(`http://localhost:5000/data/${id}`).then(() => {
      getData();
    });
  };

  const [q, setQ] = useState("");
  const [searchParam] = useState([
    "firstname",
    "coursename",
    "email",
    "price",
  ]);

  function search() {
    return APIData.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <>
    <br></br>
      <span className="texxt">Search the data:</span>
      <input className="searchhbar"
        type="search"
        placeholder="search by name"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <br></br>   <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>course Name</th>
            <th>Email</th>
            <th>price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {search(APIData).map((data) => {
            return (
              <tr>
                <td>{data.firstname}</td>
                <td>{data.coursename}</td>
                <td>{data.email}</td>
                <td>{data.price}</td>
                <td>
                  <Link to="/update">
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="Update"
                      onClick={() => setData(data)}
                    />
                  </Link>
                </td>
                <td>
                  <input
                  className="btn btn-danger"
                    type="button"
                    value="Delete"
                    onClick={() => deleteAPIData(data.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
