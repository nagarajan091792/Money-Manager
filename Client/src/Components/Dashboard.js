import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
function Dashboard() {
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
  const sum = user
  .map(item => item.amount)
  .reduce((prev, curr) => prev + curr, 0);

  const [user1, setUser1] = useState([]);
  useEffect(() => {
    fetchdata1();
  }, []);

  let fetchdata1 = async () => {
    try {
      let a = await axios.get(`${config.api}/portal/addincome`, {
        headers: {
          authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });
      setUser1(a.data);
      
    } catch (error) {
      console.log(error)
    }
    
  };
  const sum1 = user1
  .map(item => item.amount)
  .reduce((prev, curr) => prev + curr, 0);

  const balance = sum1-sum
  return (
    <>
    <div className="container">
     <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://thumbs.dreamstime.com/b/businessman-showing-text-income-concept-passive-50241422.jpg"
              alt="Card imaged cap"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "black", fontSize: "40px" }}
              >
                Income
              </h5>

              <Link
                to={"/portal/Addincome"}
                className="btn btn-success btn-block "
              >
                Add Income
              </Link>
              <div style={{textAlign:"center",color:"green"}} className="m-2"><h3>Total Income: {sum1}</h3></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <img
              className="card-img-top"
              src="https://media.istockphoto.com/id/164665722/photo/close-up-of-an-expense-report-with-glasses-and-a-calculator.jpg?s=612x612&w=0&k=20&c=0fo8thRvyHTWvi0o6CGyVeoiXUMZ-RTJV8YnL895fGE="
              alt="Card imaged cap"
              style={{ height: "250px" }}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "black", fontSize: "40px" }}
              >
                Expense
              </h5>

              <Link
                to={"/portal/Addexpense"}
                className="btn btn-danger btn-block"
              >
                Add Expense
              </Link>
              <div style={{textAlign:"center",color:"red"}} className="m-2"><h3>Total Expense: {sum}</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="card m-2">
    <div className="card-body">
    <h3 style={{textAlign:"center",color:"blue"}}>Your Balance: {balance}</h3>
    </div>
    </div>
    </div>
  
 
    </>
  );
}

export default Dashboard;
