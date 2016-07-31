import React from 'react';
import $ from 'jquery';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    $("body").removeClass( "background-image" );
    $("body").addClass( "flat" );
  }

  render() {
    let price = (''+this.props.result.price).split('.');
    if(price[1].length===1){
      price[1] += '0';
    }
    price = price.join('.');

    return (
      <div>



<div className="panel panel-default">
  <div className="panel-heading">{this.props.result.city}</div>
  <div className="panel-body">

     <div className="row">
        <div className="col-md-3 result-panel-left text-center">
          <p>Column 1</p>
          <div className="row ">
            <div className="col-md-4">Origin Airport</div>
            <div className="col-md-4">Airplane Glyph</div>
            <div className="col-md-4">{this.props.result.destinationCode}</div>
          </div>

          <div className="row">
            <div className="col-md-4">{this.props.result.arrivalTime}</div>
            <div className="col-md-4"></div>
            <div className="col-md-4">{this.props.result.departureTime}</div>
          </div>

          <div className="row">
            <p>Flight Number:{this.props.result.flightNumber}</p>
          </div>

          <div className="row result-panel-left-airline">
            <img className='destImg' src={this.props.result.airlineImg} />
          </div>


        </div>

        <div className="col-md-5">
          <h2 className='price'>${price}</h2>
        </div>

        <div className="col-md-4">
          <a className='btn resultBtn' target= '_blank' href={this.props.result.url}>Purchase</a>
          <a className='btn resultBtn' target= '_blank' href={this.props.result.cityLink}>Explore</a>
        </div>
      </div>

  </div>
</div>



      </div>
    )
  }
}

export default ResultPageEntry;
