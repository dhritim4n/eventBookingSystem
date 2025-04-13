import './Form.css';

function Form(){
  return(
    <div className="Form">

      <div className="FormTitle">
        <h1>Book New Event</h1>
      </div>

      <form className="FormContent">
        <input className="FormInput" type="text" id="title" placeholder="Event Title" />
        <input className="FormInput" type="text" id="date" placeholder="Event Date(yyyy-mm-dd)"/>
        <input className="FormInput" type="text" id="time" placeholder="Event Time(hh:mm (AM/PM))"/>
        <input className="FormInput" type="text" id="desc" placeholder="Event Description" />
        <input className="FormInput" type="text" id="name" placeholder="Name"/>
        <input className="FormInput" type="text" id="email" placeholder="Email" />
        <input className="FormSubmit" type="submit" value="submit" />

      </form>
    </div>
  );
}

export default Form;