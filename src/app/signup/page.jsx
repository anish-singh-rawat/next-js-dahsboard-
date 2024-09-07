"use client";
import axios from "axios";
import Link from "next/link";
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Signup = () => {
    const router = useRouter();
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
                setLoading(false);
                router.push(`/login?message=${response.message}`);
            }
            else if (response.status === 400) {
                console.log('testing');
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
            <div className="container-fluid containe-for-sub-box ">
                <div className="row">
                    <div className="col">
                        <div className="parent-form-div">
                            <div className="sub-form-data">
                                <div className="form-top-heading mt-2">SinUp</div>
                                <form className='mt-2' onSubmit={submitForm}>
                                    <div className="user-name-feild-div">
                                        <label htmlFor="" className='user-name-label-feild mt-2'> User Name </label>
                                        <input type="text" name='username'
                                            className='user-name-input '
                                            onChange={(e) => setAuthstate({ ...authState, name: e.target.value })} />
                                        <span className="text-danger">{errors?.name}</span>
                                    </div>

                                    <div className="user-password-feild">
                                        <label htmlFor="" className='mt-2 user-password-label-feild'>Email </label>
                                        <input type="text" name='email'
                                            className='user-password-input'
                                            onChange={(e) => setAuthstate({ ...authState, email: e.target.value })} />
                                        <span className="text-danger">{errors?.email}</span>
                                    </div>

                                    <div className="user-password-feild">
                                        <label htmlFor="" className='mt-2 user-password-label-feild'>Password </label>
                                        <input type="password" name='userpassword'
                                            className='user-password-input'
                                            onChange={(e) => setAuthstate({ ...authState, password: e.target.value })} />
                                        <span className="text-danger">{errors?.password}</span>
                                    </div>

                                    <div className="user-profile-picture-feild">
                                        <label htmlFor="" className='user-password-label-feild mt-2'>
                                            confirm password </label>
                                        <input type="password" name='userProfile'
                                        className='user-password-input'
                                        onChange={(e) => setAuthstate({ ...authState, password_confirmation: e.target.value })} />
                                    </div>

                                    <br />
                                    <center>
                                        {
                                            loading ? <CircularProgress />
                                                :
                                                <button type='submit'
                                                    className="btn text-white"
                                                    style={{ backgroundColor: '#2c3e50' }}>
                                                    Submit
                                                </button>
                                        }

                                    </center>
                                    <br />
                                    <center className='p-2'>
                                        <Link href="/" className='text-dark'>
                                            already have account ? Register Now
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

export default Signup