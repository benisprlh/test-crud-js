import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [karyawans, setKaryawans] = useState([]);

  useEffect(() => {
    fetchKaryawans();
  }, []);

  const fetchKaryawans = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getKaryawan");
      setKaryawans(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteKaryawan/${id}`);
      fetchKaryawans();
    } catch (error) {
      console.error("Error deleting karyawan:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Daftar Karyawan</h1>
      <Link to={`/create`} className="btn btn-primary mb-3">
        Create
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {karyawans.map((karyawan) => (
              <tr key={karyawan.id}>
                <td>{karyawan.firstName}</td>
                <td>{karyawan.lastName}</td>
                <td>{karyawan.email}</td>
                <td>{karyawan.phoneNumber}</td>
                <td>{karyawan.address}</td>
                <td>
                  <Link
                    to={`/update/${karyawan.id}`}
                    className="btn btn-sm btn-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(karyawan.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
