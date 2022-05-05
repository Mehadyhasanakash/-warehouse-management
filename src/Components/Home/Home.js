import React from 'react';
import Footer from '../Footer/Footer';
import Helmat from '../Helmat/Helmat';
import ExtraSection from './ExtraSection';
import HomeDisplay from './HomeDisplay';
import Inventory from './Inventory';


const Home = () => {
    return (
        <div>
            <Helmat title="Home"></Helmat>
            <HomeDisplay></HomeDisplay>
            <Inventory> </Inventory>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;