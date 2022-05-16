import React, { Fragment } from 'react';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <Fragment>
      <div className="dashboard-container">
        <button>Create New Game</button>
        <button>Join A Game</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
