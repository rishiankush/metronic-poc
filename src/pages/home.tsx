import { TimeFilterDropdown } from '../components/home/timeFilter';
import { Stats } from '../components/home/stats';
import { Table } from '../components/home/table';
import '../styles/home.css';

export default function Home() {
  return (
    <div className='home'>
      <TimeFilterDropdown />
      <Stats />
      <div className='overflow-x-scroll'>
        <Table />
      </div>
    </div>
  );
}
