import React, { useEffect, useState } from 'react';

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
      {/* 'memos' 상태를 필요에 따라 렌더링하거나 사용합니다. */}
      {memos.map((memo) => (
        <div key={memo.id}>
          <h3>{memo.title}</h3>
          <p>{memo.content}</p>
          <p>{memo.date}</p>
        </div>
      ))}
    </>
  );
}

export default NotesCont;