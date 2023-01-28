import React, { useEffect, useState } from "react";
import { config } from "../../config";
import axios from "axios";
import { Link } from "react-router-dom";

function Expenselist() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    try {
      let a = await axios.get(`${config.api}/portal/addexpense`, {
        headers: {
          authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      setUser(a.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletedata = async (id) => {
    try {
      let ask = window.confirm("Do you want to delete!!");
      if (ask) {
        await axios.delete(`${config.api}/portal/addexpense/${id}`, {
          headers: {
            authorization: `${localStorage.getItem("react_app_token")}`,
          },
        });
        alert("Deleted Successfully")
        fetchdata();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Expenses List</h1>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>

            <th scope="col">Description</th>
            <th scope="col">Date And Time</th>
            <th scope="col">Catagory</th>
            <th scope="col">Division</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>

                <td>{e.description}</td>
                <td>{e.dateandtime}</td>
                <td>{e.catagory}</td>
                <td>{e.divisions}</td>
                <td>{e.amount}</td>
                <td>
                  <Link
                    to={`/portal/expenselist/edit/${e._id}`}
                    className="btn-sm btn-warning mr-2 "
                  >
                    Edit
                  </Link>
                  <button
                    className="btn-sm btn-danger"
                    onClick={() => deletedata(e._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Expenselist;
