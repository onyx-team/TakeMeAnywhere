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
          <p className='destination'>
          {this.props.result.airline}
          <img className='destImg' src={this.props.result.airlineImg} />
          </p>
          <p className='destination'> Agency: {this.props.result.agent}
          <img className='destImg' src={this.props.result.agentImg} />
          </p>
          <p>{this.props.result.city}</p>
        </div>
        <p className='price'>${price}</p>
        <a className='btn btn-default' target= '_blank' href={this.props.result.url}>TakeMeAway!</a>
      </div>
      </div>
    )
  }
}

export default ResultPageEntry;
