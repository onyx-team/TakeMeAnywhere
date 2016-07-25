import React from 'react';


class NoResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.exists===false){
      return (
        <div className='col-md-12'>
          <h1 className='logoText'>Sorry, there were no flights within your constraints!</h1>
        </div>
      )
    }else{
      return false;
    }
  }
}

export default NoResult;