import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const TodoBoardWrap = styled.div `
  background: #fff;
  padding: 1.2rem 1rem;
  border-radius: 1.5rem;
  width: 100%;
`;

const TodoAddWrap = styled.div `
`;

const TodoListWrap = styled.div ``;

const InnerTopTit = styled.span `
    display: block;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 1rem;
`;

const NewTodoTit = styled.input `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    font-weight: bold;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    width: 100%;
    max-width: -webkit-fill-available;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
        &::placeholder {
            color: transparent;
        }
    }
`;

const TodayDate = styled.span `
    display: block;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 1rem;
`;

const AddNewTodo= styled.button `
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
    width: 100%;
    max-width: 100px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: rgb(255, 65, 65);
    }
`;

const Form = styled.form `
    display: flex;
    gap: 1rem;
`;


function TodoBoard() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const savedTodoList = JSON.parse(localStorage.getItem('todolist')) || [];
        setTodoList(savedTodoList);
    }, []);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            detail: inputValue,
            date: new Date().toLocaleString(),
        };

        localStorage.setItem('todolist', JSON.stringify([...todoList, newTodo]));
    
        setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    
        setInputValue('');
    };

    // useEffect(() => {
    //     localStorage.setItem('todolist', JSON.stringify(todoList));
    // }, [todoList]);

    return (
        <TodoBoardWrap>
            <TodoAddWrap>
                <InnerTopTit>Today</InnerTopTit>
                <TodayDate>📅 {new Date().toDateString()}</TodayDate>
                <Form>
                    <NewTodoTit
                        type="text"
                        placeholder='➕ Add New Todo List'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <AddNewTodo onClick={handleAddTodo}>+ Add Todo</AddNewTodo>
                </Form>
            </TodoAddWrap>
            <TodoListWrap>
                {todoList.map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.detail}</p>
                        <p>{todo.date}</p>
                    </div>
                ))}
            </TodoListWrap>
        </TodoBoardWrap>
    );
}
  
  export default TodoBoard;