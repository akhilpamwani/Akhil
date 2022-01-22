import React, { useState } from "react";
import send from "../assets/img/Send.png";
import "../assets/css/Contact.css";
import { toast } from "react-toastify";

export const Contact = () => {

  toast.configure();
  const [intval, setINv] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    detail: "",
  });
  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINv((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async () => {
    

    const { name, email, phone, subject, detail } = intval;

    const res = await fetch("https://aryan-cloud.herokuapp.com/api/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        detail,
      }),
    
    }
    
    );

    const data = await res.json();
    toast.success('Data has been Saved Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <div className='Project-intro'>
        <h3 className='Project-h3'>Get in touch</h3>
        <p className='Project-p'>Contact Me</p>
        <div className='Form-Control' id='Contact' data-aos="zoom-in-up">
          <form className='Form'>
            <p className='Form-para'> Name</p>
            <input
              type='text'
              id='name'
              name='name'
              value={intval.name}
              onChange={setData}
              required
              className='Form-Input  Form-Dark-Input'
              placeholder=' Enter Your Name'
            />

            <p className='Form-para'> E-mail</p>

            <input
              type='email'
              id='email'
              className='Form-Input Form-Dark-Input'
              name='email'
              value={intval.email}
              onChange={setData}
              required
              placeholder=' Enter Your E-mail'
            />
            <p className='Form-para'> Phone Number</p>
            <input
              type='tel'
              id='phone'
              className='Form-Input Form-Dark-Input'
              name='phone'
              value={intval.phone}
              onChange={setData}
              required
              placeholder='Enter Your Phone Number'
            />
            <p className='Form-para'>Subject</p>
            <input
              type='text'
              id='subject'
              className='Form-Input Form-Dark-Input'
              name='subject'
              value={intval.subject}
              onChange={setData}
              required
              placeholder='Enter Your Subject'
            />
            <label htmlFor='detail' className='Form-para'>
              {" "}
              Express Your Subject in Details
            </label>
            <textarea
              id='detail'
              cols='30'
              rows='10'
              name='detail'
              value={intval.detail}
              onChange={setData}
              required
              className='Form-Input Form-Dark-Input '
              placeholder='Explain Your Subject in Details'
            ></textarea>

            <button className='Form-Submit' type='submit' onClick={addinpdata}>
              <img
                src={send}
                onClick={addinpdata}
                alt='img'
                className='Form-Img'
              />{" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
