'use client'
import React, { useState } from "react";
import './AddUser.css'
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Page = () => {
    const [authState, setAuthstate] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const submitForm = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const res = await axios.post("/api/auth/register", authState);
            const response = res.data;
            if (response.status === 200) {
              toast.success('new account has been registered');
              setLoading(false);
              setAuthstate({
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
              })
            }
            else if (response.status === 400) {
                setErrors(response.error);
                setLoading(false);
            }
        } 
        catch (error) {
            console.error("Error submitting form:", error);
            setLoading(false);
        }
    };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
          <center><h1> ADD 100% </h1></center>
          <div className="container">
        <div className="row">
          <div className="col-md-12 pb-20 text-center">
            <h2 className="section-title mb-10"><div>Users <strong className="primary-color">with there 100% information</strong> from our side </div></h2>
            <p className="section-sub-title">
              We are a passionate digital design company who provide 100% best web page with security protection
            </p>
            <div className="exp-separator center-separator">
              <div className="exp-separator-inner">
              </div>
            </div>
          </div>
        </div>
        </div>
            <form onSubmit={submitForm}>
              <div className="mt-2 add-user-input">
                <div className="responsive-input">
                  <label htmlFor="name"
                    className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div >
                    <input
                      className="add-user-inputs"
                      type="text" id="name" placeholder="Full Name"
                      value={authState.name}
                      onChange={(e) => setAuthstate({ ...authState, name: e.target.value })} />
                      
                      <div className="text-danger">{errors?.name}</div>

                  </div>
                </div>
                <div className="responsive-input">
                  <label htmlFor="Email"
                    className="text-base font-medium text-gray-900">
                    Email
                  </label>
                  <div >
                    <input
                      className="add-user-inputs"    value={authState.email}
                      type="email" id="Email" placeholder="Enter your Email..."
                      onChange={(e) => setAuthstate({ ...authState, email: e.target.value })} />
                      <div className="text-danger">{errors?.email}</div>
                  </div>
                </div>
              </div>
              <br />
              <div className="mt-2 add-user-input">
                <div className="responsive-input">
                  <label htmlFor="Password"
                    className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div >
                    <input
                      className="add-user-inputs"    value={authState.password}
                      type="password" id="password" onChange={(e) => setAuthstate({ ...authState, password: e.target.value })} />
                      <div className="text-danger">{errors?.password}</div>
                  </div>
                </div>
                <div className="responsive-input">
                  <label htmlFor="confirmPassword"
                    className="text-base font-medium text-gray-900">
                    confirm Password
                  </label>
                  <div >
                    <input    value={authState.password_confirmation}
                      className="add-user-inputs"
                      type="password" id="confirmPassword"
                      onChange={(e) => setAuthstate({ ...authState, password_confirmation: e.target.value })} />
                  </div>
                </div>
              </div>
              <center>
                {
                  loading ?
                  <CircularProgress/> : 
                <button type="submit" className="btn btn-primary mt-5" >
                 submit</button>
                }
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;