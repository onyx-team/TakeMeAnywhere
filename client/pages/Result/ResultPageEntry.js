import React from 'react';

class ResultPageEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var price = (''+this.props.result.price).split('.');
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
            <img className='destImg' src={this.props.result.airlineImg} />
            <img className='destImg' src={this.props.result.agentImg} />
          </div>
        </div>
        <h2 className='price'>${price}</h2>
        <a className='btn resultBtn' target= '_blank' href={this.props.result.url}>Purchase</a>
        <a className='btn resultBtn' target= '_blank' href={this.props.result.cityLink}>Explore</a>
        </div>
        <p className='price'>${price}</p>
        <a className='btn btn-default' target= '_blank' href={this.props.result.url}>TakeMeAway!</a>
        <a className='btn btn-default' target= '_blank' href={this.props.result.cityLink}>Check out attractions!</a>
      </div>
    )
  }
}

export default ResultPageEntry;
