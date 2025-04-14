import React, { useState } from 'react';
import './EventGrid.css';
import { getEventByDate, getSelectedDate, getUpcomingEvents } from './Events';
import './Events';
import Calendar from 'react-calendar';
import ReactCalendar from './Calendar';

function EventGrid({ events,value,SetValue}) {

  return (
    <>

    <div className="title" id="SelectedDateEvent">
        <h2>{value.toLocaleDateString('en-CA')} Events:-</h2>
    </div>


    <div className="event-grid" >
        
    {getEventByDate(events, value.toLocaleDateString('en-CA')).length === 0 ? (
    <p>No events</p>
      ) : (
        getEventByDate(events, value.toLocaleDateString('en-CA')).map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p>{event.description}</p>
          </div>
        ))
      )}
    </div>
  


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
