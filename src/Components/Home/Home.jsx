import React from 'react';
import '../SharedPage/Style.css'
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services';
import ReliableTutors from './ReliableTutors';
const Home = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Banner />
                <AboutUs />
                <Services />
                <ReliableTutors />


            </div>


        </>
    );
};

export default Home;