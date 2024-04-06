import React from 'react';
import "../Stylesheetshome/CourseItem.css"

const CourseItem = ({ title, startDate }) => (
  <div className="ag-courses_item">
    <a href="#" className="ag-courses-item_link">
      <div className="ag-courses-item_bg"></div>
      <div className="ag-courses-item_title">{title}</div>
      {startDate && (
        <div className="ag-courses-item_date-box">
          Start:
          <span className="ag-courses-item_date">{startDate}</span>
        </div>
      )}
    </a>
  </div>
);

const SectionHeader = ({ title }) => (
  <>
    <hr />
    <h1 className={title === "Professional Skill Sets" ? "ag-professional-skills" : ""}>{title}</h1>
    <hr />
  </>
);

const CoursesContainer = () => (
  <div className="ag-format-container">
   
    <SectionHeader title="Professional Skill Sets" />
    
    <SectionHeader title="Programming Language" />
    <div className="ag-courses_box">
      <CourseItem
        title="C++"
     
      />  <CourseItem
      title="JavaScript"
      
    />
    <CourseItem
      title="PHP"
   
    />
    <CourseItem
      title="Python"
   
    />
    </div>

    <SectionHeader title="TECHNOLOGIES" />
    <div className="ag-courses_box">
      <CourseItem title="Node.js" />
      <CourseItem title="Express.js" />
      <CourseItem title="React.js" />
      <CourseItem title="MongoDB" />
      <CourseItem title="Bootstrap" />
      <CourseItem title="YOLOv8" />
     
    
    </div>

    <SectionHeader title="CONCEPTS" />
    <div className="ag-courses_box">
    <CourseItem title="OOPs" />
      <CourseItem title="DBMS" />
    </div>

    <SectionHeader title="INTERPERSONAL SKILLS" />
    <div className="ag-courses_box">
    <CourseItem title="Project Management" />
      <CourseItem title="Leadership" />
    </div>
  </div>
);

export default CoursesContainer;
