import { useState, useEffect } from 'react';

import { getRandomInt } from '../../lib/utils';
import './Target.css';

const Target = () => {
  const [maxWidth, setMaxWidth] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [topShift, setTopShift] = useState(0);
  const [leftShift, setLeftShift] = useState(0);

  useEffect(() => {
    setMaxWidth(document.getElementById('train-box')?.offsetWidth - 100);
    setMaxHeight(document.getElementById('train-box')?.offsetHeight - 100);
    console.log('width', document.getElementById('train-box')?.offsetWidth - 100)
    console.log('height', document.getElementById('train-box')?.offsetHeight - 100)
  }, []);

  return (
    <div 
      className='target' 
      style={{
        top: `${topShift}px`,
        left: `${leftShift}px`,
      }}
      onClick={() => {
        setTopShift(getRandomInt(maxHeight));
        setLeftShift(getRandomInt(maxWidth));
      }}
    >

    </div>
  );
};

export default Target;