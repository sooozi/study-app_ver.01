/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
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
  // 타이머 상태를 관리하는 상태 변수들을 선언합니다.
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);
  
  // 타이머 로직을 다루는 useEffect를 작성합니다.
  useEffect(() => {

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (isActive && (minutes > 0 || seconds > 0)) {
          if (seconds > 0) {
            setSeconds((prevSeconds) => prevSeconds - 1);
          } else if (minutes > 0) {
            setMinutes((prevMinutes) => Math.max(prevMinutes - 1, 0));
            setSeconds(59);
          }
        } else {
          clearInterval(intervalRef.current);
          setIsActive(false);
        }
      }, 1000);
    };
  
    // isActive와 시간이 0보다 큰 경우에만 타이머를 시작합니다.
    if (isActive && (minutes > 0 || seconds > 0)) {
      startInterval();
    } else {
      clearInterval(intervalRef.current);
    }
  
    // 컴포넌트 언마운트 시에 clearInterval을 호출하여 메모리 누수를 방지합니다.
    return () => clearInterval(intervalRef.current);
  }, [isActive, minutes, seconds]);

  useEffect(() => {
    setMinutes(Math.max(initialMinutes, 0));
  }, [isActive, initialMinutes]);
  
  const startTimer = () => {
    setIsActive(true);
  };
  
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    
  };

  // 초기 시간 설정 및 초기 시간이 변경될 때 타이머를 리셋합니다.
  useEffect(() => {
    resetTimer(initialMinutes);
  }, [initialMinutes]);
  
  
  // 타이머를 리셋하는 함수를 정의합니다.
  const resetTimer = (newInitialMinutes) => {
    setIsActive(false);
    setMinutes(newInitialMinutes);
    setSeconds(0);
  };
  
  
  return (
    <PomoBoardWrap>
      <InnerTopTit>Pomodoro</InnerTopTit>
      <TimerWrap>
        <span>{String(Math.max(minutes, 0)).padStart(2, '0')}:</span>
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