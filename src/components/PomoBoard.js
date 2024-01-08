import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const PomoBoardWrap = styled.div `
  background: #fff;
  padding: 1.2rem 1rem;
  border-radius: 1.5rem;
  width: 100%;
`;

const TimerWrap = styled.div `
    background-color: rgba(255, 243, 229, 1);
    padding: 1.2rem 0;
    border-radius: 1.5rem;
    text-align: center;
    font-size: 5rem;
    font-weight: 600;
`;

const InnerTopTit = styled.span `
    display: block;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 1rem;
`;

const BtnWrap = styled.div `
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
`;

const PomoBtn= styled.button `
    width: 100%;
    height: 30px;
    padding: 0 0.5rem;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    background-color: #fff;
    cursor: pointer;
    font-size: 12px;
    font-family: 'Montserrat';
    font-weight: 500;
    letter-spacing: -0.5px;
    color: rgb(57, 32, 5);
    text-align: left;
    transition: all 0.2s ease-in-out;
    &:hover {
        border: 1px solid rgb(255, 175, 88);
        background-color: rgb(255, 175, 88);
        /* color: #fff; */
    }
    &.on {
        border: #ffe0bc;
        background-color: #ffe0bc;
    }
`;

function PomoBoard({ minutes: initialMinutes }) {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      let interval;

      const startInterval = () => {
        interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            } else if (minutes > 0) {
                setMinutes((prevMinutes) => prevMinutes - 1);
                setSeconds(59);
            } else {
                clearInterval(interval);
                setIsActive(false);
            }
        }, 1000);
      };
  
      if (isActive) {
        startInterval();
      } else {
          clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, [isActive, minutes, seconds, initialMinutes]);

    const startTimer = () => {
        setIsActive(true);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(initialMinutes);
        setSeconds(0);
    };

    return (
        <PomoBoardWrap>
            <InnerTopTit>Pomodoro</InnerTopTit>
            <TimerWrap>
                <span>{String(minutes).padStart(2, '0')}:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </TimerWrap>
            <BtnWrap>
                <PomoBtn onClick={startTimer}>🚀 Start</PomoBtn>
                <PomoBtn onClick={pauseTimer}>⛔ Pause</PomoBtn>
                <PomoBtn onClick={resetTimer}>⏱️ Reset</PomoBtn>
            </BtnWrap>
        </PomoBoardWrap>
    );
}

export default PomoBoard;