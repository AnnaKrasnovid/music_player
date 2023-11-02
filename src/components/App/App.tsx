import Player from '../Player/Player';

import Layout from '../Layout/Layout';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['root']}>
      <Layout>
        <div className={styles['player-page']}>
          <Player />
        </div>
      </Layout>
    </div>
  );
};

export default App;