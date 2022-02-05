import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur.',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur.',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur.',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi provident aliquid doloremque molestiae ipsum dolor non similique, dolore laudantium pariatur.',
  },
];

const Features = () => (
  <div className="pydao__features section__padding" id="features">
    <div className="pydao__features-heading">
      <h1 className="gradient__text">PyramiDAO is a dapp to issue Total Return Swaps on assets in the DAOs treasury.</h1>
      <p>Check our forum  and paper for more info</p>
    </div>
    <div className="pydao__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;