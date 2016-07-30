import React from 'react';
import { Link } from 'react-router';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className='row'>
        <h1 className='logo text-center'><Link to="/">Take Me Anywhere</Link></h1>
      </div>
        <div className='row text-center feature'>
          <h2>What Do You Feel Like Doing Today?</h2>
        </div>
      </div>
    )
  }
}

export default Header;

        // <img src='../takeMeAnywhere2.svg' className='logoImg' />


                  // <h3 class="feature">The world is a book, and those who do not travel read only one page</h3>
