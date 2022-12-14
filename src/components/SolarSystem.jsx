import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const allPlanets = planets.map(({ name, image, width }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ { image, width } }
      />));
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {allPlanets}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
