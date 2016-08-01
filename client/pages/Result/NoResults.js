import React from 'react';

class NoResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.exists===false){
      return (
        <div className='row'>
          <h1 className='white text-center'>No flights match your criteria so far...</h1>
        </div>
      )
    }else{
      return false;
    }
  }
}

export default NoResult;