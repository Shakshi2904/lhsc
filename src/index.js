// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing Tailwind CSS
import App from './App';
import FeedbackForm from './FeedbackForm.js';
import First from './First.jsx';
import ContactSection from './ContactSection.jsx';
import AboutUs from './about.js';
import MakersSection from './maker.js';
import LostAndFound from './LostAndFound.jsx';
import Cal from './cal.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <First/>
    <App />
    <Cal/>
    <FeedbackForm/>
    <ContactSection/>
    <AboutUs/>
    <MakersSection/>
  </React.StrictMode>
);