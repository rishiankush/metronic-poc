import { useState } from 'react';
import { Header } from '../components/common/header';
import { Sidebar } from '../components/common/sidebar';
import { Outlet } from 'react-router-dom';
import '../styles/defaultLayout.css';

export function DefaultLayout() {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  return (
    <div className='h-screen'>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className='w-full h-[90vh] flex overflow-y-hidden'>
        {showSidebar && <Sidebar />}
        <div className='grow overflow-y-scroll bg-[#F5f7fa]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
