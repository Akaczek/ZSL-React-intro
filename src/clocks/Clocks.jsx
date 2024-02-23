import './Clocks.css';

const Clocks = () => {
  return (
    <div className='clocks'>
      <div className='clocks__single-clock-wrapper'>
        <div className='clocks__single-clock'>
          <div className='clock-hand'>
            <div className='black-part'></div>
            <div className='white-part'></div>
          </div>
        </div>
        <h3 className='timezone-name'>Warszawa</h3>
      </div>
    </div>
  );
};

export default Clocks;
