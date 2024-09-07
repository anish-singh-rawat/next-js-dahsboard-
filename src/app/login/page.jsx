"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from 'cookies-next';
import { signIn } from 'next-auth/react';

export default function Login() {
  const params = useSearchParams();
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [authState, setAuthstate] = useState({
    email: '',
    password: '',
  })

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await axios.post("/api/auth/login", authState)
    const response = res.data;
    if (response.status === 200) {    
      signIn("credentials",{
        email : authState.email,
        password : authState.password
      })
      try {
        if (response.user.role === "admin") {
          setLoading(false);
          setCookie('logged', 'true');
          toast.success(response.message)
          router.push('/dashboard')
          signIn("credentials",{
            email : authState.email,
            password : authState.password,
            callbackUrl : '/dashboard',
            redirect : true
          })
        }
        else if (response.user.role === "user") {
          setLoading(false);
          setCookie('logged', 'true');
          toast.success(response.message)
          router.push('/userDashboard/home')
          signIn("credentials",{
            email : authState.email,
            password : authState.password,
            callbackUrl : '/userDashboard/home',
            redirect : true
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
    else if (response.status === 400) {
      setErrors(response.errors);
      setLoading(false);
      console.log(response);
    }
  }

  
  return (
    <>
      <ToastContainer />
      <div className="container-fluid containe-for-sub-box ">
        <div className="row">
          <div className="col">
            <div className="parent-form-div">
              <div className="sub-form-data">
                <div className="form-top-heading mt-2">LogIn</div>
                {params.get('message') &&
                  <p className='bg-success text-white'>
                    {params.get('message')}
                  </p>}
                <form className='mt-2' onSubmit={submitForm}>
                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild'> Email
                    </label>
                    <input type="text" name='username'
                      className='user-name-input mt-2'
                      onChange={(e) => setAuthstate({ ...authState, email: e.target.value })} />
                    <span className="text-danger">{errors?.email}</span>
                  </div>
                  <div className="user-password-feild mt-5">
                    <label htmlFor="" className='user-password-label-feild'> Password    </label>
                    <input type="password" name='userpassword'
                      className='user-password-input mt-2'
                      onChange={(e) => setAuthstate({ ...authState, password: e.target.value })} />
                    <span className="text-danger">{errors?.password}</span>
                  </div>
                  <br />
                  <center>
                    {
                      loading ? <CircularProgress /> :
                        <button className="btn text-white"
                          type='submit'
                          style={{ backgroundColor: '#2c3e50' }}>
                          Login
                        </button>
                    }
                  </center>
                  <br />
                  <center className='p-2'>
                    <Link href="./signup" className='text-dark'>
                      Don't have account ? Register Now
                    </Link>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

