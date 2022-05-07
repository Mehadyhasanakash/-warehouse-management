import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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

 

  const onSubmitNewItemUpdate = async (e) => {

    toast("Add Successfully")

    e.preventDefault()
    const quantity = e.target.quantity.value;
    console.log(quantity)
    const inventory = {quantity}

    e.target.reset()
  
    


    const url = `http://localhost:5000/inventory/${inventoryId}`


    fetch(url, {
        method: 'PUT', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inventory),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });




}






  return (
    <div className='w-50 mx-auto mt-5 '>
      <Helmat title='inventory-item '></Helmat>


      <div className="card top-img ">
        <img  src={inventory.img} className=" card-img-top p-5 " alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {inventory.name}</h5>
          <p className="card-text">{inventory.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {inventory.price}</li>
          <li className="list-group-item">ID: {inventory._id}</li>
          <li className="list-group-item text-danger ">Quantity: {inventory.quantity}</li>
        </ul>
        <div className="card-body">
          <button type="button" className="btn btn-success">Deliver</button>

        </div>
        <form onSubmit={onSubmitNewItemUpdate} className='w-50 mx-auto mt-5 mb-5'>

        <div className="mb-3">
                <label htmlFor="exampleInputQuantity" className="form-label">Book Quantity-Update</label>
                <input type="Book-Quantity" name='quantity' className="form-control" id="exampleInputBookQuantity" aria-describedby="bookQuantityHelp" required />
                <div id="bookQuantityHelp" className="form-text">please input book-Quantity update.</div>
            </div>
            <button type='submit' className='btn btn-success'>submit</button>
            <ToastContainer/>
            </form>
           
            
      </div>
      
    </div>

  );
};

export default InventoryDetail;