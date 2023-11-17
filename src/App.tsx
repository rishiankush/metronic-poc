import { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/auth/signUp';
import { DefaultLayout } from './layout/defaultLayout';
import coreRoutes from './routes/coreRoutes';
import Loader from './components/common/loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path='/signUp' element={<SignUp />} />

      <Route element={<DefaultLayout />}>
        {coreRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
