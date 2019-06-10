import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';
import sunandpuddleslogo from '../img/sunandpuddleslogo.png';
import star from '../img/star.png'

class Hero extends Component {
  render() {
    return (
      <section className='heroSection'>
        <div className='heroImage'></div>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            National and local <span className='magicalLineBlue'>forecasts</span><br />in the palm of your hand.
          </h1>
          <p className='heroContentCopy'>
            Weather can be unpredictable. Keep up-to-date with the latest forecasts<br />with Sun and Puddles for your computer and mobile device.
          </p>
          <Button buttonLabel='Download Today' buttonStyle='hero' />
          <div className='starRating'>
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;