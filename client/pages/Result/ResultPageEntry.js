import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let price = (''+this.props.result.price).split('.');
    if(price[1].length===1){
      price[1] += '0';
    }
    price = price.join('.');

    return (
      <div>
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
