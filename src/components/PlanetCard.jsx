import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p>{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = ({
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}).isRequired;

export default PlanetCard;
