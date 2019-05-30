  import React from 'react';
  import '../styles/List.sass';

  const List = ({name, listItems}) => (
    <div className='listBox'>
      <h2>{name}</h2>
      <ul>
        {listItems.map((item, key) => (
          <li key={key}> 
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  export default List;
