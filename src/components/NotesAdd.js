import { default as React, useEffect, useState } from 'react';
import styled from "styled-components";

const NoteAddInner= styled.div `
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.5rem 1rem;
    border-radius: 1.5rem;
    width: clamp(150px, 14vw, 250px);
    min-width: 150px;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        width: 100%;
    }
`;

const NoteInnerTit = styled.span `
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 1rem;
`;

const SelectBox = styled.select `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    font-weight: bold;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    width: 100%;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
`;

const NewNoteTit= styled.input `
    display: block;
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
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        max-width: -webkit-fill-available;
    }
`;

const NewNoteDesc= styled.textarea `
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
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        max-width: -webkit-fill-available;
    }
`;

const AddNewNote= styled.button `
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

function NotesAdd() {
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        // 로컬스토리지에서 메모 가져와서 차례대로 정렬
        let storedMemos = JSON.parse(localStorage.getItem('memos')) || [];
        setMemos(storedMemos);
    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
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

        // 새로운 메모 객체에 선택된 옵션 추가
        newMemo.category = selectedOption;

        // 새로운 메모를 memos 배열에 추가
        memos.push(newMemo);

        // 새로운 메모를 memos 배열에 추가
        setMemos((prevMemos) => [...prevMemos, newMemo]);

        // memos 배열을 로컬스토리지에 저장
        localStorage.setItem('memos', JSON.stringify(memos));

        // 입력값 초기화
        setInputValue('');
        setTextareaValue('');
    };

    return (
        <NoteAddInner>
            <NoteInnerTit>👇 Write your Notes</NoteInnerTit>
            <Form>
                {/* <SelectBox value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Sort By</option>
                    <option value="Project">Project</option>
                    <option value="Personal">Personal</option>
                    <option value="Etc">Etc</option>
                </SelectBox> */}
                <NewNoteTit
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <NewNoteDesc 
                    value={textareaValue}
                    onChange={handleTextareaChange}
                />
                <AddNewNote onClick={handleAddNote}>+ Add new note</AddNewNote>
            </Form>
        </NoteAddInner>
    );
}
  

export default NotesAdd;