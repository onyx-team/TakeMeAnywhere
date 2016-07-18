import React from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';
import AboutPagePic from './AboutPagePic.js';
import AboutPageEntry from './AboutPageEntry.js';
import Mood from '../../containers/MoodPage.js';

var team = [
    {
      name: 'Emily',
      description: 'Hello',
      img: 'https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg'
    },
    {
      name: 'Ji',
      description: 'Hello',
      img: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg'
    },
    {
      name: 'Kyle',
      description: 'Hello',
      img: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg'
    },
    {
      name: 'Nick',
      description: 'Hello',
      img: 'http://thecutest.org/wp-content/uploads/2016/04/cute-kittens-13.jpg'
    },
  ]

const AboutPage = (props) => {
  return (
    <div>
      {team.map((team, i) =>
        <AboutPagePic key={i} teamData={team} />
      )}

      {team.map((team, i) =>
        <AboutPageEntry key={i} teamData={team} />
      )}
    </div>
  )
}

export default AboutPage;