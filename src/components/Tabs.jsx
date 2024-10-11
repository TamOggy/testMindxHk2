import React from 'react';
import './component.css'

const Tabs = ({ currentTab, setTab }) => {
  return (
    <div className="tabs">
      <button
        className={currentTab === 'all' ? 'active' : ''}
        onClick={() => setTab('all')}
      >
        All
      </button>
      <button
        className={currentTab === 'active' ? 'active' : ''}
        onClick={() => setTab('active')}
      >
        Active
      </button>
      <button
        className={currentTab === 'completed' ? 'active' : ''}
        onClick={() => setTab('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Tabs;