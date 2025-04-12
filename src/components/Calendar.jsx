import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import './EventGrid.css';
import {getSelectedDate, setSelectedDate} from './Events';

function ReactCalendar() {
  
  const [showPopup, setShowPopup] = useState(false);
  const [value, setValue] = useState(new Date());

  const setDate = (value) => {
    setValue(value);
    setSelectedDate(value);
  }

  return (
    <div>
      <h2 className="h2">Calendar</h2>
      <Calendar onChange={setDate} value={value} />
      <p>Selected Date: {value.toDateString()}</p>
      <div className="btn">
        <a href="#title"><button type="button">Book Event</button></a>
        <a href="#UpcomingEvent"><button type="button">Show Upcoming Events</button></a>
      </div>
    
    </div>
  );
}



export default ReactCalendar;
