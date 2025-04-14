import React,{useState} from 'react';
import ReactCalendar from './components/Calendar';
import { events } from './components/Events';
import EventGrid from './components/EventGrid';
import Form from './components/Form';

function App() {
  const [value, setValue] = useState(new Date());

  return (
    
    <div className="App">
      <div className="homeTitle">
      <h1 className='h1'>Event Booking System</h1>
      </div>
      
      <ReactCalendar value={value} setValue={setValue}/>
      <EventGrid events={events} value={value} setValue={setValue}/>
      <Form/>
    </div>
  );
}

export default App;
