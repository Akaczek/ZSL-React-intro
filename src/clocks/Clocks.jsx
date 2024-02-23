import SingleClock from './SingleClock/SingleClock';
import './Clocks.css';

const Clocks = () => {
  return (
    <div className='clocks'>
      <SingleClock timezoneName='Warszawa'/>
    </div>
  );
};

export default Clocks;
