import data from './Events.json'


export const events = data;


let selectedDate = new Date(); 

export function setSelectedDate(date) {
  selectedDate = selectedDate.toISOString().slice(0,10);
  
}

export function getSelectedDate() {
  
  return selectedDate;
  
  
}


  export function getUpcomingEvents(events) {
    const today = new Date().toISOString().slice(0, 10);
  
    
    const upcomingEvents = events
      .filter(event => event.date >= today) 
      .sort((a, b) => new Date(a.date) - new Date(b.date)); 
  
    return upcomingEvents;
  }
  
  

export function getEventByDate(events, targetDate) {
    return events.filter(event => event.date === targetDate);
  }
  
  
  