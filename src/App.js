import React from 'react';
import './App.scss';
import RepositoryListing from './features/RepositoryListing';

export const App = () => {
  return (
    <div className="app">
      <header className="app__header grey-color uppercase large-pd">
        Knowit Hjemmeoppgave
      </header>
      <RepositoryListing/>
    </div>
  );
}

export default App;
