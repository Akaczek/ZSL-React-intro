import SingleClock from './SingleClock/SingleClock';
import './Clocks.css';

const timezones = [
  {
    timezoneName: 'Warszawa',
    timezone: 1,
  },
  {
    timezoneName: 'Londyn',
    timezone: 0,
  },
  {
    timezoneName: 'Tokio',
    timezone: 9,
  },
  {
    timezoneName: 'Nowy Jork',
    timezone: 6,
  },
];

const Clocks = () => {
  return (
    <div className='clocks'>
      {timezones.map(({ timezoneName, timezone }) => (
        <SingleClock
          key={timezoneName}
          timezoneName={timezoneName}
          timezone={timezone}
        />
      ))}
    </div>
  );
};

export default Clocks;
