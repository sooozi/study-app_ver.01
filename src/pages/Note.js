import React from 'react';
import styled from "styled-components";
import NotesAdd from '../components/NotesAdd';
import NotesBoard from '../components/NotesBoard';
import { Title } from '../components/Title';

const NoteContainer = styled.div `
  min-height: 100vh; /* 100% 대신에 viewport 높이를 사용 */
  box-sizing: border-box; /* 박스 모델의 영향을 고려하여 box-sizing 설정 */
  display: flex;
  gap: 1rem;
`;


function Note() {
  return (
    <>
      <Title titleText="Let's" gradTitleText="Notes" iconBox="✏️" subTitleText="Great ideas start with notes and scribbles!" />
      <NoteContainer>
        <NotesAdd>

        </NotesAdd>
        <NotesBoard>

        </NotesBoard>
      </NoteContainer>
    </>
  );
}
  
  export default Note;