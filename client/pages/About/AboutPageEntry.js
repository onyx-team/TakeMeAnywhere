import React from 'react';

const AboutPageEntry = (props) => {

  return (
    <div className="col-xs-3 about blueBackground">
      <p>{props.teamData.description}</p>
    </div>
  )
}
export default AboutPageEntry