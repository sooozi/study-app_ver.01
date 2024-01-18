import React, { useState } from 'react';
import styled from "styled-components";
import PomoBoard from '../components/PomoBoard';
import PomoNav from '../components/PomoNav';
import { Title } from '../components/Title';

const InnnerContainer = styled.div `
    box-sizing: border-box; /* 박스 모델의 영향을 고려하여 box-sizing 설정 */
    display: flex;
    gap: 1rem;
    height: 100%;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        flex-wrap: wrap;
        overflow-y: auto;
        padding: 0 0.25rem 1rem 0.25rem;
        height: calc(100% - 90px);
    }
`;

function Pomodoro() {
  const [newMinutes, setPomoMinutes] = useState(25);

  const handleSetMinutes = (newMinutes) => {
    setPomoMinutes(newMinutes);
  };

    return (
      <>
        <Title titleText="Let's" gradTitleText="Pomodoro" iconBox="⏰" subTitleText="Change your day, one Pomodoro at a time!" />
        <InnnerContainer>
          <PomoNav onSetMinutes={handleSetMinutes} />
          <PomoBoard minutes={newMinutes} />
        </InnnerContainer>
      </>
    );
  }
  
  export default Pomodoro;