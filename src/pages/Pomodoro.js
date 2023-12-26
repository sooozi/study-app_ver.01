import React from 'react';
import PomoBoard from '../components/PomoBoard';
import { Title } from '../components/Title';

function Pomodoro() {
    return (
      <>
        <Title titleText="Let's" gradTitleText="Pomodoro" iconBox="⏰" subTitleText="Change your day, one Pomodoro at a time!" />
        <PomoBoard />
      </>
    );
  }
  
  export default Pomodoro;