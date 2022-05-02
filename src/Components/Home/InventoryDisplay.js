import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InventoryDisplay = (props) => {
    const {name, price, img, quantity, description} = props.book

    useEffect(() =>{
      AOS.init()
    })
    return (
        <div className="col">
    <div className="card " data-aos="fade-up">
      <img width={50} src={img} className="card-img-top p-5" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <h5 className="card-title">Price: {price}</h5>
        <h5 className="card-title">Quantity:{quantity}</h5>
        <p className="card-text">{description}</p>

        

      </div>
      <div>
      <button type="button" class="btn btn-success w-100 ">ORDER_NOW</button>
      </div>
    </div>
    
  </div>
    );
};

export default InventoryDisplay;