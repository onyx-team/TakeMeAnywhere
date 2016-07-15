import React from 'react';
import ReactDOM from 'react-dom';
import MoodPageEntry from './MoodPageEntry.js';

var moods = [
  { mood: 'party'},
  { mood: 'nature'},
  { mood: 'adventure'},
  { mood: 'city'},
  { mood: 'solitude'},
  { mood: 'romantic'},
  { mood: 'foodie'},
  { mood: 'historic'},
  { mood: 'family'}
];

class MoodTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("MOODS", moods)
    return (
      <div>
        {moods.map((mood, i) =>
          <MoodPageEntry key={i} moods={mood} />
        )}
      </div>
    )
  }
}

export default MoodTable;