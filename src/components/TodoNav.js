import { default as React, useState } from 'react';
import styled from "styled-components";
import InnerFilter from "./InnerFilter";
import TodoCalendar from './TodoCalendar';

const TodoInner= styled.div `
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.2rem 1rem;
    border-radius: 1.5rem;
    width: clamp(150px, 14vw, 250px);
    min-width: 150px;
    height: initial;
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
    margin-bottom: 10px;
`;

const InnerTask = styled.div `
    margin: 10px 0 0;
`;

const TaskBtn= styled.button `
    width: 100%;
    height: 30px;
    padding: 0 0.5rem;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    background-color: #fff;
    cursor: pointer;
    font-size: 12px;
    font-family: 'Montserrat';
    font-weight: 500;
    letter-spacing: -0.5px;
    color: rgb(57, 32, 5);
    text-align: left;
    transition: all 0.2s ease-in-out;
    &:not(:last-child) {
        margin-bottom: 5px;
    }
    &:hover {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
    &.on {
        border: #ffe0bc;
        background-color: #ffe0bc;
    }
`;

const ContWrap= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const ContBox= styled.div `
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;



function TodoNav({ onSearchChange, onFilterChange }) {
    const [searchValue, setSearchValue] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(event.target.value);
        onSearchChange(event.target.value);
    };

    const handleFilterChange = (filter) => {
        onFilterChange(filter);
        setActiveFilter(filter);
    };

    return (
        <TodoInner>
            <InnerTopTit>Menu</InnerTopTit>
            <ContWrap>
                <div>
                    <ContBox>
                        <InnerTit>Search</InnerTit>
                        <InnerFilter
                            onSearchChange={handleSearchChange}
                            style={{ margin: 0 }}
                        />
                    </ContBox>
                    <ContBox>
                        <InnerTit>Tasks</InnerTit>
                        <InnerTask>
                            <TaskBtn onClick={() => handleFilterChange('all')} className={activeFilter === 'all' ? 'on' : ''}>🟥 All</TaskBtn>
                            <TaskBtn onClick={() => handleFilterChange('todo')} className={activeFilter === 'todo' ? 'on' : ''}>⭕ Todo</TaskBtn>
                            <TaskBtn onClick={() => handleFilterChange('done')} className={activeFilter === 'done' ? 'on' : ''}>✅ Done</TaskBtn>
                        </InnerTask>
                    </ContBox>
                </div>
                <ContBox>
                    <InnerTit>Calendar</InnerTit>
                    <TodoCalendar />
                </ContBox>
            </ContWrap>
        </TodoInner>
    );
}
  
export default TodoNav;