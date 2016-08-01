import React from 'react';
import Radium from 'radium';
const FontAwesome = require('react-fontawesome');

class FeaturePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipped: false
    }

    this.divStyle = {
      backgroundImage: 'url(' + this.props.img + ')',
      backgroundSize: 'cover'
    };
  }

  render() {
    console.log(this.props);
    return (
    <div>

    <div className="row">
      <div className="featured row" style={this.divStyle}>
        <div className="feature-right-panel col-md-5 pull-right">
          <h1 className="headline" >Featured City: {this.props.city}</h1>
          <p className="description ">{this.props.description}</p>
        </div>
      </div>
    </div>

    <div className="row text-center">
      <h1 className="bolder">Your Guide to the City</h1>
    </div>

    <div className="row text-center">

        <a className="btn btn-primary" data-toggle="collapse" data-target="#collapseRestaurants" aria-expanded="false" aria-controls="collapseRestaurants">Restaurants</a>
        <a className="btn btn-primary" data-toggle="collapse" data-target="#collapseBars" aria-expanded="false" aria-controls="collapseBars">Bars</a>
        <a className="btn btn-primary" data-toggle="collapse" data-target="#collapseAttractions" aria-expanded="false" aria-controls="collapseAttractions">Tourist Attractions</a>
    </div>

    <div className="col-md-4">
        <div className="collapse result-panel-left padding" id="collapseRestaurants">
          <div className="row text-center">
            <FontAwesome name='cutlery' size='3x'/>
          </div>
          <div className="row text-center">
            {this.props.restaurants.sort(function(a,b){
              return a.rating- b.rating
            }).map((elem, i) =>
              <div className="row">
                <h3>{elem.name}</h3>
                <p>{elem.location.address1}, {elem.location.city}, {elem.location.state}, {elem.location.zip_code}</p>
                <p>Rating: {elem.rating} | Price Range: {elem.price} </p>
              </div>

            )}
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="collapse result-panel-left padding" id="collapseBars">
          <div className="row text-center">
            <FontAwesome name='glass' size='3x'/>
          </div>
          <div className="row text-center">
            {this.props.bars.sort(function(a,b){
              return a.rating- b.rating
            }).map((elem, i) =>
              <div className="row">
                <h3>{elem.name}</h3>
                <p>{elem.location.address1}, {elem.location.city}, {elem.location.state}, {elem.location.zip_code}</p>
                <p>Rating: {elem.rating} | Price Range: {elem.price} </p>
              </div>
            )}
            </div>
        </div>
    </div>

    <div className="col-md-4">
         <div className="collapse result-panel-left padding" id="collapseAttractions">
          <div className="row text-center">
            <FontAwesome name='map-marker' size='3x'/>
          </div>
          <div className="row text-center">
            {this.props.attractions.sort(function(a,b){
              return a.rating- b.rating
            }).map((elem, i) =>
              <div className="row">
                <h3>{elem.name}</h3>
                <p>{elem.location.address1}, {elem.location.city}, {elem.location.state}, {elem.location.zip_code}</p>
                <p>Rating: {elem.rating} | Price Range: {elem.price} </p>
              </div>
            )}
            </div>
        </div>
    </div>



    </div>
    )
  }
}


// Radium Styles
var styles = {
  base: {

  }
};

export default Radium(FeaturePage);