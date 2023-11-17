import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/headerIcons/logo.svg';
import notification from '../../assets/headerIcons/notification.svg';
import magnifier from '../../assets/headerIcons/magnifier.svg';
import Avatar from '../../assets/headerIcons/Avatar.svg';
import '../../styles/defaultLayout.css';

export function Header(props: any) {
  return (
    <div className='header'>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => props.setShowSidebar(!props.showSidebar)}
          className='block sm:hidden'
        >
          <FontAwesomeIcon icon={faBars} className='p-2 border rounded-md' />
        </button>

        <img src={logo} alt='Metronic Logo' className='h-fit' />
      </div>

      <div className='flex gap-2.5'>
        <img src={notification} alt='notification icon' className='px-2.5' />
        <img src={magnifier} alt='search icon' className='px-2.5' />
        <div className='profile-dropdown'>
          <button className='px-2.5 flex items-center gap-2 dropbtn'>
            <img src={Avatar} alt='Profile icon' />
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className='dropdown-content rounded-md bg-slate-100'>
            <NavLink to={'/signUp'}>Sign up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
