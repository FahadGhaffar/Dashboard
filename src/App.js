import logo from './logo.svg';
import './App.css';
import Routers from './router/Route';
import Layout from './layout/Layout';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <RouterProvider router={Routers} />
    </Layout>
  );
}

export default App;
