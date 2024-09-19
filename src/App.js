import React, { useState } from "react";
import cardData from "./cardData"; // Importing local card data

// The card component receives props to track whether it should be expanded and for images
const ExpandableCard = ({ imgSrc, title, content, isExpanded, onClick, onCardClick }) => {
  return (
    <div
      className={`p-4 bg-[rgb(255,199,199)] rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 relative ${
        isExpanded ? "cursor-pointer" : ""
      } overflow-hidden`}
      onClick={onCardClick}
    >
      {/* Image at the top */}
      <img
        src={imgSrc}
        alt="Card Image"
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Title below the image and centered */}
      <h2 className="text-center text-xl font-bold text-gray-800 mt-2 mb-4">{title}</h2>

      {/* Conditional rendering for additional content */}
      {isExpanded && <p className="mt-4 text-gray-600">{content}</p>}

      {/* Toggle button for showing more or less positioned lower */}
      {!isExpanded && (
        <div
          className="mt-4 text-sm   cursor-pointer absolute bottom-0 right-4 p-1"
        >
          Show More ▼
        </div>
      )}
    </div>
  );
};

// Modal component to display the expanded card in the center
const Modal = ({ imgSrc, title, content, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      
      <div className="bg-[rgb(256,226,226)] rounded-lg shadow-lg p-8 max-w-lg w-full relative z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Image at the top */}
        <img
          src={imgSrc}
          alt="Card Image"
          className="w-full h-64 object-cover rounded-t-lg"
        />

        {/* Title below the image and centered */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mt-4">{title}</h2>

        {/* Content */}
        <p className="mt-4 text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const App = () => {
  // Use state to track the currently expanded card (by index)
  const [expandedCard, setExpandedCard] = useState(null);
  const [modalCard, setModalCard] = useState(null);

  // Handle the toggling of the expanded card
  const handleToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle the clicked card
  };

  // Handle the modal open
  const handleCardClick = (index) => {
    setModalCard(index);
  };

  // Handle the modal close
  const handleCloseModal = () => {
    setModalCard(null);
  };

  return (
    <div className=" bg-[rgb(256,226,226)] min-h-screen bg-gray-100 flex flex-col items-center justify-center relative px-4">
      <h1 className="text-4xl font-bold mb-8">Previous Events</h1>
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <ExpandableCard
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              content={card.content}
              isExpanded={expandedCard === index} // Check if this card should be expanded
              onClick={() => handleToggle(index)} // Pass the index of the card
              onCardClick={() => handleCardClick(index)} // Open modal on card click
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalCard !== null && (
        <Modal
          imgSrc={cardData[modalCard].imgSrc}
          title={cardData[modalCard].title}
          content={cardData[modalCard].content}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
