import React from 'react';

const InventoryDisplay = (props) => {
    const {name, price, img, quantity, description} = props.book
    return (
        <div className="col">
    <div className="card ">
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