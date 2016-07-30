import React from 'react';
const FontAwesome = require('react-fontawesome');

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
      <div>
        <fieldset className="form-group row">
          <select className="center-block form-control">
            <option disabled selected>What do you wanna do today...</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </fieldset>
      </div>
    )
  }
}

// onClick={(this.props.onMoodClick)}
//         className="mood col-md-3">
//         <center>
//           <p>{this.props.moods.mood}</p>
//           <FontAwesome name={icons[this.props.moods.mood]} size='4x'/>
//         </center>



export default MoodPageEntry;