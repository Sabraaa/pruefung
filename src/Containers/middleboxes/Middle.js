import React from 'react'
import "./Middle.css"
import Feature from "../../components/feature/Feature"

const Middle = () => {
  return (
    <div>
        <div className="middle-boxes">
            {/* 1 */}
            <div className="new-project">
              <p className="title-new-project">NEW PROJECT</p>
              <Feature title="COUNTRY" text="MAXIMUM BUDGET" />
              <Feature title="CITY" text="MINIMUM BUDGET" />
              <Feature title="NATIVE LANGUAGE" text="DEADLINE" />
              <Feature title="GENDER" text="ATTACHMENT FILE" />
              <Feature title="MINIMUM EXPERIENCE" text="PROFILE RATING" />
              <Feature title="FIELD OF ACTIVITY" text="NATIVE LANGUAGE" />
            </div>
            {/* 2 */}
            <div className="new-recruitment"></div>
            {/* 3 */}

            {/* 4 */}
          </div>
    </div>
  )
}

export default Middle