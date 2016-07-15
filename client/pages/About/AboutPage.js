import React from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';
import AboutPagePic from './AboutPagePic.js';
import AboutPageEntry from './AboutPageEntry.js';
import Mood from '../Mood/MoodTable.js';
import Test from '../Test/testPage.js';


const AboutPage = (props) => {
  return (
    <div>
      {props.teamData.map((team, i) =>
        <AboutPagePic key={i} teamData={team} />
      )}

      {props.teamData.map((team, i) =>
        <AboutPageEntry key={i} teamData={team} />
      )}
    </div>
  )
}

export default AboutPage