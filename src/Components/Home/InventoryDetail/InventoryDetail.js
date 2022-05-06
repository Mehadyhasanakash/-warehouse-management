import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Helmat from '../../Helmat/Helmat';
import './InventoryDetail.css'

const InventoryDetail = () => {
  const { inventoryId } = useParams()
  const [inventory, setInventory] = useState({});
  // const {_id, name, price, img, quantity, description} = props.bo

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setInventory(data))
  }, [])
  return (
    <div className='w-50 mx-auto mt-5 '>
      <Helmat title='inventory-item '></Helmat>


      <div className="card top-img ">
        <img style={{height:"650px"}} src={inventory.img} className=" card-img-top p-5 " alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {inventory.name}</h5>
          <p className="card-text">{inventory.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {inventory.price}</li>
          <li className="list-group-item">ID: {inventory._id}</li>
          <li className="list-group-item">Quantity: {inventory.quantity}</li>
        </ul>
        <div className="card-body">
          <button type="button" class="btn btn-danger">Deliver</button>

        </div>
      </div>
    </div>

  );
};

export default InventoryDetail;