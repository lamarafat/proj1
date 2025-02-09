import React from 'react';
import HeaderImage from './assets/bootStrap.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';  

export default function Header() {
  return (
    <div className='header'>
      <div className='container d-flex justify-content-center align-items-center flex-column text-center '>
        <div className='row mt-5 mb-5'>
          <div className='col-md-12'>
            <img src={HeaderImage} width={200} height={200} alt="Bootstrap Logo" className='img-fluid mb-3' />
            <h1 className='text-white fw-bold'>START SHOPING</h1>
            <div className='d-flex justify-content-center align-items-center'>
            <hr className='custom-hr'/>
            <FontAwesomeIcon icon={faStar} size="2x" color='white' /> 
            <hr className='custom-hr'/>
            
            </div>
             
            <p className='text-white fw-bold fs-5'>Electronics - Accessories - Makeup - and much more</p>
          </div>
        </div>
      </div>
    </div>
  );
}



