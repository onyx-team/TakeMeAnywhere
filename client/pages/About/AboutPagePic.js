import React from 'react';

const AboutPagePic = (props) => {
  var picStyles = {
    'height': 350,
    'borderRadius': 50+'%',
  }
  return (
    <div>
      <img style={picStyles} className="col-xs-3" src={props.teamData.img}></img>
    </div>
  )
}

export default AboutPagePic;