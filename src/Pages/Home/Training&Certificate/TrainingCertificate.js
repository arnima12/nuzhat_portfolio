import React from 'react';

const TrainingCertificate = () => {
    const certificate = [
        {
            "id": "01",
            "image": "https://i.ibb.co.com/fdHwVBFr/Introduction-to-Data-Analytics.jpg",
            "course": "operation",
            "provider": "BSc",
            "instructor": "Information & Communication Engineering",
            "designation": "Bangladesh University Of Professional"

        },

    ]
    return (
        <div className="mt-24 w-full text-white">
            <h1 className="text-center text-5xl font-semibold">Training & Certificate</h1>
            <div className="flex justify-center mt-12">
                <div>
                    {certificate.map((cert) => (
                        <div key={cert.id} className="flex flex-col lg:flex-row rounded-xl bg-opacity-15 bg-black shadow-xl px-12 py-6 mb-4 w-auto mx-4 lg:w-[70rem] justify-between items-center">
                            <div className="mb-2">
                                <div className="text-3xl text-rose-800 ">
                                    {cert.course}</div>

                                <h2 className="text-2xl">{cert.provider}</h2>
                                <h4 className="text-xl">{cert.instructor}</h4>
                                <h4 className="text-xl">{cert.designation}</h4>
                            </div>
                            <div className="text-xl">
                                <a href={cert.image} target="_blank" rel="noopener noreferrer" download>
                                    <img
                                        src={cert.image}
                                        alt="Certificate"
                                        className="w-24 h-24 object-cover rounded-lg transform transition duration-300 hover:scale-[3.5] cursor-pointer"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainingCertificate;