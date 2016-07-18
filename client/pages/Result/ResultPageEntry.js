import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS FOR RESULT PAGE ENTRY", this.props);

    var resultStyle = {
      backgroundColor: 'lightgrey',
      margin: '10px',
      border: '1px solid grey'
    }
    return (
      <div style={resultStyle}>
      </div>
    )
  }
}

export default ResultPageEntry;