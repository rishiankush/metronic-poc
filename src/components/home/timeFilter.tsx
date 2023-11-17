import { SetStateAction, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/home.css';

const filters = ['Today', 'Yesterday', 'This Week', 'This Month', 'SelectDate'];

export function TimeFilterDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setFilter] = useState('Today');

  const changeFilter = (value: SetStateAction<string>) => {
    setFilter(value), setShowDropdown(false);
  };

  return (
    <div className='flex self-end items-center gap-2.5'>
      <p className='filter-text'>Sort by</p>
      <div>
        <div className='relative inline-block text-left'>
          <button
            className='dropdown-button'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {filter}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {showDropdown && (
            <div
              className='dropdown'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
            >
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    changeFilter(item);
                  }}
                  className='w-full block px-4 py-2.5 rounded-md text-sm font-semibold leading-[14px] text-start text-[color:var(--gray-gray-700,#5E6278)] hover:bg-[#EEF6FF] hover:text-[#3E97FF]'
                  role='menuitem'
                  id='menu-item-0'
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
