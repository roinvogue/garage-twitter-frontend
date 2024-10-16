import React from 'react'
import './ForgotPW.css';


const ForgotPW = () => {
  return (
    <div className = 'wrapper'>
        <form action="">
            <h1>Find your Garage Twitter account</h1>
            <div className="input-box">
                <input type="text" placeholder='Username, Phone Number or Email' required />

            </div>

            <button type="submit">Next</button>
        </form>

    </div>
  );
};

export default ForgotPW;