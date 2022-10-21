import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const allPlanets = planets.map(({ name, image }) => (
      <PlanetCard
        key={ name }
        planetName={ name }
        planetImage={ image }
      />));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {allPlanets}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
