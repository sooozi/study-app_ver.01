import React from 'react';
import styled from "styled-components";
import { Title } from '../components/Title';

const NoteContainer = styled.div `
  border: 1px solid red;
`;


function Note() {
  return (
    <>
      <Title titleText="Let's" gradTitleText="Notes" iconBox="✏️" subTitleText="Great ideas start with notes and scribbles!" />
      <NoteContainer>

      </NoteContainer>
    </>
  );
}
  
  export default Note;