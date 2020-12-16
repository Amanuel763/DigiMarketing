import React from 'react'
import Footer from '../../Footer';
import FrontAbout from '../../FrontAbout';
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <FrontAbout />
            <Footer />

        </>
    );
}

export default Home;
