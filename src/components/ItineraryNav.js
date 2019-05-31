import React from 'react';
import '../styles/itinerary.sass';

const ItineraryNav = ({groupList}) => (
  <ul className='itineraryList'>
    {groupList.map((groupName, key) =>
      <li key={key}>
        <a href={'#'+groupName}> 
          {groupName} 
        </a>
      </li>
    )}
  </ul>
);

export default ItineraryNav;
