import React from 'react';

const AboutPageEntry = (props) => {
  var entryStyles = {
    'textAlign': 'center'
  }

  return (
    <div style={entryStyles} className="col-xs-3">
      <p>{props.teamData.description}</p>
    </div>
  )
}

export default AboutPageEntry