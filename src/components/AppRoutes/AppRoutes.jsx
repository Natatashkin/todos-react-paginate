import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


function load(page) {
  return lazy(() => import(`../../pages/${page}`));
}

const Layout = load('Layout');
const HomePage = load('HomePage');
const Dashboard = load('Dashboard');

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
)

export default AppRoutes;