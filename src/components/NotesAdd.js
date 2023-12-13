import React from 'react';
import styled from "styled-components";

const NoteAddInner= styled.div `
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.5rem 1rem;
    border-radius: 1.5rem;
    width: clamp(150px, 14vw, 250px);
`;

const NewNoteTit= styled.input `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    font-weight: bold;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
`;

const NewNoteDesc= styled.textarea `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    min-height: 100px;
    resize: none;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
`;

const AddNewNote= styled.button `
    
`;

function NotesAdd() {
  return (
    <NoteAddInner>
        <NewNoteTit></NewNoteTit>
        <NewNoteDesc></NewNoteDesc>
        <AddNewNote>+ ADD NEW NOTE</AddNewNote>
    </NoteAddInner>
  );
}
  
  export default NotesAdd;