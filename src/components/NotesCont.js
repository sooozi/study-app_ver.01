import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import NotesFilter from "./NotesFilter";

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
    padding: 15px;
    width: clamp(150px, 10rem, 250px);
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px  rgba(255, 243, 229, 1);
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
    max-width: -webkit-fill-available;
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
    resize: none;
    width: 100%;
    max-width: -webkit-fill-available;
    min-height: 100px;
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
    }
`;

const NoteContTitle= styled.input `
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: bold;
    width: -webkit-fill-available;
    border: none;
    outline: 0;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    cursor: default;
`;

const NoteContDesc= styled.textarea `
    font-size: 12px;
    border: none;
    outline: 0;
    resize: none;
    width: 100%;
    color: rgb(57, 32, 5);
    margin-bottom: 10px;
    cursor: default;
    min-height: 50px;
    overflow: auto;
`;

const NoteContCategory = styled.span `
    display: inline-block;
    font-size: 10px;
    color: rgb(255, 175, 88);
    font-weight: bolder;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 5px 10px;
    border: 1px solid rgb(255, 175, 88);
    line-height: 11px;
`;

const NoteContDate= styled.span `
    display: block;
    font-size: 12px;
    color: #9d9d9d;
    font-weight: 100;
    margin-bottom: 10px;
`;

const DeleteBtn= styled.button `
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
    background: rgb(255, 106, 106);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    margin-left: 5px;
`;

const EditBtn= styled.button `
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
    background: rgb(255, 175, 88);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
`;

const SaveBtn= styled.button `
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
    background: rgb(66, 168, 216);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
