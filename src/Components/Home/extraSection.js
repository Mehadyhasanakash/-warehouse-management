import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExtraSection = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2000,
            easing: 'ease'
        })
    })

    return (
        <div className="container-sm ">
            <div className="row gx-5 m-5 align-items-center">
                <div className="col" data-aos="flip-left">
                    <img className='img-fluid' src="https://i.ibb.co/8mJFfVB/image08.png" alt="" />
                </div>
                <div className="col" data-aos="flip-right">
                    <div>
                        <h1 className='text-danger'>MY BEST BOOK</h1>
                        <p >The best books on art, architecture, design, illlustration, photography and subjects relating to visual culture, as recommended by our experts.</p>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default ExtraSection;