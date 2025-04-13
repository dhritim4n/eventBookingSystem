import React from 'react';
import ReactCalendar from './components/Calendar';
import { events } from './components/Events';
import EventGrid from './components/EventGrid';
import Form from './components/Form';

function App() {
  

  return (
    
    <div className="App">
      <div className="homeTitle">
      <h1 className='h1'>Event Booking System</h1>
      </div>
      
      <ReactCalendar/>
      <EventGrid events={events} />
      <Form/>
    </div>
  );
}

export default App;
