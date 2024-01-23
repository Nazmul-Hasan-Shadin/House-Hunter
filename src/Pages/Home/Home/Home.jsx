import React from 'react';
import SubBanner from '../../../Components/SubBanner/SubBanner';
import AddHouse from '../../Dashboard/AddHouse/AddHouse';

const Home = () => {
    return (
        <div>
           <SubBanner></SubBanner>  
           <AddHouse></AddHouse>
        </div>
    );
};

export default Home;