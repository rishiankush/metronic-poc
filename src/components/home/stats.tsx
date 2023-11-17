import '../../styles/home.css';
import disconnectIcon from '../../assets/homeIcons/disconnectIcon.svg';
import magnifierIcon from '../../assets/homeIcons/magnifierIcon.svg';
import informationIcon from '../../assets/homeIcons/information-3.svg';
import trashIcon from '../../assets/homeIcons/trashIcon.svg';

const data = [
  {
    number: 252,
    text: 'Links Scraped',
    icon: disconnectIcon,
    color: '#3E97FF',
  },
  {
    number: 252,
    text: 'Links Manually Checked',
    icon: magnifierIcon,
    color: '#7239EA',
  },
  {
    number: 252,
    text: 'Link Violations',
    icon: informationIcon,
    color: '#F6C000',
  },
  { number: 252, text: 'Links Removed', icon: trashIcon, color: '#F1416C' },
];

export function Stats() {
  return (
    <div className='stats-list'>
      {data.map((item, index) => (
        <div key={index} className='stats-box' style={{borderColor: item.color}}>
          <div className='flex justify-between'>
            <div className='stats-number'>{item.number}</div>
            <img src={item.icon} alt='Stat Icon' className='p-2 rounded' />
          </div>
          <div className='stats-description'>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
