import React from 'react';
import $ from 'jquery';
import moment from 'moment';
const FontAwesome = require('react-fontawesome');

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  formatTime(time){
    return moment(time).format("h:mm A");
  }

  render() {
    let price = (''+this.props.result.price).split('.');
    if(price[1].length===1){
      price[1] += '0';
    }
    price = price.join('.');

    return (
      <div>



<div className="">
  <div>
     <div className="result col-xs-6 col-md-3">
        <div className="row result-panel-left text-center">

         <div className="row airports">
            Destination: {this.props.result.city}
         </div>

          <div className="row airports">
            <div className="col-md-4 airport-code">{this.props.result.originCode}</div>
            <div className="col-md-4">
              <FontAwesome className="rotate-45" name='plane' size='3x'/>
            </div>
            <div className="col-md-4 airport-code">{this.props.result.destinationCode}</div>
          </div>

          <div className="row">
            <div className="col-md-4">{this.formatTime(this.props.result.arrivalTime)}</div>
            <div className="col-md-4"></div>
            <div className="col-md-4">{this.formatTime(this.props.result.departureTime)}</div>
          </div>

          <div className="row">
            <p>Flight Number: {this.props.result.flightNumber}</p>
          </div>

          <div className="row result-panel-left-airline">
            <img className='destImg' src={this.props.result.airlineImg} />
          </div>

          <div className="row">
            <h2 className='price'>${price}</h2>
          </div>

          <div className="row">
            <a className='btn btn-primary' target= '_blank' href={this.props.result.url}>Purchase</a>
            <a className='btn btn-primary' target= '_blank' href={this.props.result.cityLink}>Explore</a>
          </div>


        </div>




      </div>

  </div>
</div>



      </div>
    )
  }
}

export default ResultPageEntry;

// <div>{this.props.result.city}</div>

