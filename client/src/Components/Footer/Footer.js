import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import "../assets/css/Footer.css";
export const Footer = () => {
  return (
    <>
      <section className='Footer'>
        <div className='Footer-Items'>
          <NavLink className='Footer-h3' to='/'>
            <img className='Footer-h3' alt='img' src={Logo} srcSet={Logo} />
          </NavLink>

          <p className='Footer-Para'>All &copy; Copyright Reservered</p>
        </div>
      </section>
    </>
  );
};
