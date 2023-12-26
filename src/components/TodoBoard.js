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
    margin-bottom: 15px;
    height: 15px;
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
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
`;

const TodoItemInner = styled.div`
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-right: 8px;
`;

const TodoDetail = styled.p`
    font-weight: 500;
    font-size: 13px;
    color: rgba(57, 32, 5, 1);
`;

const TodoDate = styled.p`
    font-weight: 500;
    font-size: 10px;
    color: rgba(57, 32, 5, 0.5);
`;

const DeleteButton = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const Form = styled.form `
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 15px;
`;

function TodoBoard({ filter: todoFilter, searchValue  }) {
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

        // 상태 갱신 후 로컬 스토리지에 업데이트
        const updatedTodoList = todoList.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
    };

    const handleDeleteTodo = (id) => {
        // 상태 갱신 후 로컬 스토리지에 업데이트
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
    };

    const filteredTodoList = todoList
        .filter((todo) => {
            if (todoFilter === 'all') return true;
            if (todoFilter === 'todo') return !todo.completed;
            if (todoFilter === 'done') return todo.completed;
            return true;
        });

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
                {filteredTodoList.map((todo) => (
                    <TodoItem  key={todo.id}>
                        <TodoItemInner>
                            <Checkbox
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleCheckboxChange(todo.id)}
                            />
                            <TodoDetail style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.detail}
                            </TodoDetail>
                        </TodoItemInner>
                        <TodoItemInner>
                            <TodoDate>{todo.date}</TodoDate>
                            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>⛔</DeleteButton>
                        </TodoItemInner>
                    </TodoItem>
                ))}
            </TodoListWrap>
        </TodoBoardWrap>
    );
}
  
  export default TodoBoard;