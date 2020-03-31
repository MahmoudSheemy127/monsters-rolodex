import React from 'react';
import { Card } from '../Card/Card';
import './card-list.css';

export const CardList = props => {
  return <div className='card-list'>
    {props.Monsters.map(Monsters=>
      (<Card key={Monsters.id} Monsters={Monsters}/>))}
  </div>;
};
