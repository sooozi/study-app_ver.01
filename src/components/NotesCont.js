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


function NotesCont() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 메모 데이터를 가져옵니다.
    let storedMemos = JSON.parse(localStorage.getItem('memos')) || [];
    
    // 가져온 메모 데이터로 상태를 업데이트합니다.
    setMemos(storedMemos);
  }, []);

  // 이제 'memos' 상태를 컴포넌트에서 렌더링하거나 다른 작업에 사용할 수 있습니다.

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
          </NoteListCont>
        ))}
      </NoteListWrap>
    </>
  );
}

export default NotesCont;