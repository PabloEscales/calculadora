import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

const Logo = (props) => (
    <img 
      src={freeCodeCampLogo}
      className='freecodecamp-logo'
      alt='Logo de freeCodeCamp'
    />
 );

export default Logo;