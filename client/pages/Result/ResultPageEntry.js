import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <div className='result overflow' onClick={this.props.onClick}>

        <div className='description'>
          <img className='destImg' src={this.props.result.airlineImg} />
          <p className='destination'>{this.props.result.agent}</p>
          <p>{this.props.result.description}</p>
        </div>
        <p className='price'>{this.props.result.price}</p>
      </div>
      </div>
    )
  }
}

export default ResultPageEntry;