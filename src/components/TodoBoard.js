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

const TodoItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Checkbox = styled.input`
    margin-right: 8px;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
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
        // 로컬 스토리지에서 기존 데이터를 가져옴
        const savedTodoList = JSON.parse(localStorage.getItem('todolist')) || [];

        const newTodo = {
            id: Date.now(),
            detail: inputValue,
            date: new Date().toLocaleDateString(),
            completed: false,
        };

        // 기존 데이터와 새로운 투두 아이템을 합쳐서 업데이트
        const updatedTodoList = [...savedTodoList, newTodo];

        // 로컬 스토리지에 업데이트된 데이터 저장
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
        // 상태 업데이트
        setTodoList(updatedTodoList);
        // 입력값 초기화
        setInputValue('');

    };

    const handleCheckboxChange = (id) => {
        setTodoList((prevTodoList) =>
            prevTodoList.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
        localStorage.setItem(
            'todolist',
            JSON.stringify(todoList.filter((todo) => todo.id !== id))
        );
    };

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
                    <TodoItem  key={todo.id}>
                        <Checkbox
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleCheckboxChange(todo.id)}
                        />
                        <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.detail}
                        </p>
                        <p>{todo.date}</p>
                        <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>Delete</DeleteButton>
                    </TodoItem>
                ))}
            </TodoListWrap>
        </TodoBoardWrap>
    );
}
  
  export default TodoBoard;