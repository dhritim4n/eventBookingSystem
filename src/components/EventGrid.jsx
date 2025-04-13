import React, { useState } from 'react';
import './EventGrid.css';
import { getEventByDate, getSelectedDate, getUpcomingEvents } from './Events';
import './Events';
import Calendar from 'react-calendar';
import ReactCalendar from './Calendar';

function EventGrid({ events }) {

  return (
    <>
  


    <div className="title" id="UpcomingEvent">
        <h2>Upcoming Events:-</h2>
    </div>


    <div className="event-grid" >
        
      {getUpcomingEvents(events).map((event) => (
        <div key={event.id} className="event-card">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default EventGrid;
