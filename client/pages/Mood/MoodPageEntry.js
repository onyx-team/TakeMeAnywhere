import React from 'react';
var FontAwesome = require('react-fontawesome');


class MoodPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var colors = ['red','blue','green','purple','pink', 'yellow'];
    var opacity = Math.random() + 0.2;

    var icons = {
      party: 'glass',
      nature: 'tree',
      adventure: 'binoculars',
      city: 'building',
      romantic: 'heart',
      solitude: 'male',
      foodie: 'cutlery',
      historic: 'university',
      family: 'users'

    }
    return (
      <div
        onClick={(this.props.onMoodClick)}
        className="mood col-md-3">
        <center>
          <p>{this.props.moods.mood}</p>
          <FontAwesome name={icons[this.props.moods.mood]} size='4x'/>
        </center>
      </div>
    )
  }
}

export default MoodPageEntry;