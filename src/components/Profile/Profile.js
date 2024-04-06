import React, { useState } from 'react';
import './Profilestylesheets/Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
      name: "Anand Patel",
      description: "A passionate software engineer.",
      technologyUsed: ["React, JavaScript, HTML, CSS,JavaScript"],
      keySkills: ["Frontend Development, Backend Developement"],
    });
  
    const [editing, setEditing] = useState(false);
    const [tempProfileData, setTempProfileData] = useState({ 
        ...profileData
      });
      
  
    const handleChange = (field, value) => {
      setTempProfileData({
        ...tempProfileData,
        [field]: value
      });
    };
  

  const handleUpdate = () => {
    setProfileData(tempProfileData);
    setEditing(false);
  };

  const handleAddTechnology = () => {
    setTempProfileData({
      ...tempProfileData,
      technologyUsed: [...tempProfileData.technologyUsed, ""]
    });
  };

  const handleRemoveTechnology = (index) => {
    const updatedTechnologies = [...tempProfileData.technologyUsed];
    updatedTechnologies.splice(index, 1);
    setTempProfileData({
      ...tempProfileData,
      technologyUsed: updatedTechnologies
    });
  };

  const handleAddKeySkill = () => {
    setTempProfileData({
      ...tempProfileData,
      keySkills: [...tempProfileData.keySkills, ""]
    });
  };

  const handleRemoveKeySkill = (index) => {
    const updatedKeySkills = [...tempProfileData.keySkills];
    updatedKeySkills.splice(index, 1);
    setTempProfileData({
      ...tempProfileData,
      keySkills: updatedKeySkills
    });
  };

  return (
    <div className="profile-container">
      <div className="profilecontainer">
        <img src='./images/PlacedStudents/anand1.jpg' alt="Profile" />
        <h2>{editing ?
          <input
            type="text"
            value={tempProfileData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          : profileData.name
        }</h2>
        <p>{editing ?
          <textarea
            value={tempProfileData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          : profileData.description
        }</p>
        <p>
          <strong>Technology Used:</strong>
          {tempProfileData.technologyUsed.map((tech, index) => (
            <div key={index} className="technology-section">
              {editing ?
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => {
                    const updatedTechnologies = [...tempProfileData.technologyUsed];
                    updatedTechnologies[index] = e.target.value;
                    setTempProfileData({
                      ...tempProfileData,
                      technologyUsed: updatedTechnologies
                    });
                  }}
                />
                : tech
              }
              {editing && <button className="remove-tech" onClick={() => handleRemoveTechnology(index)}>-</button>}
            </div>
          ))}
          {editing && <button className="add-tech" onClick={handleAddTechnology}>Add</button>}
        </p>
        <p>
          <strong>Key Skills:</strong> 
          {tempProfileData.keySkills.map((skill, index) => (
            <div key={index} className="technology-section">
              {editing ?
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => {
                    const updatedKeySkills = [...tempProfileData.keySkills];
                    updatedKeySkills[index] = e.target.value;
                    setTempProfileData({
                      ...tempProfileData,
                      keySkills: updatedKeySkills
                    });
                  }}
                />
                : skill
              }
              {editing && <button className="remove-tech" onClick={() => handleRemoveKeySkill(index)}>-</button>}
            </div>
          ))}
          {editing && <button className="add-tech" onClick={handleAddKeySkill}>Add</button>}
        </p>
        {editing ? (
          <button className='profilebutton' onClick={handleUpdate}>Update</button>
        ) : (
          <button  className='profilebutton' onClick={() => setEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
