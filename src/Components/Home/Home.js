import React from 'react';
import Footer from '../Footer/Footer';
import ExtraSection from './ExtraSection';
import HomeDisplay from './HomeDisplay';
import Inventory from './Inventory';


const Home = () => {
    return (
        <div>
            <HomeDisplay></HomeDisplay>
            <Inventory></Inventory>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;