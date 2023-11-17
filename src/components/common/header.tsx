import logo from '../../assets/headerIcons/logo.svg';
import notification from '../../assets/headerIcons/notification.svg';
import magnifier from '../../assets/headerIcons/magnifier.svg';
import Avatar from '../../assets/headerIcons/Avatar.svg';
import '../../styles/defaultLayout.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Header(props: any) {
  return (
    <div className='header'>
      <div className='flex items-center gap-3'>
        <button onClick={() => props.setShowSidebar(!props.showSidebar)} className='block sm:hidden'>
          <FontAwesomeIcon icon={faBars} className='p-2 border rounded-md' />
        </button>

        <img src={logo} alt='Metronic Logo' className='h-fit' />
      </div>

      <div className='flex gap-2.5'>
        <img src={notification} alt='notification icon' className='px-2.5' />
        <img src={magnifier} alt='search icon' className='px-2.5' />
        <img src={Avatar} alt='Profile icon' className='px-2.5' />
      </div>
    </div>
  );
}
