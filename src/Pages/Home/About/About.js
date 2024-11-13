import React from 'react';

const About = () => {
    return (
        <div className="mt-12 flex text-white bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl py-16">
            <div className="w-1/2 text-5xl font-semibold flex items-center justify-center">
                <div className="border-rose-800 rounded-full border-[0.4rem] mr-8"></div> About Me <div className="border-rose-800 rounded-full border-[0.4rem] ml-8"></div>
            </div>
            <div className="w-1/2 text-xl mr-10 text-justify">
                <p className="w-[38rem] text-justify">
                    A result-oriented individual with B.Sc. in Information and Communication Engineering, seeking a role as a Software Quality Assurance (SQA) Engineer at a reputed organization where I can utilize my extensive knowledge in software testing. I’m eager to further enhance my skills, learn new technologies, and grow professionally as a Software Quality Assurance Engineer.

                </p>
            </div>
        </div>
    );
};

export default About;