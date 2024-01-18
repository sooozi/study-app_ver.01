import React from 'react';
import styled from "styled-components";
import NotesCont from './NotesCont';

const NoteAddWrap= styled.div `
  background: #fff;
  padding: 1.5rem 1rem;
  border-radius: 1.5rem;
  width: 100%;
  /* / 스마트폰 모바일(가로) / */
  @media only screen and (max-device-width : 767px) {
    width: -webkit-fill-available;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;


function NotesBoard() {
  return (
    <NoteAddWrap>
      <NotesCont />
    </NoteAddWrap>
  );
}
  
  export default NotesBoard;