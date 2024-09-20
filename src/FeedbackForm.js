import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    block: '',
    service: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyqbXb9e4A3xlnx335Uee7BDmJJDLvo4aQJFBvfMiJOyR33FM_9LJCBHCrG01GJHcQX5Q/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target)
      });

      if (response.ok) {
        alert('Form submitted successfully');
      }
    } catch (error) {
      console.error('form submit', error);
      alert('form submitted');
    }
  };

  return (
    <div className="bg-[rgb(256,226,226)] min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-[rgb(255,199,199)] rounded-xl shadow-md"> {/* Changed background color */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Feedback Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Block</label>
            <select
              name="block"
              value={formData.block}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select Block</option>
              <option value="Block A">Block A</option>
              <option value="Block B">Block B</option>
              <option value="Block C">Block C</option>
              <option value="Block C">Block D</option>
              <option value="Block C">Block E</option>
              <option value="Block C">Block F</option>
              <option value="Block C">Block G</option>
              <option value="Block C">Block H</option>
              <option value="Block C">Block J</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select Service</option>
              <option value="Mess Quality">Mess Quality</option>
              <option value="Laudary Service">Laudary Service</option>
              <option value="Room Cleanliness">Room Cleanliness</option>
              <option value="Staff behavior">Staff behavior</option>
              <option value="General Facilities">General Facilities</option>

            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your comment"
              rows="4"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[rgb(135,133,162)] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[rgb(135,133,133)] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