`;

const CancelBtn= styled.button `
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
    background: rgb(51, 210, 157);
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    margin-left: 5px;
`;

function NotesCont() {
  const [memos, setMemos] = useState([]);
  // 메모 수정을 위한 상태와 ref를 추가합니다.
  const [selectedMemo, setSelectedMemo] = useState(null);
  const newNoteTitRef = useRef(null);
  const newNoteDescRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    // 로컬 스토리지에서 메모 데이터를 가져옵니다.
    let storedMemos = JSON.parse(localStorage.getItem('memos')) || [];

    // 만약 updatedAt이 없다면 date 값으로 초기화합니다.
    storedMemos = storedMemos.map(memo => ({
      ...memo,
      updatedAt: memo.updatedAt || memo.date
    }));
    
    // 가져온 메모 데이터로 상태를 업데이트합니다.
    setMemos(storedMemos);

    // 컴포넌트가 마운트될 때 ref를 초기화합니다.
    newNoteTitRef.current = document.getElementById('newNoteTit');
    newNoteDescRef.current = document.getElementById('newNoteDesc');
  }, []);


  // 'Delete' 버튼 클릭 시 메모를 삭제하는 함수
  const handleDeleteClick = (id) => {
    // 클릭된 메모의 id를 기반으로 새로운 메모 배열 생성
    const updatedMemos = memos.filter((memo) => memo.id !== id);

    // 새로운 메모 배열을 로컬 스토리지에 저장
    localStorage.setItem('memos', JSON.stringify(updatedMemos));

    // 새로운 메모 배열을 상태에 업데이트
    setMemos(updatedMemos);
  };

  // 'Edit' 버튼 클릭 시 해당 메모를 수정 모드로 설정합니다.
  const handleEditClick = (id) => {
    const selected = memos.find((memo) => memo.id === id);
    setSelectedMemo(selected);

    if (newNoteTitRef.current && newNoteDescRef.current) {
      newNoteTitRef.current.value = selected.title;
      newNoteDescRef.current.value = selected.content;
    }
  };

  // 'Save' 버튼 클릭 시 메모를 저장하고 상태를 업데이트합니다.
  const handleSaveClick = () => {
    if (selectedMemo) {
      const id = selectedMemo.id;
      const updatedTitle = newNoteTitRef.current.value;
      const updatedContent = newNoteDescRef.current.value;
      const updatedDate = new Date().toLocaleString(); // 현재 날짜 및 시간으로 업데이트
      const updatedCategory = selectedMemo.category;
      const updatedMemos = memos.map((memo) =>
        memo.id === id
          ? {
            ...memo,
            title: updatedTitle,
            content: updatedContent,
            date: updatedDate,
            updatedAt: updatedDate,
            category: updatedCategory,
          }
        : memo
      );

      localStorage.setItem('memos', JSON.stringify(updatedMemos));
      setSelectedMemo(null);
      setMemos(updatedMemos);
    }
  };

  // 'Cancel' 버튼 클릭 시 선택된 메모를 초기화합니다.
  const handleCancelClick = () => {
    setSelectedMemo(null);
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    // 정렬 옵션에 따라 메모를 정렬하는 로직 추가
    let sortedMemos;

    // 최근 생성순으로 정렬
    if (option === 'createdAt') {
      sortedMemos = [...memos].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    // 최근 수정순으로 정렬
    else if (option === 'updatedAt') {
      sortedMemos = [...memos].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
    // 정렬 옵션이 없을 경우 기본 상태 그대로 사용
    else {
      sortedMemos = memos;
    }
    setMemos(sortedMemos.reverse());
  };

  // 검색어에 따라 메모를 필터링합니다.
  const filteredMemos = memos.filter((memo) => {
    const titleIncludes = memo.title.toLowerCase().includes(searchValue.toLowerCase());
    const contentIncludes = memo.content.toLowerCase().includes(searchValue.toLowerCase());
    return titleIncludes || contentIncludes;
  });

  return (
    <>
      <NoteInnerTit>Overview</NoteInnerTit>
      <NotesFilter onSearchChange={handleSearchChange} onSortChange={handleSortChange}  />
      <NoteListWrap>
        {/* filteredMemos가 정의되어 있을 때에만 map 함수를 호출하도록 수정 */}
        {filteredMemos && filteredMemos.map((memo) => (
          <NoteListCont key={memo.id}>
            {/* Edit 모드인 경우에만 수정 가능한 입력 필드로 변경 */}
            {selectedMemo && selectedMemo.id === memo.id ? (
              <>
                {/* <NoteContCategory>{memo.category}</NoteContCategory> */}
                <NoteContDate>{memo.date}</NoteContDate>
                <NewNoteTit
                  type="text"
                  defaultValue={memo.title}
                  ref={newNoteTitRef}
                />
                <NewNoteDesc
                  defaultValue={memo.content}
                  ref={newNoteDescRef}
                />
              </>
            ) : (
              <>
                {/* <NoteContCategory>{memo.category}</NoteContCategory> */}
                <NoteContDate>{memo.date}</NoteContDate>
                <NoteContTitle
                  type="text"
                  value={memo.title}
                  readOnly
                />
                <NoteContDesc
                  value={memo.content}
                  readOnly
                />
              </>
            )}
            {/* Edit 모드인 경우 Save 버튼 표시, 그 외에는 Edit 버튼 표시 */}
            {selectedMemo && selectedMemo.id === memo.id ? (
              <SaveBtn onClick={handleSaveClick}>🔽Save</SaveBtn>
              ) : (
                <>
                  <EditBtn onClick={() => handleEditClick(memo.id)}>✒️ Edit</EditBtn>
                  <DeleteBtn onClick={() => handleDeleteClick(memo.id)}>⛔Delete</DeleteBtn>
                </>
            )}
            {/* Edit 모드인 경우 Cancel 버튼 표시 */}
            {selectedMemo && selectedMemo.id === memo.id && (
              <CancelBtn onClick={handleCancelClick}>❎Cancel</CancelBtn>
            )}
          </NoteListCont>
        ))}
      </NoteListWrap>
    </>
  );
}

export default NotesCont;