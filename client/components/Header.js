import React from 'react';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='logo col-md-12'>
        <img src='../takeMeAnywhere2.svg' className='logoImg' />
        <h1 className='logoText'>Take Me Anywhere</h1>
      </div>
    )
  }
}

export default Header;