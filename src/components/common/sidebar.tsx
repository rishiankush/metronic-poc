import { NavLink } from 'react-router-dom';
import coreRoutes from '../../routes/coreRoutes';
import '../../styles/defaultLayout.css';

export function Sidebar() {
  return (
    <div className='absolute sm:relative sm:block sm:w-1/6 h-full p-8 bg-white'>
      <div className='flex flex-col gap-1'>
        {coreRoutes.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              'sidebar-menuItem ' + (isActive && 'bg-[#EEF6FF] text-[#3E97FF]')
            }
          >
            <img src={item.icon} alt='sidebar-icon' />
            <div>{item.title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
