import React from 'react';
import List from './List';
import '../styles/Itinerary.sass';

const Itinerary = ({groupList, itineraryGroups}) => (
  <div>
    <ul className='itineraryList'>
      {groupList.map((groupName, key) => { 
        return <li key={key}><strong>{groupName}</strong></li>
      })}
    </ul>
    <div className='itineraryBox'>
      {groupList.map((groupName,key) => (
        <List key={key} name={groupName} listItems={itineraryGroups[groupName]}/>
      ))}
    </div>
  </div>
);

export default Itinerary;
