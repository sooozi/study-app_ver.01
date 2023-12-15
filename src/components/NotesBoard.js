import React from 'react';
import styled from "styled-components";
import NotesCont from './NotesCont';

const NoteAddWrap= styled.div `
  background: #fff;
  padding: 1.5rem 1rem;
  border-radius: 1.5rem;
  width: 100%;
`;


function NotesBoard() {
  return (
    <NoteAddWrap>
      <NotesCont />
    </NoteAddWrap>
  );
}
  
  export default NotesBoard;