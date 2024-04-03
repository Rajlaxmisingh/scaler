import React from 'react'
import './Home.css';
import Navbar from '../components/Navbar';
import LoginForm from '../components/Addride';
const Home = () => {
    const image=require("../images/kids-in-taxi.jpg");
  return (
   <div>
    <div><Navbar/></div>
    <section className='home'>
    <div className='Home-Page bg-white text-dark container-fluid'>
        <div className='row container'>
            <div className='col-lg-6 d-flex justify-content-center align-items-start align-items-lg-start flex-column'
             style={{height: "91.5vh"}}>
               <h2 style={{fontSize:"60px"}}>BOOK YOUR RIDE  </h2>
               <p className="m" style={{color:"black"}}>Find your comfort</p>
               <LoginForm/>
             </div>
             <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
              style={{height:"91.5vh"}}>
                <img className='img-fluid homeimg'
                src={image} alt=""/>
              </div>
        </div>
        </div>
        </section>
        {/* <section className='form'>
    <div className='Home-Page bg-white text-dark container-fluid'>
    <div className='row container'>
    <div className='col-lg-6 d-flex justify-content-center align-items-start align-items-lg-start flex-column'
             style={{height: "91.5vh"}}>
        <Addride/>
      </div>
      </div>
      </div>
      </section> */}
  </div>
  );
};

export default Home;
