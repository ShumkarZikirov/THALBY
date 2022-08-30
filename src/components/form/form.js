import React from "react";
import './form.css'

const Form = () => {
    return(
        <div className='container-fl'>
            <div className="main-form">
                <h3 className="form-h3">Keep in touch</h3>
                <h4 className="formh4">Get our travel advice, global views and travel freebies in your inbox</h4>
                <div className="form-name">
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                </div>
                <input className='form-email' type="text" placeholder='Email'/>
                <button className='form-btn'>Subscribe</button>
            </div>
        </div>
    )
}
export default Form;