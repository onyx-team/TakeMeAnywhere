import React from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';
import AboutPageEntry from './AboutPageEntry.js';
import Mood from '../../containers/MoodPage.js';

var team = [
    {
      name: 'Emily',
      description: 'Chicharrones squid narwhal, sartorial roof party vinyl tilde aesthetic street art retro drinking vinegar brunch typewriter everyday carry. Gastropub quinoa four loko taxidermy pickled fingerstache. Paleo DIY small batch fashion axe direct trade, butcher farm-to-table williamsburg. ',
      img: 'https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg'
    },
    {
      name: 'Ji',
      description: 'Distillery shabby chic schlitz cold-pressed occupy. Freegan brooklyn chicharrones mustache keffiyeh shabby chic truffaut, mumblecore forage ugh asymmetrical four loko quinoa. Shabby chic wayfarers occupy tousled narwhal asymmetrical cred marfa direct trade. Kickstarter mixtape direct trade, chia crucifix drinking vinegar tumblr brooklyn poutine affogato.',
      img: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg'
    },
    {
      name: 'Kyle',
      description: 'Asymmetrical forage photo booth, chicharrones keffiyeh XOXO paleo flexitarian. Slow-carb kickstarter intelligentsia, deep v irony put a bird on it roof party whatever paleo four loko drinking vinegar echo park four dollar toast austin. Lomo deep v food truck etsy craft beer, bicycle rights tilde crucifix blue bottle cold-pressed microdosing meggings typewriter. ',
      img: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg'
    },
    {
      name: 'Nick',
      description: 'Mustache williamsburg knausgaard marfa gochujang flexitarian. Flannel wolf flexitarian, migas pickled hammock small batch forage asymmetrical. Migas blog slow-carb ugh, polaroid crucifix bespoke salvia occupy cornhole green juice kombucha biodiesel meggings swag. Craft beer ethical chia pinterest celiac kogi vegan, PBR&B marfa yuccie.',
      img: 'http://thecutest.org/wp-content/uploads/2016/04/cute-kittens-13.jpg'
    },
  ]

const AboutPage = (props) => {
  return (
    <div className='container-fluid blueBackground'>
      <div className='row row-centered'>
      {team.map((team, i) =>
        <AboutPageEntry key={i} teamData={team} />
      )};
      </div>
    </div>
  )
}

export default AboutPage;