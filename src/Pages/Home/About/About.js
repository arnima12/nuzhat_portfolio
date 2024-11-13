import React from 'react';

const About = () => {
    return (
        <div className="mt-12 w-full flex text-white">
            <div className="w-1/2 text-5xl font-semibold flex items-center justify-center">
                <div className="border-rose-800 rounded-full border-[0.4rem] mr-8"></div> About Me <div className="border-rose-800 rounded-full border-[0.4rem] ml-8"></div>
            </div>
            <div className="w-1/2 text-xl mr-10 text-justify">
                <p className="w-[38rem]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
};

export default About;