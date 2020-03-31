import React,{ Component } from 'react';
import './Card.css';

export const Card = (props) => (
  <div className='card-container'>
  <img className='image' alt='Monsters' src={'https://robohash.org/5?set=set2'}/>
  <h2>{props.Monsters.name}</h2>
  </div>
);
