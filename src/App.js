import './App.css';

import Player from './components/Player/Player';

function App() {
  return (
    <div className="root">
      <main className='main'>
        <div className='player-page'>
          <Player />
        </div>
      </main>
    </div>
  );
}

export default App;
