import React, { Component } from 'react';
import './Cards.css';
import Card from './Card';
import iconRain from '../img/icon_rain.png';
import iconSun from '../img/icon_sun.png';
import iconUmbrella from '../img/icon_umbrella.png';
import iconWind from '../img/icon_wind.png';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>A Redefined Palette Of Innovation</h1>
        <div className='cards'>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconSun}
              cardTitle='Data Driven Analytics'
              cardText='Numbers never lie, neither do we. Through measuring, analyzing, and re-executing we are constantly aware of the latest trends in weather.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconUmbrella}
              cardTitle='Accurate Forecasts'
              cardText='Weather is unpredictable. We custom-tailor our forecasts with the most extensive network of sensors in the nation.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconWind}
              cardTitle='Quality Partnerships'
              cardText='We’re all about people and genuine connections. Get weather forecasts directly from people on the ground everywhere around the world.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconRain}
              cardTitle='Strategy Development'
              cardText='Rain or shine Sun and Puddles has you covered. We work hard to keep you aware of the latest trends in weather.'
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Cards;
