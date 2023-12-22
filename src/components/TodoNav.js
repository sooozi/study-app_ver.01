import { default as React, useEffect, useState } from 'react';
import styled from "styled-components";
import InnerFilter from "./InnerFilter";

const TodoInner= styled.div `
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.5rem 1rem;
    border-radius: 1.5rem;
    width: clamp(150px, 14vw, 250px);
    min-width: 150px;
`;

const InnerTopTit = styled.span `
    display: block;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 1rem;
`;

const InnerTit = styled.span `
    display: block;
    font-weight: 500;
    font-size: 14px;
`;

const ContWrap= styled.div `
    border: 1px solid blue;
`;

const ContBox= styled.div `
    margin-bottom: 1rem;
    border: 1px solid red;
`;



function TodoNav({ onSearchChange, onSortChange }) {
    const [searchValue, setSearchValue] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        // 로컬스토리지에서 메모 가져와서 차례대로 정렬
        let storedMemos = JSON.parse(localStorage.getItem('memos')) || [];
        setMemos(storedMemos);
    }, []);


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
        <TodoInner>
            <InnerTopTit>Menu</InnerTopTit>
            <ContWrap>
                <>
                    <ContBox>
                        <InnerTit>Search</InnerTit>
                        <InnerFilter onSearchChange={handleSearchChange} onSortChange={handleSortChange} />
                    </ContBox>
                    <ContBox>
                        <InnerTit>Tasks</InnerTit>

                    </ContBox>
                </>
                <ContBox>
                    <InnerTit>Calendar</InnerTit>

                </ContBox>
            </ContWrap>
        </TodoInner>
    );
}
  

export default TodoNav;