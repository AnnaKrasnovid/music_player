import Player from '../Player/Player';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['root']}>
      <main className={styles['main']}>
        <div className={styles['player-page']}>
          <Player />
        </div>
      </main>
    </div>
  );
}

export default App;