import React from 'react';

const Awards = () => {
    const awards = [
        {
            "id": "01",
            "title": "Deans",
            "description": "ksdjahdsalkdjas;ldask;dlask"
        }
    ]
    return (
        <div className="mt-24 w-full text-white">
            <h1 className="text-center text-5xl font-semibold">Honours & Awards</h1>
            <div className="flex justify-center mt-8">
                {awards.map((award) => (
                    <div>
                        <h2 className="text-3xl text-rose-600 text-center">{award.title}</h2>
                        <div className="mt-4 rounded-xl bg-opacity-15 bg-black shadow-xl px-12 py-6">
                            <p>{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;