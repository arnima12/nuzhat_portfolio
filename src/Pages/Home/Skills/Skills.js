import React from 'react';
import './Skills.css'
const Skills = () => {
    const skills = [
        { category: "Manual Testing", name: "Requirement Analysis", level: "1" },
        { category: "Manual Testing", name: "Test Case Design", level: "2" },
        { category: "Manual Testing", name: "Test Execution & Evaluation", level: "3" },
        { category: "Project Management", name: "Trello", level: "2" },
        { category: "Programming", name: "JavaScript", level: "3" }
    ];

    const getLevelStyle = (level) => {
        const width = `${level * 20}%`;
        const color = level > 1 ? "rgb(159 18 57)" : "gray";
        return { width, backgroundColor: color };
    };

    return (
        <div className="skills-container rounded-xl shadow-xl py-16">
            <h1 className="mt-24 text-center text-5xl font-semibold text-white">Skills</h1>
            <div className="skills-grid mt-12">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item text-white">
                        <h2 className="text-2xl font-semibold">{skill.category}</h2>
                        <h3>{skill.name}</h3>
                        <div className="level-bar">
                            <div
                                className="level-progress"
                                style={getLevelStyle(skill.level)}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
