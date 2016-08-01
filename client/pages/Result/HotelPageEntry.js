import React from 'react';

class HotelPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="result text-center col-md-4">
      <div className="row result-panel-left hotel-panel">
       <div onClick={this.props.onClick}>

       <div className="row text-center">
          <h2>{this.props.result.name}</h2>
       </div>

        <div className="row">
          <img className='img-responsive' src={this.props.result.image} />
          <h4 className="text-center">{this.props.result.stars} Stars</h4>
        </div>

        <div className="row">
          <h2 className='price text-center'>Price per night: ${this.props.result.pricePerNight}</h2>
          <h2 className='price text-center'>Total Price: ${this.props.result.total}</h2>
          <a className='btn btn-primary purchase' target= '_blank' href={this.props.result.link}>Purchase</a>
        </div>
        </div>
      </div>
    </div>
    )
  }
}

export default HotelPageEntry;
