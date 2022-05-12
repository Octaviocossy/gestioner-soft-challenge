import { BrowserRouter as BRrouter, Routes, Route } from 'react-router-dom';

import List from './screens/List';
import Auth from './screens/Auth';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <BRrouter>
      <Routes>
        <Route element={<Auth />} path="/" />
        <Route
          element={
            <PrivateRoute>
              <List />
            </PrivateRoute>
          }
          path="/list"
        />
      </Routes>
    </BRrouter>
  );
};

export default App;
