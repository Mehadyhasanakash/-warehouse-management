import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='bg-success hight'>
            <div class="container ">
  <div class="row  mt-5 ">
    <div class="col text-center">
     <h1 className='text-light p-5 mt-3'>Copy right @{year}</h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default Footer;