import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const InventoryDisplay = (props) => {
    const {_id, name, price, img, quantity, description} = props.book
    const navigate = useNavigate()

    const navigateToBookUpdate = id =>{
      navigate ( `/inventory/${id}`)
    }

    useEffect(() =>{
      AOS.init(
        {
          offset: 100,
          duration: 2000,
          easing: 'ease'
      }
      )
    })
    return (
      <div className="col">
    <div className="card " data-aos="fade-up">
      <img style={{height:"350px"}}  src={img} className="card-img-top p-5" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <h5 className="card-title">Price: {price}</h5>
        <h5 className="card-title">Quantity:{quantity}</h5>
        <p className="card-text">{description}</p>

        

      </div>
      <div>
      <button onClick={()=> navigateToBookUpdate(_id)} type="button" class="btn btn-success w-100 ">UPDATE-BUTTON</button>
      </div>
    </div>
    
  </div>
    );
};

export default InventoryDisplay;