/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import alarmSound from '../sound/alarm.mp3';

const PomoBoardWrap = styled.div `
    background: #fff;
    padding: 1.2rem 1rem;
    border-radius: 1.5rem;
    width: 100%;
`;

const BubbleWrap = styled.div `
    position: relative;
    padding: 10px;
    margin-bottom: 10px;
    background: rgb(255, 175, 88);
    font-size: 1rem;
    line-height: 1rem;
    color: #fff;
    border-radius: 15px;
    display: inline-block;
    font-weight: bold;

    &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 10px;
        border-style: solid;
        border-width: 15px 15px 0;
        border-color: rgb(255, 175, 88) transparent;
        display: block;
        width: 0;
        z-index: 1;
    }
`;

const TimerWrap = styled.div `
    background-color: rgba(255, 243, 229, 1);
    padding: 2rem 0;
    border-radius: 1.5rem;
    text-align: center;
    font-size: 4.5rem;
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
    const [audio] = useState(new Audio(alarmSound));

    //pauseTimer 순서를 변경하니 start > puase > start 문제(pause 클릭 시 분의 숫자가 초기값으로 변경되거나 재 start가 안되는 문제 발생)가 해결 => 순서가 문제였는듯 
    const pauseTimer = () => {
        // 타이머가 활성화된 경우에만 멈추도록 수정
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setIsActive(false);  // 타이머를 멈추고, 현재 상태를 유지
        }
    };

    const playAlarm = () => {
        audio.play();
      };
  
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

    // 초기 시간 설정 및 초기 시간이 변경될 때 타이머를 리셋합니다.
    useEffect(() => {
        resetTimer(initialMinutes);
    }, [initialMinutes]);
  
    const startTimer = () => {
        if (!isActive) {
            setIsActive(true);
    
        // 타이머가 활성화된 경우에만 interval을 시작
        if (minutes > 0 || seconds > 0) {
            if (!intervalRef.current) { // 기존에 설정된 interval이 없을 때만 새로운 interval 설정
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
                        playAlarm();
                    }
                }, 1000);
            } else {
            }
        } else {
            console.log("시간이 0이라 interval을 시작하지 않음");
        }
        } else {
            console.log("이미 타이머가 활성화되어 있음");
        }
    };
    
    // 타이머를 리셋하는 함수를 정의합니다.
    const resetTimer = (newInitialMinutes) => {
        setIsActive(false);
        // 값이 정상적인지 확인
        const newMinutes = newInitialMinutes !== undefined ? newInitialMinutes : initialMinutes;
        setMinutes(newMinutes);
        setSeconds(0);
    };
    
    return (
        <PomoBoardWrap>
            <InnerTopTit>Pomodoro</InnerTopTit>
            <BubbleWrap>Start Pomodoro!</BubbleWrap>
            <TimerWrap>
                <span>{String(Math.max(minutes, 0)).padStart(2, '0')}:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </TimerWrap>
            <BtnWrap>
                <PomoBtn onClick={startTimer}>🚀 Start</PomoBtn>
                <PomoBtn onClick={pauseTimer}>⛔ Pause</PomoBtn>
                <PomoBtn onClick={() => resetTimer()}>⏱️ Reset</PomoBtn>
            </BtnWrap>
        </PomoBoardWrap>
    );
}

export default PomoBoard;