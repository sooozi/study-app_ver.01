import React from 'react';
import styled from "styled-components";
import NotesAdd from '../components/NotesAdd';
import NotesBoard from '../components/NotesBoard';
import { Title } from '../components/Title';

const NoteContainer = styled.div `
    box-sizing: border-box; /* 박스 모델의 영향을 고려하여 box-sizing 설정 */
    display: flex;
    gap: 1rem;
    height: 85%;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        flex-wrap: wrap;
    }
`;


function Note() {
  return (
    <>
      <Title titleText="Let's" gradTitleText="Notes" iconBox="✏️" subTitleText="Great ideas start with notes and scribbles!" />
      <NoteContainer>
        <NotesAdd />
        <NotesBoard />
      </NoteContainer>
    </>
  );
}
  
  export default Note;