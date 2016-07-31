import React from 'react';

class FeaturePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div className="featured row">
        <div>
          <h1 className="headline">Featured City: {this.props.city}</h1>
          <img className="img-responsive" src={this.props.img} />
          <p className="description">{this.props.description}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default FeaturePage;
