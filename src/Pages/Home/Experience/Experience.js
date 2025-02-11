import React, { useState } from 'react';

const Experience = () => {
    const experience = [
        {
            "name": "Battery Interactive",
            "position": "SQA Intern",
            "year": "Dec 2022 - Jan 2023",
            "extraInfo": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            "name": "Battery Interactive",
            "position": "SQA Intern",
            "year": "Dec 2022 - Jan 2023",
            "extraInfo": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ]
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="mt-24 text-white bg-transparent bg-opacity-25 bg-slate-950 mx-8 rounded-xl shadow-xl py-16">
            <h1 className="text-center text-5xl font-semibold">Experience</h1>
            <div className="flex flex-col items-center mt-24 justify-center">
                {experience.map((exp, index) => (
                    <div key={index} className="flex flex-col lg:flex-row justify-center pb-10 relative">
                        <div className="mb-4 w-auto lg:w-[40rem] flex items-center">
                            <h3 className="text-2xl px-4 text-rose-800">{exp.year}</h3>
                        </div>

                        <div className="relative hidden lg:flex flex-col items-center">
                            <div className="h-[100px] border-l border-gray-300"></div>

                            <button
                                className="relative text-3xl"
                                onClick={() => handleExpand(index)}
                            >
                                🚀
                            </button>
                            <div className="h-[100px] border-l border-gray-300"></div>
                        </div>

                        <div
                            className={`transition-all duration-300 ${expandedIndex === index ? 'w-full text-justify mt-4 px-4' : 'w-[60%] mt-4 px-4'
                                }`}
                        >
                            <h1 className="text-3xl">{exp.name}</h1>
                            <h2 className="text-2xl">{exp.position}</h2>
                            {expandedIndex === index && (
                                <p className="text-xl mt-2 text-justify text-wrap">
                                    {exp.extraInfo}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;