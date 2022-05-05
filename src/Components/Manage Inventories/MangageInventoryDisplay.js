import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MangageInventoryDisplay = (props) => {
    



    const { name, price, img, quantity, description} = props.book





    useEffect(() =>{
        AOS.init(
          {
            offset: 100,
            duration: 2000,
            easing: 'ease'
        }
        )
      })
//       <p className={classes.details}>
//   {item.description.length > 250 ?
//     `${item.description.substring(0, 250)}...` : item.description
//   }
// </p>

    return (
        <div className="col">
        <div className="card " data-aos="fade-up">
          <img style={{height:"350px"}} src={img} className="card-img-top p-5" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <h5 className="card-title">Price: {price}</h5>
            <h5 className="card-title">Quantity:{quantity}</h5>
            <p className="card-text"> {description}</p>
    
            
    
          </div>
          <div>
          <button  type="button" class="btn btn-success w-100 ">Delete</button>
          </div>
        </div>
        
      </div>
    );
};

export default MangageInventoryDisplay;