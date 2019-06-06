import React from 'react';
import List from './List';
import ItineraryNav from './ItineraryNav';
import '../styles/itinerary.sass';

const Itinerary = ({ groupList, itineraryGroups }) => (
  <div>
    <ItineraryNav groupList={groupList} />
    <div className='itineraryBox'>
      {groupList.map((groupName, key) =>
        <List key={key} name={groupName} listItems={itineraryGroups[groupName]} />
      )}
    </div>
  </div>
);

export default Itinerary;
