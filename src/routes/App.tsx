import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from '../store/index';

import Layout from '../components/Layout/Layout';
import PlayList from '../pages/PlayList';

function App() {
  return (
    <Provider store={store}>
      <div className='root'>
        <Routes>         
          <Route path='/' element={<Layout />}>
            <Route index element={<PlayList />} />           
            <Route path='list/:id' element={<PlayList />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;