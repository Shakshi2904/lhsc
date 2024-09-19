import React from 'react';

const MakersSection = () => {
  const makers = [
    { name: 'Riya Sharma', image: '/image/team.png' },
    { name: 'Shakshi Mittal', image: '/image/team.png' },
    { name: 'Akshita Sachdeva', image: '/image/team.png' },
    { name: 'Bhoomy Singh', image: '/image/team.png' },
    { name: 'Priya Raj', image: '/image/team.png' },
  ];

  return (
    <div className="bg-[rgb(256,226,226)] py-8 pt-0"> {/* Remove top padding */}
      <h1 className="text-center text-3xl font-bold mb-6">Makers</h1>
      <div className="flex flex-wrap justify-center gap-5 px-5 mb-8">
        {makers.map((maker, index) => (
          <div key={index} className="flex flex-col items-center text-center w-36">
            <img
              src={maker.image}
              alt={maker.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
            <p className="text-base mt-2">{maker.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakersSection;
