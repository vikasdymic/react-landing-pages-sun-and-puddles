import React, { Component } from 'react';
import './CaseStudy.css';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne csHeading'>Features & Updates</h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <a
              className='caseStudyLink'
              href='https://thesulfurgroup.com/portfolio/too-faced-cosmetics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLineDarkBlue'>storms</span>
            </a>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <a
              className='caseStudyLink'
              href='https://thesulfurgroup.com/portfolio/neutrogena-influencer-campaign/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLineDarkBlue'>forecasts</span>
            </a>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <a
              className='caseStudyLink'
              href='https://thesulfurgroup.com/portfolio/bh-cosmetics/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLineDarkBlue'>national</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
