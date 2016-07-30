import React from 'react';

class HotelPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <div className='result overflow' onClick={this.props.onClick}>
        <div className='description'>
          <div className='destination'>
          <h2>{this.props.result.name}</h2>
            <div>
              <img className='hotelImg' src={this.props.result.image} />
              <h4>{this.props.result.stars} Stars</h4>
            </div>
            <div>
              <p>{this.props.result.description}</p>
            </div>
          </div>
        </div>
        <h2 className='price'>Price per night: ${this.props.result.pricePerNight}</h2>
        <h2 className='price'>Total Price: ${this.props.result.total}</h2>
        <a className='btn resultBtn' target= '_blank' href={this.props.result.link}>Purchase</a>
        </div>
      </div>
    )
  }
}

export default HotelPageEntry;
