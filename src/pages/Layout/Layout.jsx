import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
