import React from 'react';
import useBook from '../../UseHook/useBook';
import MangageInventoryDisplay from './MangageInventoryDisplay';

const ManageInventories = () => {
    

    const [books] = useBook()

    return (
        <div className='container-sm' >
            
        <div className=' row row-cols-1 row-cols-md-3 g-4 m-5'>
        

        {
            books.map (book => <MangageInventoryDisplay
            
                key={book.id}
                    book = {book}
            
            >
                    
            </MangageInventoryDisplay>)
        }

    </div>
    </div>
    );
};

export default ManageInventories;