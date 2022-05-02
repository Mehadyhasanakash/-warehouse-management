import React from 'react';

const HomeDisplay = () => {
    return (
        <div className="container ">
            <div className="row  d-flex justify-contain-center align-items-center m-5 ">
                <div className="col">
                    <div >

                        <h1 className='text-uppercase text-success'>Book Warehouse Management</h1> <br />
                        <p>This was the first full year I’ve had a full time “job” taking the majority of my mental energy, instead of my work on this site.

                            I didn’t read quite as much as I have in years past, partially from my other work and from the long pause on Made You Think, but I still read some great mind-changing books and articles I’d strongly recommend you check out over the holidays or in 2019.

                            <span className='text-danger'>Here they are in no particular order.</span></p>
                        <br />

                        <button type="button" className="btn btn-success">Oder-NOw</button>

                            


                    </div>
                </div>




                <div className="col">
                    <div>
                        <img className='img-fluid' src="https://i.ibb.co/3RHp28W/image07.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDisplay;