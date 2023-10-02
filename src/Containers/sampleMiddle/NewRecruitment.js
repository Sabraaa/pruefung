import React from 'react'
import "../sampleMiddle/SampleMiddle.css"
import Feature from '../../components/feature/Feature'

const NewRecruitment = () => {
  return (
    <div className="sample-container">
    <p className="title-new-project">NEW RECRUITMENT</p>
    <Feature title="COUNTRY" text="MAXIMUM BUDGET" />
    <Feature title="CITY" text="MINIMUM BUDGET" />
    <Feature title="NATIVE LANGUAGE" text="DEADLINE" />
    <Feature title="GENDER" text="ATTACHMENT FILE" />
    <Feature title="MINIMUM EXPERIENCE" text="PROFILE RATING" />
    <Feature title="FIELD OF ACTIVITY" text="NATIVE LANGUAGE" />
    <div className="new-project-text">
      <div className="new-project-freelancer-skills">
        <p>FREELANCER SKILLS</p>
      </div>
      <div className="middle-custom-line"></div>
      <div className="new-project-discriptions">
        <p>DISCRIPTIONS...</p>
      </div>
    </div>
    <div className="middle-button">
      <div className="middle-custom-line"></div>
      <h5 style={{ color: "#00DCFF" }}>CREATE PROJECT</h5>
    </div>
  </div>
  )
}

export default NewRecruitment