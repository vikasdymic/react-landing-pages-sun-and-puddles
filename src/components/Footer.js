import React, { Component } from 'react';
import './Footer.css';
import Button from './Button';
import verisign from '../img/verisign.png'
import norton from '../img/nortonverified.png'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footerTop'>
          <div className='contactUs'>
            <img className='verisign' src={verisign} alt="Verisign trusted" />
            <img className='verisign' src={norton} alt="Verisign trusted" />
          </div>
          <Button btnStyles='' buttonLabel='Install Sun and Puddles' />
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
