import React from 'react';
const List = ({name, listItems}) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {listItems.map((item, key) => (
        <li key={key}> {item.text} </li>
      ))}
    </ul>
  </div>
);

export default List;
