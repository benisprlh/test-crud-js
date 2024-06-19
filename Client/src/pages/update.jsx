// src/components/Update.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchKaryawan();
  }, []);

  const fetchKaryawan = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/getKaryawanById/${id}`
      );
      console.log(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching karyawan:", error);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/updateKaryawan/${id}`, formData);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Update Karyawan</h1>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Update
        </button>
        <Link to={`/`} className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Update;
