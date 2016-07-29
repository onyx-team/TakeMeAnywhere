import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='logo row'>
        <h1 className='center-block text-center'><Link to="/">Take Me Anywhere</Link></h1>
      </div>
    )
  }
}

export default Header;

        // <img src='../takeMeAnywhere2.svg' className='logoImg' />