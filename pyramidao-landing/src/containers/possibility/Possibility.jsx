import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Check our forum and paper for more info</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur.</p>
      <h4>Check our forum and paper for more info</h4>
    </div>
  </div>
);

export default Possibility;