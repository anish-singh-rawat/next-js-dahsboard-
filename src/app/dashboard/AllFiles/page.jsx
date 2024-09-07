"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import './AllFiles.css'
import Link from 'next/link'
import LCSButton from "./LCSButton.jsx"


const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const fetchImages = async () => {
        try {
            const response = await fetch('/api/getImages');
            const data = await response.json();
            setImages(data.images);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };
    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div style={{minHeight : '100vh'}}>
            {images.length > 0 ?
                images.map((image, i) => (
                    <div key={i}>
                        <div className="d-flex mt-4 justify-content-center">
                            <div className='mt-2'>
                                <img src={image.url} alt="getting..."
                                    style={{ width: "600px", maxWidth: '600px' }} />
                                    <LCSButton/>
                            </div>
                        </div>
                    </div>
                ))
                :
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="parent-form-div">
                                <h1>There are no files please upload files</h1>
                                <div className="mt-5 d-flex justify-content-center">
                                    <div className="btn btn-warning">
                                        <Link className='upload-files' href="/dashboard/Documents">Upload Files</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ImageGallery;
