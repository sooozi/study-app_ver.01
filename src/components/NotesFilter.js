import { default as React, useState } from 'react';
import styled from "styled-components";

const NoteFilterInner= styled.div `
    margin: 10px 0;
`;

const SearchBar= styled.input `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    font-weight: bold;
    outline: 0;
    color: rgb(57, 32, 5);
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
    &:focus::placeholder, &:focus-visible::placeholder  {
        color: transparent;
    }
`;

const Form = styled.form `
    display: flex;
`;

function NotesFilter() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <NoteFilterInner>
            <Form>
                <SearchBar
                    type="text"
                    value={inputValue}
                    placeholder='🔍 Search'
                    onChange={handleInputChange}
                />
            </Form>
        </NoteFilterInner>
    );
}
  
export default NotesFilter;