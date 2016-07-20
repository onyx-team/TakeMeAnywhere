import React from 'react';
import MoodDetail from '../../containers/mood_detail.js';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <MoodDetail />
       <div className='result overflow' onClick={this.props.onClick}>

        <div className='description'>
          <img className='destImg' src={this.props.result.img} />
          <p className='destination'>{this.props.result.dest}</p>
          <p>{this.props.result.description}</p>
        </div>
        <p className='price'>{this.props.result.price}</p>
      </div>
      </div>
    )
  }
}

export default ResultPageEntry;