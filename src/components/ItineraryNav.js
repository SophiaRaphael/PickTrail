import React from 'react';
import '../styles/itinerary.sass';

const ItineraryNav = ({groupList}) => (
  <ul className='itineraryList'>
    {groupList.map((groupName, key) => { 
      return <li key={key}><strong>{groupName}</strong></li>
    })}
  </ul>
);

export default ItineraryNav;
