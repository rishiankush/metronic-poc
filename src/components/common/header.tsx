import logo from '../../assets/headerIcons/logo.svg';
import notification from '../../assets/headerIcons/notification.svg';
import magnifier from '../../assets/headerIcons/magnifier.svg';
import Avatar from '../../assets/headerIcons/Avatar.svg';
import '../../styles/defaultLayout.css';

export function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='Metronic Logo' className='h-fit' />
      <div className='flex gap-2.5'>
        <img src={notification} alt="notification icon" className='px-2.5' />
        <img src={magnifier} alt="search icon" className='px-2.5' />
        <img src={Avatar} alt="Profile icon" className='px-2.5' />
      </div>
    </div>
  );
}
