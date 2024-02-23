import { useState, useEffect } from 'react';

import './SingleClock.css';

// eslint-disable-next-line react/prop-types
const SingleClock = ({ timezoneName }) => {
  const d = new Date();
  const [seconds, setSeconds] = useState(d.getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      const nd = new Date();
      setSeconds(nd.getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='clocks__single-clock-wrapper'>
      <div className='clocks__single-clock'>
        <div
          className='clock-hand'
          style={{
            transform: `rotate(${seconds * 6}deg)`,
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
