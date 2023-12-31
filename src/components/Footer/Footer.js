import React from 'react';

function Footer() {
  return (
      <footer className="text-secondary pt-5 text-center">
      &copy; 2023 
      <span className='logoFont logoBigger'>
        <span className='text-success'>.</span>
        <span className='text-warning'>.</span>
        <span className='text-danger'>.</span>
      tracked
      </span>
    </footer>
  );
}

export default Footer;