import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa"; // React Icons

const researchPapers = [
    {
        title: "Hybrid SVM-Bidirectional Long Short-Term Memory Model for Fine-Grained Software Requirement Classification",
        status: "Published",
        publicationLink: "https://example.com/your-paper", // Replace with actual link
        description:
            "This research introduces a hybrid model integrating SVM and Bi-LSTM for improved software requirement classification, enhancing accuracy and performance.",
    },
    {
        title: "AI-Based User Feedback Analysis for Software Requirements",
        status: "In Progress",
        publicationLink: "",
        description:
            "Exploring AI techniques for extracting meaningful insights from user feedback to enhance software requirement engineering processes.",
    },
];

const Research = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className=" rounded-xl shadow-xl py-16">
            <h1 className="mt-8 text-center text-5xl font-semibold text-white">Research Experience</h1>

            <div className="mt-10 max-w-4xl mx-auto space-y-6">
                {researchPapers.map((paper, index) => (
                    <div key={index} className="bg-opacity-15 bg-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-white ">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold w-[44rem]">{paper.title}</h2>
                            <div className="flex items-center space-x-4 h-16">
                                <span
                                    className={`px-3 py-1 text-sm font-semibold rounded-lg w-[6rem] text-center ${paper.status === "Published" ? "bg-rose-600" : "bg-rose-500"
                                        }`}
                                >
                                    {paper.status}
                                </span>
                                <button onClick={() => toggleExpand(index)}>
                                    {expandedIndex === index ? (
                                        <FaChevronUp className="text-gray-200 hover:text-white transition" />
                                    ) : (
                                        <FaChevronDown className="text-gray-200 hover:text-white transition" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <div className="mt-3 pt-3">
                                {paper.publicationLink && (
                                    <a
                                        href={paper.publicationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-rose-300 hover:underline space-x-2"
                                    >
                                        <span>View Publication</span>
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                )}
                                <p className="mt-3 text-gray-300">{paper.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
