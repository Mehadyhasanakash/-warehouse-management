import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateQuanitiy = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({});
  // const {_id, name, price, img, quantity, description} = props.bo

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setInventory(data))
  }, [])




    const onSubmitNewItemUpdate =  (e) => {
        const proceed = window.confirm('are you sure')
        window.location.reload(false);


    

        e.preventDefault()
        const quantity = e.target.quantity.value;
        console.log(quantity)
        
        const item = {quantity}
    
        e.target.reset()
      
        
    
    
        if(proceed){
            const url = `http://localhost:5000/inventory/${inventoryId}`
    
    
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    

        }

    return (
        <div>
             <form onSubmit={onSubmitNewItemUpdate} className='w-50 mx-auto mt-5 mb-5'>

<div className="mb-3">
        <label htmlFor="exampleInputquantity" className="form-label">Book Quantity-Update</label>
        <input type="number" name='quantity' className="form-control" id="exampleInputBookquantity" aria-describedby="bookquantityHelp" required />
        <div id="bookquantityHelp" className="form-text">please input book-Quantity update.</div>
    </div>
    <button type='submit' className='btn btn-success'>submit</button>
    </form>
        </div>
    );
};

export default UpdateQuanitiy;