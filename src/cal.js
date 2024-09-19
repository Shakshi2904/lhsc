import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'; // Ensure to include custom styles

const Cal = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({
    '2024-09-20': ['Event 1', 'Event 2'],
    '2024-09-25': ['Meeting with Team', 'Project Deadline'],
    '2024-10-01': ['Conference'],
    '2024-10-05': ['Team Building Event'],
  });
  const [showEvents, setShowEvents] = useState(false);

  const handleDateClick = (selectedDate) => {
    setDate(selectedDate);
    setShowEvents(true);
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const getMonthEvents = (selectedDate) => {
    const month = selectedDate.getMonth() + 1; // Months are zero-indexed
    const year = selectedDate.getFullYear();
    const monthEvents = Object.keys(events).filter((eventDate) => {
      const event = new Date(eventDate);
      return event.getMonth() + 1 === month && event.getFullYear() === year;
    });

    return monthEvents.map((eventDate) => ({
      date: eventDate,
      events: events[eventDate],
    }));
  };

  const selectedDateEvents = events[formatDate(date)] || [];
  const monthEvents = getMonthEvents(date); // Get events for the selected month

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      return events[formattedDate] ? 'has-events' : null;
    }
    return null;
  };

  const closeEventsPopup = () => {
    setShowEvents(false);
  };

  return (
    <div className="App">
      <h1>Events Calendar</h1> {/* Added heading */}
      <div className="calendar-wrapper">
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

        <div className="events-list">
          <h2>Events This Month</h2>
          {monthEvents.length > 0 ? (
            <ul>
              {monthEvents.map((event, index) => (
                <li key={index}>
                  <strong>{event.date}:</strong>
                  <ul>
                    {event.events.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>No events this month</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cal;
