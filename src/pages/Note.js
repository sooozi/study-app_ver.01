import React from 'react';
import styled from "styled-components";
import NotesAdd from '../components/NotesAdd';
import NotesBoard from '../components/NotesBoard';
import { Title } from '../components/Title';

const NoteContainer = styled.div `
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    height: 85%;
    height: calc(100% - 110px);
    overflow: hidden;
    @media only screen and (max-device-width : 767px) {
      flex-wrap: wrap;
      overflow-y: auto;
      padding: 0 0.25rem;
      height: calc(100% - 90px);
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