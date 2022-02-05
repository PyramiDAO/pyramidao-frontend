import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="pydao__footer section__padding">
    <div className="pydao__footer-heading">
      <h1 className="gradient__text">Make money with total return swaps</h1>
    </div>

    <div className="pydao__footer-btn">
      <p>Open App</p>
    </div>

    <div className="pydao__footer-links">
      <div className="pydao__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        
      </div>
      <div className="pydao__footer-links_div">
        <h4>Links</h4>
        <p>Paper</p>
        <p>Social Media</p>
        <p>Counters</p>
       
      </div>
      <div className="pydao__footer-links_div">
        <h4>Company</h4>
        <p>Strategies </p>
        <p>Developers</p>
        <p>Contact</p>
      </div>
      <div className="pydao__footer-links_div">
        <h4>Get in touch</h4>
        <p>Blockchain</p>
        <p>0x0121202</p>
        <p>info@pydao.io</p>
      </div>
    </div>

    <div className="pydao__footer-copyright">
      <p>@2022 Pyramidao. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;