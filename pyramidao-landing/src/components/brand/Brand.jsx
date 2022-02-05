import React from 'react';
import { chainlink, polygon,} from './imports';
import './brand.css';

const Brand = () => (


  <div className="pydao__brand section__padding">


    <div>
      <img src={chainlink} />
    </div>
    <div></div>
   
    <div>
      <img src={polygon} />
    </div>
    
   
  </div>

 

);

export default Brand;
