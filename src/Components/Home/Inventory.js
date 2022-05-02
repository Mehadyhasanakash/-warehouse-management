import React from 'react';
import useBook from '../../UseHook/useBook';
import InventoryDisplay from './InventoryDisplay';

const Inventory = () => {

    const [books, setBooks] = useBook()


    return (
        <div className='container-sm'>
            <div className=' row row-cols-1 row-cols-md-3 g-4 m-5'>
            

            {
                books.slice(0 , 6).  map (book => <InventoryDisplay
                
                key={book._id}    
                book = {book}
                
                
                ></InventoryDisplay>)
            }

        </div>
        </div>
    );
};

export default Inventory;