import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Education />
            <Experience />
            <Skills />
        </div>
    );
};

export default Home;