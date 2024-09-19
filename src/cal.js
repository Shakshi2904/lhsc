import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'; // Ensure to include custom styles

const Cal = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({
    '2024-09-20': ['Event 1', 'Event 2'],
    '2024-09-25': ['Meeting with Team', 'Project Deadline']
  });
  const [showEvents, setShowEvents] = useState(false); // New state for showing events

  const handleDateClick = (selectedDate) => {
    setDate(selectedDate);
    setShowEvents(true); // Show events when a date is clicked
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  };

  const selectedDateEvents = events[formatDate(date)] || [];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      return events[formattedDate] ? 'has-events' : null;
    }
    return null;
  };

  const closeEventsPopup = () => {
    setShowEvents(false); // Hide events popup
  };

  return (
    <div className="App">
      <div className="calendar-container">
        <Calendar
          onChange={handleDateClick}
          value={date}
          tileClassName={tileClassName}
        />
        {showEvents && (
          <>
            <div className="overlay" onClick={closeEventsPopup}></div>
            <div className="events-popup">
              <h2>Events on {formatDate(date)}</h2>
              {selectedDateEvents.length > 0 ? (
                <ul>
                  {selectedDateEvents.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              ) : (
                <p>No events</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cal;
