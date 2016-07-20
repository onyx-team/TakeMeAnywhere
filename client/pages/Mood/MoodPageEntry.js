import React from 'react';

class MoodPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var colors = ['red','blue','green','purple','pink', 'yellow'];
    var opacity = Math.random() + 0.2;

    var moodStyles = {
      height: 200,
      background: colors[Math.floor(Math.random() * colors.length)],
       margin: 10 + 'px',
      opacity: opacity,
      cursor: 'pointer'
    }
    return (
      <div
        onClick={(this.props.onMoodClick)}
        style={moodStyles}
        className="col-xs-3">
        {this.props.moods.mood}
      </div>
    )
  }
}

export default MoodPageEntry;