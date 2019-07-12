import React, { Component } from 'react';
import './Footer.css';
import Button from './Button';
import verisign from '../img/verisign.png';
import norton from '../img/nortonverified.png';
import Modal from './Modal';

class Footer extends Component {
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
      <footer>
        <div className='footerTop'>
          <div className='contactUs'>
            <img className='verisign' src={verisign} alt="Verisign trusted" />
            <img className='verisign' src={norton} alt="Verisign trusted" />
          </div>
          {/* <Button btnStyles='' buttonLabel='Install Sun and Puddles' /> */}
          <button className='footer button' onClick={this.toggleModal}>Install Sun and Puddles</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>Sun and Puddles</Modal>
        </div>
        <div className='footerBottom'>
          <p>
            © Copyright 2019 -{' '}
            <span className='magicalLineBlue'>Sun and Puddles</span> All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
