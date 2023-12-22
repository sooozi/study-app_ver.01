import { default as React, useState } from 'react';
import styled from "styled-components";
import InnerFilter from "./InnerFilter";
import ListCalendar from "./ListCalendar";

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const ContBox= styled.div `
    margin-bottom: 1rem;
    border: 1px solid red;
`;


function TodoNav({ onSearchChange }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        onSearchChange(event.target.value);
    };

    return (
        <TodoInner>
            <InnerTopTit>Menu</InnerTopTit>
            <ContWrap>
                <div>
                    <ContBox>
                        <InnerTit>Search</InnerTit>
                        <InnerFilter onSearchChange={handleSearchChange} />
                    </ContBox>
                    <ContBox>
                        <InnerTit>Tasks</InnerTit>

                    </ContBox>
                </div>
                <ContBox>
                    <InnerTit>Calendar</InnerTit>
                    <ListCalendar />
                </ContBox>
            </ContWrap>
        </TodoInner>
    );
}
  
export default TodoNav;