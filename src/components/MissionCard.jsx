import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Country from '../images/Vector-1.png';
import Destino from '../images/Vector-2.png';
import Ano from '../images/Vector.png';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missionCard" data-testid="mission-card">
        <p className="nome" data-testid="mission-name">
          {name}
        </p>
        <section className="info">
          <div className="anoPais">
            <img src={ Ano } alt="" />
            <p className="ano" data-testid="mission-year">
              {year}
            </p>
            <img src={ Destino } alt="" />
            <p className="pais" data-testid="mission-country">
              {country}
            </p>
          </div>
          <div className="destino">
            <img src={ Country } alt="" />
            <p className="destin" data-testid="mission-destination">
              {destination}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = ({
  name: PropTypes.string,
  year: PropTypes.number,
  counrty: PropTypes.string,
  destination: PropTypes.string,
}).isRequired;

export default MissionCard;
