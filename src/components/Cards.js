import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import munnar from '../images/Munnar.jpg'
import agra from "../images/AGRA.jpg"
import dalhousie from '../images/DALHOUSIE.jpg'
import andaman from '../images/Andaman.jpg'
import ooty from '../images/OOTY.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Best Tourist Places to Visit in India!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={munnar}
              text='Munnar - Tea Gardens, Lakes and Pretty little hill-station'
              label='Kerala'
              path='/services'
            />
            <CardItem
              src={agra}
              text='Agra - The city of Taj Mahal, the monument of eternal love'
              label='Uttar Pradesh'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={dalhousie}
              text='Dalhousie - Little Switzerland of India'
              label='Himachal Pradesh'
              path='/services'
            />
            <CardItem
              src={andaman}
              text='Andaman & Nicobar Islands - Blue seas, virgin islands and colonial past'
              label='Andaman & Nicobar'
              path='/products'
            />
            <CardItem
              src={ooty}
              text='Ooty - Queen of the Nilgiris'
              label='Tamil Nadu'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
