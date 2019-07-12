import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';
import sunandpuddleslogo from '../img/sunandpuddleslogo.png';
import star from '../img/star.png';
import Modal from './Modal';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <section className='heroSection'>
        <div className='heroImage'></div>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            National and local <span className='magicalLineBlue'>forecasts</span><br />in the palm of your hand.
          </h1>
          <p className='heroContentCopy'>
            Weather can be unpredictable. Keep up-to-date with the latest forecasts<br />with <span className='sunAndPuddlesTitle'>Sun and Puddles</span> for your computer and mobile device.
          </p>
          {/* <Button buttonLabel='Download Today' buttonStyle='hero' /> */}
          <button className='hero button' onClick={this.toggleModal}>Download Today</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>Sun and Puddles</Modal>
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
