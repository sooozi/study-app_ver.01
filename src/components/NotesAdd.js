import { default as React, useState } from 'react';
import styled from "styled-components";

const NoteAddInner= styled.div `
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.5rem 1rem;
    border-radius: 1.5rem;
    width: clamp(150px, 14vw, 250px);
`;

const NoteInnerTit = styled.span `
    display: block;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 1rem;
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
    border-radius: 5px;
    height: 33px;
    overflow: hidden;
    border: 0;
    background-color: rgb(255, 175, 88);
    cursor: pointer;
    font-size: 15px;
    font-family: 'Montserrat';
    font-weight: 300;
    letter-spacing: -0.5px;
    color: #fff;
    &:hover {
        background-color: rgb(255, 65, 65);
    }
`;

function NotesAdd() {

    // 입력값 받아오기
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      console.log(event.target.value);
    };
    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
        console.log(event.target.value);
    };

    

  
  return (
    <NoteAddInner>
        <NoteInnerTit>👇 Write your Notes</NoteInnerTit>
        <NewNoteTit
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
        <NewNoteDesc 
            value={textareaValue}
            onChange={handleTextareaChange}
        />
        <AddNewNote>+ Add new note</AddNewNote>
    </NoteAddInner>
  );
}
  
  export default NotesAdd;