import { useState } from 'react';

import { getRandomInt } from '../../lib/utils';
import './Target.css';

const Target = () => {
  const MAX_WIDTH = document.getElementById('train-box')?.offsetWidth - 100;
  const MAX_HEIGHT = document.getElementById('train-box')?.offsetHeight - 100;
  const [topShift, setTopShift] = useState(0);
  const [leftShift, setLeftShift] = useState(0);

  return (
    <div 
      className='target' 
      style={{
        top: `${topShift}px`,
        left: `${leftShift}px`,
      }}
      onClick={() => {
        setTopShift(getRandomInt(MAX_HEIGHT));
        setLeftShift(getRandomInt(MAX_WIDTH));
      }}
    >

    </div>
  );
};

export default Target;