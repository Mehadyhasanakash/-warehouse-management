import React from 'react';
import useBook from '../../UseHook/useBook';
import MangageInventoryDisplay from './MangageInventoryDisplay';

const ManageInventories = () => {
    

    const [books] = useBook()

    return (
        
       <div>
           
           
            <div className='container-sm' >
            
            
            
            <div className=' row row-cols-1 row-cols-md-3 g-4 mt-5'>
            
    
            {
                books.map (book => <MangageInventoryDisplay
                
                    key={book.id}
                        book = {book}
                
                >
                        
                </MangageInventoryDisplay>)
            }
    
        </div>
        
        </div>
       </div>
    );
};

export default ManageInventories;