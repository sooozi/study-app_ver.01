import { default as React, useState } from 'react';
import styled from "styled-components";

const FilterInner= styled.div `
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
    width: -webkit-fill-available;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
    &:focus::placeholder, &:focus-visible::placeholder  {
        color: transparent;
    }
`;

function InnerFilter({ onSearchChange, onSortChange, style }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        // 부모 컴포넌트에서 전달한 콜백 함수 호출
        onSearchChange(event.target.value);
    };

    return (
        <FilterInner style={{ ...style }}>
            <SearchBar
                type="text"
                value={searchValue}
                placeholder='🔍 Search'
                onChange={handleSearchChange}
            />
        </FilterInner>
    );
}
  
export default InnerFilter;