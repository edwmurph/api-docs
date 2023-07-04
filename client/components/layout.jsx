import { Outlet } from 'react-router-dom';
import NavBar from './nav-bar.jsx';

export default function Layout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  );
}
