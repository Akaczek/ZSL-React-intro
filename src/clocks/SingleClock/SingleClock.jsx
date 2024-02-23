import { useState, useEffect } from 'react';
import { getCurrentHour } from '../../lib/utils';

import './SingleClock.css';

// eslint-disable-next-line react/prop-types
const SingleClock = ({ timezoneName, timezone }) => {
  const d = new Date();
  const [seconds, setSeconds] = useState(d.getSeconds());
  const [minutes, setMinutes] = useState(d.getMinutes());
  const [hours, setHours] =  useState(getCurrentHour(d, timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      const nd = new Date();
      setSeconds(nd.getSeconds());
      setMinutes(nd.getMinutes());
      setHours(getCurrentHour(nd, timezone));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='clocks__single-clock-wrapper'>
      <div className='clocks__single-clock'>
        <div
          className='seconds-clock-hand'
          style={{
            transform: `rotate(${seconds * 6}deg)`,
          }}
        >
          <div className='black-part'></div>
          <div className='white-part'></div>
        </div>
        <div
          className='minutes-clock-hand'
          style={{
            transform: `rotate(${minutes * 6}deg)`,
          }}
        >
          <div className='black-part'></div>
          <div className='white-part'></div>
        </div>
        <div
          className='hours-clock-hand'
          style={{
            transform: `rotate(${hours * 30}deg)`,
          }}
        >
          <div className='black-part'></div>
          <div className='white-part'></div>
        </div>
      </div>
      <h3 className='timezone-name'>{timezoneName}</h3>
    </div>
  );
};

export default SingleClock;
