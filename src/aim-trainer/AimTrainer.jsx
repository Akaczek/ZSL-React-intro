import Target from './Target/Target';
import './AimTrainer.css';

const AimTrainer = () => {
  return (
    <div className='aim-trainer'>
      <h1 className='aim-trainer__title'>Aim Trainer</h1>
      <div
        id='train-box'
        className='aim-trainer__train-box'
      >
        <Target />
      </div>
    </div>
  );
}

export default AimTrainer;