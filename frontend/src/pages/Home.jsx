import React from 'react'
import './Home.css';
const Home = () => {
    const image=require("../images/kids-in-taxi.jpg");
  return (
   <div>
    {/* <div><Navbar/></div> */}
    <div className='Home-Page bg-white text-dark container-fluid'>
        <div className='row container'>
            <div className='col-lg-6 d-flex justify-content-center align-items-start align-items-lg-start flex-column'
             style={{height: "91.5vh"}}>
               <h2 style={{fontSize:"80px"}}>BOOK YOUR RIDE  </h2>
               <p className="m" style={{color:"black"}}>Find your comfort</p>
               <button className='viewBooks my-3'>View Rides</button>
             </div>
             <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
              style={{height:"91.5vh"}}>
                <img className='img-fluid homeimg'
                src={image} alt=""/>
              </div>
        </div>
    </div>
    </div>
  );
};

export default Home;
// import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const [activeSection, setActiveSection] = useState('home');

//   const handleNavLinkClick = (section) => {
//     setActiveSection(section);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className='Home-Page bg-white text-dark container-fluid'>
//       <div className='row container'>
//         {/* Navbar */}
//         <div className='col-lg-12 d-flex justify-content-between align-items-center'>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="#" onClick={() => handleNavLinkClick('home')}>Cabook</a>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className={`nav-item ${activeSection === 'home' && 'active'}`}>
//                     <RouterLink className="nav-link" to="/" onClick={() => handleNavLinkClick('home')}>Home</RouterLink>
//                   </li>
//                   <li className={`nav-item ${activeSection === 'add-ride' && 'active'}`}>
//                     <RouterLink className="nav-link" to="/add-ride" onClick={() => handleNavLinkClick('add-ride')}>Add Ride</RouterLink>
//                   </li>
//                   <li className={`nav-item ${activeSection === 'about' && 'active'}`}>
//                     <RouterLink className="nav-link" to="/about" onClick={() => handleNavLinkClick('about')}>About</RouterLink>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>

//         {/* First Section - Home */}
//         {activeSection === 'home' && (
//           <div className='col-lg-6 d-flex justify-content-center align-items-start align-items-lg-start flex-column' style={{height: "91.5vh"}}>
//             <h2 style={{fontSize:"80px"}}>BOOK YOUR RIDE</h2>
//             <p className="m" style={{color:"black"}}>Find your comfort</p>
//             <button className='viewBooks my-3'>View Rides</button>
//           </div>
//         )}

//         {/* Second Section - Add Ride Form */}
//         {activeSection === 'add-ride' && (
//           <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:"91.5vh"}}>
//             {/* Add Ride Form */}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="source" className="form-label">Source</label>
//                 <select id="source" className="form-select" required>
//                   {/* Add options for source */}
//                   <option value="">Select Source</option>
//                   <option value="ajmer">Ajmer</option>
//                   <option value="calcutta">Calcutta</option>
//                   <option value="bangalore">Bangalore</option>
//                   <option value="dehradun">Dehradun</option>
//                   <option value="etawah">Etawah</option>
//                   <option value="faridabad">Faridabad</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="destination" className="form-label">Destination</label>
//                 <select id="destination" className="form-select" required>
//                   {/* Add options for destination */}
//                   <option value="">Select Destination</option>
//                   <option value="bangalore">Bangalore</option>
//                   {/* Add more options as needed */}
//                   <option value="">Select Source</option>
//                   <option value="ajmer">Ajmer</option>
//                   <option value="calcutta">Calcutta</option>
//                   <option value="bangalore">Bangalore</option>
//                   <option value="dehradun">Dehradun</option>
//                   <option value="etawah">Etawah</option>
//                   <option value="faridabad">Faridabad</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="cabType" className="form-label">Cab Type</label>
//                 <select id="cabType" className="form-select" required>
//                   {/* Add options for cab type */}
//                   <option value="">Select Cab Type</option>
//                   <option value="a">A</option>
//                   <option value="a">B</option>
//                   <option value="a">C</option>
//                   <option value="a">D</option>
//                   <option value="a">E</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>
//               <button type="submit" className="btn btn-primary">Book</button>
//             </form>
//           </div>
//         )}

//         {/* Third Section - About */}
//         {activeSection === 'about' && (
//           <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:"91.5vh"}}>
//             <h2>About</h2>
//             {/* Add about content */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
