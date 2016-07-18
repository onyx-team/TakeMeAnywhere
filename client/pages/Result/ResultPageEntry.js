import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS FOR RESULT PAGE ENTRY", this.props);

    return (
       <div className='result'>
        <div className='destImgContainer'>
         <img className='destImg' src={this.props.result.img} />
        </div>
        <p className='floatLeft'>{this.props.result.dest}</p>
        <div className='floatRight'>{this.props.result.price}</div>
      </div>
    )
  }
}

export default ResultPageEntry;