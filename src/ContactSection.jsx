import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxfrHTle_N474UMHO6R-WFm8oV4f4X_mSB8HkLDuEL7Et_IHFi9gANXHfJt2i54CuKi/exec'; // Replace this with your actual Web App URL
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target),
      });
  
      if (response.ok) {
        alert('Form submitted successfully');
      } 
    } catch (error) {
      console.error('submitting the form:', error);
      alert('form submitted');
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-lg items-center">
      {/* Contact Table */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Contact Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-2 border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-400 p-4 text-center text-gray-600">Block Name</th>
                <th className="border border-gray-400 p-4 text-center text-gray-600">Contact No.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block A</td>
                <td className="border border-gray-400 p-4 text-center">123-456-7890</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block B</td>
                <td className="border border-gray-400 p-4 text-center">234-567-8901</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block C</td>
                <td className="border border-gray-400 p-4 text-center">345-678-9012</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block D</td>
                <td className="border border-gray-400 p-4 text-center">456-789-0123</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block E</td>
                <td className="border border-gray-400 p-4 text-center">567-890-1234</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block F</td>
                <td className="border border-gray-400 p-4 text-center">678-901-2345</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block G</td>
                <td className="border border-gray-400 p-4 text-center">789-012-3456</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="border border-gray-400 p-4 text-center">Block H</td>
                <td className="border border-gray-400 p-4 text-center">890-123-4567</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-md mt-8 lg:mt-0 lg:ml-8 flex items-center justify-center h-full">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Contact Us</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg p-3 w-full shadow-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
