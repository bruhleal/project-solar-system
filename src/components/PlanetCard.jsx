import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img
          className="teste"
          src={ planetImage.image }
          width={ planetImage.width }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = ({
  planetName: PropTypes.string,
  planetImage: PropTypes.shape({
    image: PropTypes.string,
    width: PropTypes.string,
  }),
}).isRequired;

export default PlanetCard;
