import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let price = (''+this.props.result.price).split('.');
    if(price[1].length===1){
      price[1] += '0';
    }
    price = price.join('.');

    return (
      <div>

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
            <img className='destImg' src={this.props.result.agentImg} />
          </div>


        </div>

        <div className="col-md-5">
          <p>Column 2</p>
        </div>

        <div className="col-md-4">
          <p>Column 2</p>
        </div>
      </div>


       <div className='result overflow' onClick={this.props.onClick}>
        <div className='description'>
          <div className='destination'>
          <h2>{this.props.result.city}</h2>
            <div>
              <h4>Airline: {this.props.result.airline}</h4>
              <img className='destImg' src={this.props.result.airlineImg} />
            </div>
            <div>
              <h4>Honored by: {this.props.result.agent}</h4>
              <img className='destImg' src={this.props.result.agentImg} />
            </div>
          </div>
        </div>
        <h2 className='price'>${price}</h2>
        <a className='btn resultBtn' target= '_blank' href={this.props.result.url}>Purchase</a>
        <a className='btn resultBtn' target= '_blank' href={this.props.result.cityLink}>Explore</a>
        </div>
      </div>
    )
  }
}

export default ResultPageEntry;
