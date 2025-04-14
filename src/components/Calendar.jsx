import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import {getUpcomingEvents, getSelectedDate, setSelectedDate} from './Events';
import events from './Events.json';

function ReactCalendar({value, setValue}) {
  
 
  const [eventDates, setEventDates] = useState(new Set());
  
  useEffect(() => {
    // Convert event dates to a Set for fast lookup
    const dates = new Set(events.map(e => e.date));
    setEventDates(dates);
  }, []);

  const handleDateChange = (value) => {
    setValue(value);
    setSelectedDate(value);
  }

  // Highlight dates based on event presence
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toLocaleDateString('en-CA');
      return eventDates.has(dateStr) ? 'event-day' : 'no-event-day';
    }
    return '';
  };

  return (
    <div>
      <h2 className="h2">Calendar</h2>
      <Calendar onChange={handleDateChange} value={value} tileClassName={tileClassName} />
      
      <div className="calendar-legend">
      <div className="legend-item">
      <span className="legend-color no-event-color"></span> No Event
      </div>
      <div className="legend-item">
      <span className="legend-color event-color"></span> Event
      </div>
      </div>

      <p>Selected Date: {value.toDateString()}</p>

      <div className="btn">
        <a href="#title"><button type="button">Book Event</button></a>
        <a href="#UpcomingEvent"><button type="button">Show Upcoming Events</button></a>
      </div>
    

    
    </div>
  );
}



export default ReactCalendar;
