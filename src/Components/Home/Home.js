import React from 'react';
import Footer from '../Footer/Footer';
import Helmat from '../Helmat/Helmat';
import ExtraSection from './ExtraSection';
import HomeDisplay from './HomeDisplay';
import Inventory from './Inventory';
import SecondExtraSection from './SecondExtraSection/SecondExtraSection';


const Home = () => {
    return (
        <div>
            <Helmat title="Home"></Helmat>
            <HomeDisplay></HomeDisplay>
            <Inventory> </Inventory>
            <ExtraSection></ExtraSection>
            <SecondExtraSection/>
            <Footer></Footer>
        </div>
    );
};

export default Home;