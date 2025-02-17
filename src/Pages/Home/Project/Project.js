import React from 'react';

const Project = () => {
    const projects = [
        {
            "title": "BUP Post Admission Test Portal",
            "technology": "HTML, CSS & JavaScript",
            "image": "https://i.ibb.co.com/6SRDRLS/project.jpg",
            "link": ""
        }
    ]
    return (
        <div className="mt-24 w-full text-white">
            <h1 className="text-center text-5xl font-semibold">Projects</h1>
            <div className="flex justify-center mt-12">
                {projects.map((project) => (
                    <div className="grid lg:grid-cols-2 gap-x-48">
                        <div>
                            <h2 className="text-rose-600 text-3xl">
                                {project.title}
                            </h2><br />
                            <h3>{project.technology}</h3>
                        </div>
                        <div className="grid place-items-center mt-8 lg:place-items-end lg:mt-0">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.title} className="cursor-pointer w-32 h-24 hover:w-48 hover:h-48 rounded-md" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Project;