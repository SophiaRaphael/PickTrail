import React from 'react';
import '../styles/list.sass';

const List = ({ name, listItems }) => (
  <div className='listBox' id={name}>
    <h2>{name}</h2>
    <ul>
      {listItems.map((item, key) => (
        <li key={key}>
          <a href={item.url}>
            {item.text.toLowerCase()}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default List;
