import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className='result overflow' onClick={this.props.onClick.bind(this)}>
        <div className='description'>
          <img className='destImg' src={this.props.result.img} />
          <p className='destination'>{this.props.result.dest}</p>
          <p>{this.props.result.description}</p>
        </div>
        <p className='price'>{this.props.result.price}</p>
      </div>
    )
  }
}

export default ResultPageEntry;