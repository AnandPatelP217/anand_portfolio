// Meeting.js
import React, { useState } from 'react';
import './Meetingstylesheets/MainMeeting.css';

const MainMeeting = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    online: false,
    location: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="lecture-post">
      <h2>Post a Lecture</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Lecture Title" value={formData.title} onChange={handleChange} />
        <textarea name="description" placeholder="Lecture Description" value={formData.description} onChange={handleChange}></textarea>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
        <label>
          Online Lecture
          <input type="checkbox" name="online" checked={formData.online} onChange={handleChange} />
        </label>
        {!formData.online && (
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        )}
        <button type="submit">Post Lecture</button>
      </form>
    </div>
  );
}

export default MainMeeting;
