import React, { useState } from "react";
import { aboutDocApointData } from "../../APIs/AchievementData1.js";
import { whyToChooseDocApoint } from "../../APIs/AchievementData1.js";
import "./stylesheet/AchievementPageStyle.css";

const Achievment = () => {
  const [aboutData] = useState(aboutDocApointData);
  const [aboutData2] = useState(whyToChooseDocApoint);

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title pad-15">
            <hr/>  <h2>About Me</h2><hr/>
            </div>
          </div>
          <div className="row">
            <div className="about-content pad-15">
              <div className="row">
                <div className="about-text text-section pad-15">
                  
                    Welcome <span>Friends</span>, your trusted Buddy Anand.
                  
                  <p>
                
                  </p>
                </div>
              </div>

              <div className="row">
                {/* First Card */}
                <div className="about-card pad-15">
                  <h3 className="title">Achievements</h3>
                  <div className="row">
                    <div className="timeline-box pad-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Items */}
                        {aboutData.map((element) => {
                          const { id, title, description } = element;
                          return (
                            <>
                              <div className="timeline-item" key={id}>
                                <div className="circle-dot"></div>
                                <h4 className="timeline-title">{title}</h4>
                                <p className="timeline-text">{description}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Card */}
                <div className="about-card pad-15">
                  <h3 className="title">Hobbies</h3>
                  <div className="row">
                    <div className="timeline-box pad-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Items */}
                        {aboutData2.map((element) => {
                          const { id, title, description } = element;
                          return (
                            <>
                              <div className="timeline-item" key={id}>
                                <div className="circle-dot"></div>
                                <h4 className="timeline-title">{title}</h4>
                                <p className="timeline-text">{description}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="text-section pad-15">
                  <h3 className="heading-text">🧡Radhe Radhe🧡 </h3>
                  <p className="my-para">
                  "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievment;
