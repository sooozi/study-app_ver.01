import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const PomoBoardWrap = styled.div `
  background: #fff;
  padding: 1.2rem 1rem;
  border-radius: 1.5rem;
`;

const TimerWrap = styled.div `
  background: #fff;
  padding: 1.2rem 1rem;
  border-radius: 1.5rem;
`;



function PomoBoard() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;
    
        if (isActive) {
          interval = setInterval(() => {
            if (seconds === 0) {
              if (minutes === 0) {
                clearInterval(interval);
                setIsActive(false);
              } else {
                setMinutes(minutes - 1);
                setSeconds(59);
              }
            } else {
              setSeconds(seconds - 1);
            }
          }, 1000);
        } else {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [isActive, minutes, seconds]);

      const startTimer = () => {
        setIsActive(true);
      };
    
      const pauseTimer = () => {
        setIsActive(false);
      };
    
      const resetTimer = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
      };

    return (
        <PomoBoardWrap>
            <TimerWrap>
            <div>
                <span>{String(minutes).padStart(2, '0')}:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </div>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            </TimerWrap>
        </PomoBoardWrap>
    );
}

export default PomoBoard;