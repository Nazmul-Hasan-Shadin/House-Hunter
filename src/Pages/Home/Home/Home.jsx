import React from 'react';
import SubBanner from '../../../Components/SubBanner/SubBanner';
import AddHouse from '../../Dashboard/AddHouse/AddHouse';
import FeatureProperty from '../FeaturedPropery/FeatureProperty';

const Home = () => {
    return (
        <div>
           <SubBanner></SubBanner>  

           <FeatureProperty></FeatureProperty>
        
        </div>
    );
};

export default Home;