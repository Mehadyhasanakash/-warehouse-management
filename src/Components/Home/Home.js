import React from 'react';
import ExtraSection from './ExtraSection';
import HomeDisplay from './HomeDisplay';
import Inventory from './Inventory';

const Home = () => {
    return (
        <div>
            <HomeDisplay></HomeDisplay>
            <Inventory></Inventory>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;