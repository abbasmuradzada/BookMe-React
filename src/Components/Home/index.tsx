import React, {FC} from 'react';
import About from './About';
import Slider from './Slider';
import Services from './Services';
import News from './News';
import Facts from './Facts';
import AboutMe from './AboutMe';
import Clients from './Clients';
import Book from './Book';

const Home:FC = () => {
    return (
        <>
            <Slider/>
            <About/>
            <Services/>
            <News/>
            <Facts/>
            <AboutMe/>
            <Clients/>
            <Book/>
        </>
    )
}

export default Home