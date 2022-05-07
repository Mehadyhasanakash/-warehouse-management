import React from 'react';
import useBook from '../../UseHook/useBook';
import MangageInventoryDisplay from './MangageInventoryDisplay';

const ManageInventories = () => {
    

    const [books,setBooks] = useBook()


  const DeleteHendal = id => {

    const proceed = window.confirm('are you sure')

    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = books.filter(book => book._id !== id);
            setBooks(remaining)

          }
        })
        


    }




  



  }

    return (
        
       <div>
           
           
            <div className='container-sm' >
            
            
            
            <div className=' row row-cols-1 row-cols-md-3 g-4 mt-5'>
            
    
            {
                books.map (book => <MangageInventoryDisplay
                
                    key={book.id}
                        book = {book}
                        DeleteHendal={DeleteHendal}
                
                >
                        
                </MangageInventoryDisplay>)
            }
    
        </div>
        
        </div>
       </div>
    );
};

export default ManageInventories;