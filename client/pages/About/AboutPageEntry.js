import React from 'react';

const AboutPageEntry = (props) => {
  return (
      <div className='col-xs-3'>
        <img className="col-xs-3 aboutPic" src={props.teamData.img} />
        <p className='about'>
          {props.teamData.description}
        </p>
      </div>
  )
}

export default AboutPageEntry;