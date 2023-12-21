import React from 'react';
import styled from "styled-components";
import NotesCont from './NotesCont';

const NoteAddWrap= styled.div `
  background: #fff;
  padding: 1.5rem 1rem;
  border-radius: 1.5rem;
  width: 100%;
`;

const InnerTit = styled.span `
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 1rem;
`;


function TodoBoard() {
  return (
    <NoteAddWrap>
        <InnerTit>Overview</InnerTit>
        <Form>
            {/* <SelectBox value={selectedOption} onChange={handleSelectChange}>
                <option value="">Sort By</option>
                <option value="Project">Project</option>
                <option value="Personal">Personal</option>
                <option value="Etc">Etc</option>
            </SelectBox> */}
            <NewNoteTit
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <NewNoteDesc 
                value={textareaValue}
                onChange={handleTextareaChange}
            />
            <AddNewNote onClick={handleAddNote}>+ Add new note</AddNewNote>
        </Form>
    </NoteAddWrap>
  );
}
  
  export default TodoBoard;