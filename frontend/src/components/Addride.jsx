import React, { useState } from 'react';
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [cabType, setCabType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Email: ${email}, Source: ${source}, Destination: ${destination}, Cab Type: ${cabType}`);
  };

  const submit = async () =>{
    await axios
    .post("https://localhost:1000/api/v1/add", email, source, destination, cabType)
    .then(res=>console.log(res));
  }

  return (
    <div className=" d-flex justify-content-center align-items-center">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="source" className="form-label">Source</label>
        <select
          className="form-select"
          id="source"
          value={source}
          name="source"
          onChange={(e) => setSource(e.target.value)}
          required
        >
          <option value="" disabled>Select Destination</option>
          <option value="Ajmer">Ajmer</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Calcutta">Calcutta</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Etawah">Etawah</option>
          <option value="Faridabad">Faridabad</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="destination" className="form-label">Destination</label>
        <select
          className="form-select"
          id="destination"
          value={destination}
          name="destination"
          onChange={(e) => setDestination(e.target.value)}
          required
        >
          <option value="" disabled>Select Destination</option>
          <option value="Ajmer">Ajmer</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Calcutta">Calcutta</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Etawah">Etawah</option>
          <option value="Faridabad">Faridabad</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="cabType" className="form-label">Cab Type</label>
        <select
          className="form-select"
          id="cabType"
          name="cabType"
          value={cabType}
          onChange={(e) => setCabType(e.target.value)}
          required
        >
          <option value="" disabled>Select car type</option>
          <option value="A">A - Rs. 10/min</option>
          <option value="B">B - Rs. 20/min</option>
          <option value="C">C - Rs. 70/min</option>
          <option value="D">D - Rs. 4/min</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary" >Book</button>
    </form>
    </div>
  );
};

export default LoginForm;
