import { default as React, useState } from 'react';
import styled from "styled-components";


const NoteAddWrap= styled.div `
  background: #fff;
  padding: 1.5rem 1rem;
  border-radius: 1.5rem;
  width: 100%;
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
    margin-bottom: 1rem;
`;

const NewTodoTit= styled.input `
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
    }
`;

const NewTodoDesc= styled.textarea `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    min-height: 100px;
    resize: none;
    width: 100%;
    max-width: fit-content;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
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
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: rgb(255, 65, 65);
    }
`;

const Form = styled.form `
`;


function TodoBoard() {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleAddNote = () => {
        // 로컬스토리지에서 메모 가져오기
        let memos = JSON.parse(localStorage.getItem('memos')) || [];
        
        // 새로운 메모 객체 생성
        let newMemo = {
            id: Date.now(), // 이 부분을 고유한 ID로 변경하거나 적절한 방법으로 설정하세요.
            title: inputValue,
            content: textareaValue,
            date: new Date().toLocaleString(),
        };

        // memos 배열을 로컬스토리지에 저장
        localStorage.setItem('memos', JSON.stringify(memos));

        // 입력값 초기화
        setInputValue('');
        setTextareaValue('');
    };

    return (
        <NoteAddWrap>
            <InnerTopTit>Today</InnerTopTit>
            <Form>
                {/* <SelectBox value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Sort By</option>
                    <option value="Project">Project</option>
                    <option value="Personal">Personal</option>
                    <option value="Etc">Etc</option>
                </SelectBox> */}
                <NewTodoTit
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <NewTodoDesc 
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
                <AddNewTodo onClick={handleAddNote}>+ Add new note</AddNewTodo>
            </Form>
        </NoteAddWrap>
    );
}
  
  export default TodoBoard;