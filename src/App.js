import React from 'react';
import logo from './logo.svg';
import ProfileCard from './ProfileCard'
import './App.css';
import roster from './roster'

function App() {
  const players = roster.slice().sort((a,b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1
    : 1
  )
  return (
    <div className="App">
      <header className="App-header">
        <p>Overwatch Bronze League</p>
      </header>
      {players.map(p =>
        <ProfileCard
          name={p.name}
          rolesDisplay={p.roles.join(' > ')}
          localTimeDisplay={"8:20 PM"}
          battleTagsDisplay={"Flightless#11264"}
          heroes={p.heroes}
        />
      )}
    </div>
  );
}

export default App;
