import { Header } from '../components/common/header';
import { Sidebar } from '../components/common/sidebar';
import { Outlet } from 'react-router-dom';
import '../styles/defaultLayout.css';

export function DefaultLayout() {
  return (
    <div className='h-screen'>
      <Header />
      <div className='w-full h-[90vh] flex overflow-y-hidden'>
        <Sidebar />
        <div className='grow overflow-y-scroll bg-[#F5f7fa]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
