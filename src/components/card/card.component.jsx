import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img alt="kitty" src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`} />
    <h2>{ props.cat.name }</h2>
    <p>{ props.cat.description }</p>
  </div>
);