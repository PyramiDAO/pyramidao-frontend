import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatPYRAMIDAO.css';

const WhatPYRAMIDAO = () => (
  <div className="pydao__whatPYRAMIDAO section__margin" id="whatPYRAMIDAO">
    <div className="pydao__whatPYRAMIDAO-feature">
      <Feature title="What is PyramiDao?" text="PyramiDAO is a dapp to issue Total Return Swaps on assets in the DAOs treasury. This allows the DAO to accrue a stable interest while users are able to receive under collateralized leverage before impossible in defi.." /> 
    </div>
    <div className="pydao__whatPYRAMIDAO-heading">
      <h1 className="gradient__text">Swaps on assets in the DAOs treasury</h1>
      <p>Explore Managers</p>
    </div>
    <div className="pydao__whatPYRAMIDAO-container">
      <Feature title="Swaps" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur.." />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur." />
      <Feature title="Managers" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur." />
    </div>
  </div>
);

export default WhatPYRAMIDAO;