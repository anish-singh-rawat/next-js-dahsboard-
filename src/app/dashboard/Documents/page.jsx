"use client";
import React, { useState } from 'react';
import axios from 'axios';
import './Doc.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [file, setFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);

  const imageSubmit = async (e) => {
    e.preventDefault();

    if (!fileSelected) {
      toast.error("Please select a file first! ")
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/api/fileUpload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Image uploaded successfully!')
      setFile(null);
      setFileSelected(false);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0]);
    setFileSelected(!!e.target.files?.[0]);
  };

  return (
    <>
    <ToastContainer/>
    <div className="container">
      <div className="row">
        <div className="col">
          <form className="form-container" onSubmit={imageSubmit}>
            <div className="upload-files-container">
              <div className="drag-file-area">
                <h3 className="dynamic-message"> Drag & drop any file here </h3>
                <label className="label">
                  <input
                    type="file"
                    required
                    onChange={handleFileChange}
                    style={{ border: '1px solid grey', height: '30px', width: '200px' }}
                  />
                </label>
              </div>
              <span className="cannot-upload-message">
                <span className="material-icons-outlined">error</span> Please select a file first
                <span className="material-icons-outlined cancel-alert-button">cancel</span>
              </span>
              <div className="file-block">
                <div className="file-info">
                  <span className="material-icons-outlined file-icon">description</span>
                </div>
              </div>
              <button type="submit" className="upload-button">
                Upload.
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
