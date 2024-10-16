import React from 'react'
import './LoginForm.css';


const Register = () => {
  return (
    <div className = 'wrapper'>
        <form action="">
            <h1>Create your account</h1>
            <div className="input-box">
                <input type="text" placeholder='Name' required />
            </div>
            <div className="input-box">
                <input type="numbers" placeholder='Phone' required />
            </div>

            <div className="remember-forgot">
                <a href="#">Use email instead</a>
            </div>

            <button type="submit">Next</button>

        </form>

    </div>
  );
};

export default Register;