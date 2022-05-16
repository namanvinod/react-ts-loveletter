import React, { Fragment } from 'react';
import CurrentOpenGames from '../CurrentOpenGames/CurrentOpenGames';

import './Dashboard.css';

const Dashboard = () => {
  const handleJoinGame = () => {};

  return (
    <Fragment>
      <div className="dashboard-container">
        <button>Create New Game</button>
        {/* <button onClick={handleJoinGame}>Join A Game</button> */}
        <CurrentOpenGames />
      </div>
    </Fragment>
  );
};

export default Dashboard;
