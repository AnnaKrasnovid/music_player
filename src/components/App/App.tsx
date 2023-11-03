import { Provider } from 'react-redux';
import store from '../../store/index';

import PlayList from '../../pages/PlayList';

import styles from './App.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={styles['root']}>
        <PlayList />
      </div>
    </Provider>
  );
};

export default App;