import React from 'react';
import styled from "styled-components";
import { Title } from '../components/Title';
import TodoBoard from '../components/TodoBoard';
import TodoNav from '../components/TodoNav';

const InnnerContainer = styled.div `
  box-sizing: border-box; /* 박스 모델의 영향을 고려하여 box-sizing 설정 */
  display: flex;
  gap: 1rem;
  height: 85%;
`;

function ToDoList() {
    return (
      <>
        <Title titleText="Let's" gradTitleText="ToDoList" iconBox="📝" subTitleText="Take notes and never forget!" />
        <InnnerContainer>
          <TodoNav />
          <TodoBoard />
        </InnnerContainer>
      </>
    );
  }
  
  export default ToDoList;