import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';








const AddNewItem = () => {


    const onSubmitNewItem = async (e) => {

        toast("Add Successfully")

        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const Description = e.target.Description.value;

        e.target.reset()
        const inventory = { name, price, quantity, Description }

        console.log(name, price, quantity, Description);


        fetch('http://localhost:5000/inventory', {
            method: 'POST', // or 'PUT'
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
        <form onSubmit={onSubmitNewItem} className='w-50 mx-auto mt-5 hight'>
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">Book Name</label>
                <input type="Book-Name" name='name' class="form-control" id="exampleInputBookName" aria-describedby="bookNameHelp" required />
                <div id="bookNameHelp" class="form-text">please input book-Name.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPrice" class="form-label">Book price</label>
                <input type="Book-Price" name='price' class="form-control" id="exampleInputBookPrice" aria-describedby="bookPriceHelp" required />
                <div id="bookPriceHelp" class="form-text">please input book-Price.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputQuantity" class="form-label">Book Quantity</label>
                <input type="Book-Quantity" name='quantity' class="form-control" id="exampleInputBookQuantity" aria-describedby="bookQuantityHelp" required />
                <div id="bookQuantityHelp" class="form-text">please input book-Quantity.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputDescription" class="form-label">Book Description</label>
                <input type="Book-Description" name='Description' class="form-control" id="exampleInputBookDescription" aria-describedby="bookDescriptionHelp" required />
                <div id="bookDescriptionHelp" class="form-text">please input book-Description.</div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>


            <ToastContainer />

        </form>
    );
};

export default AddNewItem;