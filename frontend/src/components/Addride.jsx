import React, { useState } from 'react';
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [cabType, setCabType] = useState('');

  const [price, setPrice] = useState('');
  const [shortestTime, setShortestTime] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      source,
      destination,
      cabType
    };

    try {
      const response = await axios.post('http://localhost:1000/api/v1/add', formData);
      console.log(response);
      setPrice(response.data.price);
      setShortestTime(response.data.shortestTime);
      setMessage(response.data.message);
    }
    catch (error) {
      console.error('Error sending data to backend:', error);
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className=" d-flex justify-content-center flex-column w-100 mx-auto">
      <section className='form1'>
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
          <option value="ajmer">Ajmer</option>
          <option value="bangalore">Bangalore</option>
          <option value="calcutta">Calcutta</option>
          <option value="dehradun">Dehradun</option>
          <option value="etawah">Etawah</option>
          <option value="faridabad">Faridabad</option>
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
          <option value="ajmer">Ajmer</option>
          <option value="bangalore">Bangalore</option>
          <option value="calcutta">Calcutta</option>
          <option value="dehradun">Dehradun</option>
          <option value="etawah">Etawah</option>
          <option value="faridabad">Faridabad</option>
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
          <option value="E">D - Rs. 50/min</option>
        </select>
      </div>
      <button
    type="submit"
    className="btn btn-primary"
    style={{
        padding: '10px 20px', 
        fontSize: '16px', 
        backgroundColor: 'black',
        color: 'white', 
        border: 'none'
    }}
>
    Book
</button>
    </form>
    </section>
    <section className='booking-result'>
    {message && <p>{message}</p>}
    {price && <p>Total Price: {price}</p>}
    {shortestTime && <p>Shortest Time: {shortestTime}</p>}
    </section>
    </div>
  );
};

export default LoginForm;
