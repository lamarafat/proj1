import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='footer bg-dark py-5'>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-md-4 mb-4 mb-md-0'>
            <h3 className='text-white'>Location</h3>
            <p className='text-white fw-bold'>
              2215 John Daniel Drive<br />
              Clark, MO 65243
            </p>
          </div>
          <div className='col-md-4 mb-4 mb-md-0'>
            <h3 className='text-white'>Around the Web</h3>
            <div className='d-flex justify-content-center gap-3'>
                <div className='icon '>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-white'>
                <FontAwesomeIcon icon={faFacebookF}  />
              </a>
                </div>
              
              <div className='icon'>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-white'>
                <FontAwesomeIcon icon={faTwitter}  />
              </a>
              </div>
              
              <div className='icon'>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-white'>
                <FontAwesomeIcon icon={faLinkedinIn}  />
              </a>
              </div>
              
            </div>
          </div>
          <div className='col-md-4'>
            <h3 className='text-white'>About Freelancer</h3>
            <p className='text-white fw-bold'>
              Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
