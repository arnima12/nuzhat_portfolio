import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Education />
            <Experience />
        </div>
    );
};

export default Home;