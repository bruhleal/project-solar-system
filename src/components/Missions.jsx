import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const allMissionsCard = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />));
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <ul className="boxMissions">
          {allMissionsCard}
        </ul>
      </div>
    );
  }
}

export default Missions;
