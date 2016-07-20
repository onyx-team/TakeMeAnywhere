import React, { Component } from 'react';
import { connect } from 'react-redux';


export class MoodDetail extends Component {
  render() {
    console.log("Renderinig mood_Detail", this.props.activeMood);
    return (
      <div>
        <h3>Details For: </h3>
        <div></div>
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    activeMood: state.activeMood
  }
}

export default connect(mapStateToProps)(MoodDetail);