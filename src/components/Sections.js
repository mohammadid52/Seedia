import React, { Fragment } from 'react'
import { Row, Col, Button } from 'reactstrap'


import SectionStyles from './styles/SectionStyles'
import button from './../public/assets/btn.png'

const Section = ({ theme }) => {
  return (
    <Fragment>
      <div {...{ className: SectionStyles, style: { paddingTop: '2.5rem', paddingBottom: '4rem' } }}>
          
        <Row {...{ className: 'justify-content promote sectionme ' + theme }} {...{ id: theme }}>

          <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              
              <h4 {...{ className: '' }}>
              Promote and sell your products and services
              </h4>
               <div className='btn btnimg'>
                <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
                <p className='btntext'>Get started right away</p>
                </div>
             
            </div>
          </Col>
         
            
        </Row>
        
        <Row {...{ className: 'justify-content sectionme  buisness ' + theme }} {...{ id: theme }}>

            <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
                
                <h4 {...{ className: '' }}>
                TARGETED BUSINESS
                </h4>
               
            
            </div>
            </Col>

  
        </Row>
        <Row {...{ className: 'justify-content nopadding ' + theme }} {...{ id: theme }}>

        <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
        <div>
            
            <h6 {...{ className: '' }}>
            1: Grow your business and find a trade agent or distributor to sell your product abroad
            </h6>
            <div className='btn btnimg'>
            <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
            <p className='btntext'>Find a commercial agent</p>
            </div>
            <div className='btn btnimg'>
            <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
            <p className='btntextmed'>Find a distributor</p>
            </div>

        </div>
        </Col>


        </Row>
        <Row {...{ className: 'justify-content nopadding paddingtop ' + theme }} {...{ id: theme }}>

        <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
        <div>
            
            <h6 {...{ className: '' }}>
            2: Expand the webshop
            </h6>
            <p className='pmin'>Find suppliers who can deliver products for your webshop</p>
            <div className='btn btnimg'>
            <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
            <p className='btntextmes'>Find suppliers</p>
            </div>

        </div>
        </Col>


        </Row>
        <Row {...{ className: 'justify-content nopadding paddingtop ' + theme }} {...{ id: theme }}>

        <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
        <div>
            
            <h6 {...{ className: '' }}>
            3: New product developed
            </h6>
            <p className='pmin'>Have you developed a new product. Search worldwide for manufacturers who can produce your product</p>
            <div className='btn btnimg'>
            <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
            <p className='btntextme'>Find manufacturers</p>
            </div>

        </div>
        </Col>


        </Row>
        <hr/>

        <Row {...{ className: 'justify-content buisness sectionme ' + theme }} {...{ id: theme }}>

          <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
            <div>
              
              <h4 {...{ className: '' }}>
              Search for vacancies or internship
              </h4>
               <div className='btn btnimg'>
                <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
                <p className='btntextmed'>Search vacancies</p>
                </div>
             
            </div>
          </Col>
         
            
        </Row>
        <hr/>
        <Row {...{ className: 'justify-content buisness sectionme ' + theme }} {...{ id: theme }}>

        <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
        <div>
            
            <h4 {...{ className: '' }}>
            Post a vacancy
            </h4>
            <p className='pmin'>And find the right candidate
        </p>
            <div className='btn btnimg'>
            <img  {...{ alt: '', src: button, style: { height: '4rem' } }} />
            <p className='btntextmes'>Post a vacancy</p>
            </div>
        
        </div>
        </Col>

        
        </Row>
        <hr/>

        <Row {...{ className: 'justify-content  sectionme ' + theme }} {...{ id: theme }}>

        <Col {...{ md: { size: 10}, sm: { size: 3 }, className: 'text-center mb-4 mb-md-0' }}>
        <div>
            
            <h4 {...{ className: '' }}>
            13RMS Trading post
            </h4>
            <p className='pmin'>Is the place to trade and build business relationships worldwide
        </p>
            
        
        </div>
        </Col>

        
        </Row>
        
        
      </div>
    </Fragment>
  )
}
export default Section
