import './App.scss';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

function load(page) {
  return lazy(() => import(`./pages/${page}`));
}

const Layout = load('Layout');
const HomePage = load('HomePage');
const Dashboard = load('Dashboard');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
