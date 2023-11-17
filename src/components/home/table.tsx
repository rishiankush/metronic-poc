import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import profileCircleIcon from '../../assets/homeIcons/profile-circle.svg';
import exportIcon from '../../assets/homeIcons/exportIcon.svg';
import '../../styles/home.css';
import { tableData } from '../../mockData/tableData';

const pages = [1, 2, 3, 4, 5];

export function Table() {
  return (
    <div className='w-fit sm:w-full p-8 rounded-2xl flex flex-col gap-8 bg-white'>
      <section className='flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between'>
        <div className='w-44 p-3 rounded-md bg-[#f9f9f9] flex items-center gap-4'>
          <img src={profileCircleIcon} />
          <p className='text-[color:var(--gray-gray-600,#7E8299)] text-xs font-semibold leading-3'>
            Search
          </p>
        </div>
        <div className='flex gap-5'>
          <div className='flex'>
            <img src={exportIcon} />
          </div>
          <div className='p-3 rounded-md bg-[#f9f9f9] flex items-center gap-12 text-xs font-semibold leading-3 text-[color:var(--gray-gray-500,#A1A5B7)]'>
            <p>Today</p> <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className='p-3 rounded-md bg-[#f9f9f9]  flex items-center gap-12 text-xs font-semibold leading-3 text-[color:var(--gray-gray-500,#A1A5B7)]'>
            <p>Status</p> <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </section>
      <table className='w-full table-auto'>
        <thead>
          <tr className=''>
            <th className='table-heading'>
              <div className='flex items-center justify-start gap-5'>
                <div className='w-8 h-8 rounded-md bg-[#F1F1F2]'></div>ID
              </div>
            </th>
            <th className='table-heading text-center'>Date Removed</th>
            <th className='table-heading text-center'>Link</th>
            <th className='table-heading text-center'>Source</th>
            <th className='table-heading text-end'>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className='row'>
              <td className='table-row-data '>
                <div className='flex items-center gap-5 text-sm font-semibold leading-[14px] text-[color:var(--white-dark-dark,#181C32)]'>
                  <div className='w-8 h-8 rounded-md bg-[#F1F1F2]'></div>
                  {item.id}
                </div>
              </td>
              <td className='table-row-data text-sm font-semibold leading-[14px] text-[color:var(--gray-gray-600,#7E8299)]'>
                {item.dateRemoved}
              </td>
              <td className='table-row-data text-sm font-semibold leading-[14px] text-[color:var(--primary-primary,#3E97FF)]'>
                {item.link}
              </td>
              <td className='table-row-data text-sm font-semibold leading-[14px] text-[color:var(--gray-gray-600,#7E8299)]'>
                {item.source}
              </td>
              <td className='table-row-data'>
                <div className='flex justify-end'>
                  <div
                    className={`w-fit p-2 rounded-md text-end text-xs not-italic font-semibold leading-3 ${
                      index % 2 === 0
                        ? 'bg-[#E8FFF3] text-[#50CD89]'
                        : 'bg-[#FFF5F8] text-[#D9214E]'
                    }`}
                  >
                    {item.action}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div className='w-fit p-2.5 rounded-md bg-[#f9f9f9] text-[10px] font-semibold leading-[10px] tracking-[-0.3px] text-[color:var(--gray-gray-500,#A1A5B7)]'>
          Total Results: 455
        </div>
        <div className='flex items-center gap-4'>
          <FontAwesomeIcon icon={faChevronLeft} />
          {pages.map((item) => (
            <>
              <div
                className={`w-8 h-full rounded-md flex items-center justify-center text-lg font-semibold leading-[18px] tracking-[-0.18px] ${
                  item === 1
                    ? 'bg-[#3E97FF] text-white'
                    : 'bg-white text-[#7E8299]'
                }`}
              >
                {item}
              </div>
            </>
          ))}
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}
