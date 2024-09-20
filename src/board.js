import React from 'react';

const Board = () => {
  const images = [
    { id: 1, src: '/image/b5.jpg', alt: 'Saloni Sinha' },
    { id: 2, src: '/image/b9.jpg', alt: 'Suhasini Tiwari' },
    { id: 3, src: '/image/b3.jpg', alt: 'Poojitha Reddy' },
    { id: 5, src: '/image/b4.jpg', alt: 'Aditi Iyer' },
    { id: 4, src: '/image/b1.jpg', alt: 'Shakshi Mittal' },
    { id: 6, src: '/image/b6.jpg', alt: 'Bhoomy Singh' },
    { id: 9, src: '/image/b2.jpg', alt: 'Shoumili Pathak' },
    { id: 7, src: '/image/b7.jpg', alt: 'Miruthula C R' },
    { id: 8, src: '/image/b8.jpg', alt: 'Shreya Mandakumar' },
  ];

  return (
    <div className="min-h-screen bg-[rgb(256,226,226)] flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold mb-8">Board 2024-25</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-16">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white text-xl font-bold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
