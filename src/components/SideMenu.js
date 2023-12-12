import React from 'react';
import styled from "styled-components";

const SideMenuWrap = styled.div `
    background-color: #fff;
    width: clamp(60px, 5vw, 100px);
    height: 100%;
`;

const AddNoteBtn = styled.button`
    background-color: rgb(57, 32, 5);
    border-radius: 50%;
    color: #fff;
    width: 30px;
    height: 30px;
    font-size: 30px;
    cursor: pointer;
`;


function SideMenu() {
  return (
    <>
      <SideMenuWrap>
        <AddNoteBtn>+</AddNoteBtn>
      </SideMenuWrap>
    </>
  );
}
  
  export default SideMenu;