import { default as React, useState } from 'react';
import styled from "styled-components";

const NoteFilterInner= styled.div `
    margin: 10px 0;
    @media only screen and (max-device-width : 767px) {
        margin: 1rem 0
    }
`;

const Form = styled.form `
    display: flex;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        flex-wrap: wrap;
        input, select {
            width: 100%;
            margin: 0;
        }
        select {
            margin-top: 10px;
        }
    }
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

const SelectBox = styled.select `
    margin-left: 5px;
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
`;

function NotesFilter({ onSearchChange, onSortChange }) {
    const [searchValue, setSearchValue] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        // 부모 컴포넌트에서 전달한 콜백 함수 호출
        onSearchChange(event.target.value);
    };

    const handleSortChange = (event) => {
        const selectedSortOption = event.target.value;
        setSortOption(selectedSortOption);
        // 부모 컴포넌트에서 전달한 콜백 함수 호출
        onSortChange(selectedSortOption);
    };

    return (
        <NoteFilterInner>
            <Form>
                <SearchBar
                    type="text"
                    value={searchValue}
                    placeholder='🔍 Search'
                    onChange={handleSearchChange}
                />
                <SelectBox value={sortOption} onChange={handleSortChange}>
                    <option value="">Oldest First</option>
                    <option value="createdAt">Recent First</option>
                    {/* <option value="updatedAt">Recent Updated</option> */}
                </SelectBox>
            </Form>
        </NoteFilterInner>
    );
}
  
export default NotesFilter;