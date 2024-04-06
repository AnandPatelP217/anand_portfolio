import React, { useState } from 'react';
import "./vecancystylesheet/MainVecancy.css"


const MainVecancy = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: ['']
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'skills') {
      const newSkills = [...formData.skills];
      newSkills[index] = value;
      setFormData(prevState => ({
        ...prevState,
        skills: newSkills
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleAddSkill = () => {
    setFormData(prevState => ({
      ...prevState,
      skills: [...prevState.skills, '']
    }));
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1);
    setFormData(prevState => ({
      ...prevState,
      skills: newSkills
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (<>

    <div className="post-section">
      <h2>Post a Job Vacancy</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" value={formData.description} onChange={handleChange}></textarea>
        <div className="skills-section">
          <h3>Required Skills</h3>
          {formData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <input type="text" name="skills" placeholder="Skill" value={skill} onChange={(e) => handleChange(e, index)} />
              {index > 0 && <button type="button" onClick={() => handleRemoveSkill(index)}>-</button>}
            </div>
          ))}
          <button type="button" onClick={handleAddSkill}>+ Add Skill</button>
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
    </>
  );
}

export default MainVecancy;
