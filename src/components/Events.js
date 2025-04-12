// events.js


export const events = [
    {
      id: 1,
      title: 'Team Meeting',
      date: '2025-04-14',
      time: '10:00 AM',
      description: 'Monthly sync with team members.',
    },
    {
      id: 2,
      title: 'Product Launch',
      date: '2025-04-18',
      time: '2:00 PM',
      description: 'Launch of the new app version.',
    },
    
    {
        id: 3,
        title: 'Product Launch',
        date: '2025-04-12',
        time: '2:00 PM',
        description: 'Launch of the new app version.',
      },
  ];


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
  
  
  