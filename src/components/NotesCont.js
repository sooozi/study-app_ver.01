import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const NoteListWrap= styled.ul `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`;

const NoteInnerTit = styled.span `
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 1rem;
`;

const NoteListCont= styled.li `
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 5px 1px  rgba(255, 243, 229, 1);
`;

const NoteContTitle= styled.h5 `
    font-size: 15px;
    font-weight: bold;
`;

const NoteContDesc= styled.p `
    font-size: 12px;
`;

const NoteContDate= styled.span `
    font-size: 12px;
    color: #9d9d9d;
    font-weight: 100;
`;

const DeleteBtn= styled.button `
    font-size: 12px;
    color: #9d9d9d;
    font-weight: 100;
`;

const EditBtn= styled.button `
    font-size: 12px;
    color: skyblue;
    font-weight: 100;
`;

const NewNoteTit= styled.input `
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffdbb8;
    font-size: 12px;
    font-weight: bold;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    width: 100%;
    max-width: fit-content;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
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
`;


function NotesCont() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 메모 데이터를 가져옵니다.
    let storedMemos = JSON.parse(localStorage.getItem('memos')) || [];
    
    // 가져온 메모 데이터로 상태를 업데이트합니다.
    setMemos(storedMemos);
  }, []);
  // 이제 'memos' 상태를 컴포넌트에서 렌더링하거나 다른 작업에 사용할 수 있습니다.


  // 'Delete' 버튼 클릭 시 메모를 삭제하는 함수
  const handleDeleteClick = (id) => {
    // 클릭된 메모의 id를 기반으로 새로운 메모 배열 생성
    const updatedMemos = memos.filter((memo) => memo.id !== id);

    // 새로운 메모 배열을 로컬 스토리지에 저장
    localStorage.setItem('memos', JSON.stringify(updatedMemos));

    // 새로운 메모 배열을 상태에 업데이트
    setMemos(updatedMemos);
  };

  // 'Edit' 버튼 클릭 시 메모를 수정하는 함수
  const handleEditClick = (id) => {
    // 클릭된 메모의 id를 기반으로 수정하는 함수 호출
    setEditBtn(id);
  };

  // 메모 수정 버튼 누르면 실행되는 함수
  function setEditBtn(id) {
    // 클릭된 메모의 정보 가져오기
    const selectedMemo = memos.find((memo) => memo.id === id);

    // 가져온 메모의 제목과 내용을 메모장에 나타내기
    NewNoteTit.querySelector('.memo-title').value = selectedMemo.title;
    NewNoteDesc.querySelector('.memo-content').value = selectedMemo.content;

    // 클릭된 메모 배열에서 자르기
    const updatedMemos = memos.filter((memo) => memo.id !== id);

    // 자른 메모 배열을 로컬 스토리지에 저장
    localStorage.setItem('memos', JSON.stringify(updatedMemos));

    // 새로운 메모 배열을 상태에 업데이트
    setMemos(updatedMemos);
  }

  return (
    <>
      <NoteInnerTit>Overview</NoteInnerTit>
      <NoteListWrap>
        {/* 'memos' 상태를 필요에 따라 렌더링하거나 사용합니다. */}
        {memos.map((memo) => (
          <NoteListCont key={memo.id}>
            <NoteContTitle>{memo.title}</NoteContTitle>
            <NoteContDesc>{memo.content}</NoteContDesc>
            <NoteContDate>{memo.date}</NoteContDate>
            <DeleteBtn onClick={() => handleDeleteClick(memo.id)}>❌️ Delete</DeleteBtn>
            <EditBtn onClick={() => handleEditClick(memo.id)}>🎨 Edit</EditBtn>
          </NoteListCont>
        ))}
      </NoteListWrap>
    </>
  );
}

export default NotesCont;