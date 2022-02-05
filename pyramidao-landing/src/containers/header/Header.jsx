import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="pydao__header section__padding" id="home">
    <div className="pydao__header-content">
      <h1 className="gradient__text">Make money with total return swaps</h1>
      <p>PyramiDAO is a dapp to issue Total Return Swaps on assets in the DAOs treasury. This allows the DAO to accrue a stable interest while users are able to receive under collateralized leverage before impossible in defi.</p>

      <div className="pydao__header-content__input">        
        <button type="button">Start Swapping</button>
      </div>

      <div className="pydao__header-content__people">
        <img src={people} />
        <p>more than 1,600 people maked profit in the  last 24 hours</p>
      </div>
    </div>

    <div className="pydao__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;