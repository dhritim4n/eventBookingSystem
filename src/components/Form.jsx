import { useState, useEffect } from 'react';
import './Form.css';

function Form(){
  const initialValues = {
    title:"",
    date:"",
    time:"",
    desc:"",
    name:"",
    email:""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormValues({ ...formValues, [id]:value});
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }

  },[formErrors])

  const validate = (value) => {
    const errors = {}
    const regex = "";
    if (!/^.{3,}$/.test(formValues.title)) {
      errors.title = "Title must be at least 3 characters.";
    }
  
    if (!/^\d{4}-\d{2}-\d{2}$/.test(formValues.date)) {
      errors.date = "Date must be in YYYY-MM-DD format.";
    }
  
    if (!/^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/.test(formValues.time)) {
      errors.time = "Time must be in HH:MM AM/PM format.";
    }
  
    if (!/^.{10,}$/.test(formValues.desc)) {
      errors.desc = "Description must be at least 10 characters.";
    }
  
    if (!/^[a-zA-Z ]{2,50}$/.test(formValues.name)) {
      errors.name = "Name must be 2–50 letters only.";
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Invalid email address.";
    }
  
    return errors;
  }

  return(
  <div className="Form">
    {Object.keys(formErrors).length === 0 && isSubmit && (
      <div className="uiMessageSuccess">Form Submitted!</div>
    )}

      <div className="FormTitle">
        <h1>Book New Event</h1>
      </div>

      <form className="FormContent" onSubmit={handleSubmit}>
        <input className="FormInput" type="text" id="title" placeholder="Event Title" value={formValues.title} onChange={handleChange}/>
        <p className="error">{formErrors.title}</p>

        <input className="FormInput" type="text" id="date" placeholder="Event Date(yyyy-mm-dd)" value={formValues.date} onChange={handleChange}/>
        <p className="error">{formErrors.date}</p>

        <input className="FormInput" type="text" id="time" placeholder="Event Time(hh:mm (AM/PM))" value={formValues.time} onChange={handleChange}/>
        <p className="error">{formErrors.time}</p>

        <input className="FormInput" type="text" id="desc" placeholder="Event Description" value={formValues.desc} onChange={handleChange}/>
        <p className="error">{formErrors.desc}</p>

        <input className="FormInput" type="text" id="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
        <p className="error">{formErrors.name}</p>

        <input className="FormInput" type="text" id="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
        <p className="error">{formErrors.email}</p>

        <input className="FormSubmit" type="submit" value="submit" onChange={handleChange}/>

      </form>
    </div>
  );
}

export default Form;