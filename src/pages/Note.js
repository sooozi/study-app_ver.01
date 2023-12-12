import React from 'react';
import styled from "styled-components";
import ContBoard from '../components/ContBoard';
import SideMenu from '../components/SideMenu';
import { Title } from '../components/Title';

const NoteContainer = styled.div `
  border: 1px solid red;
  height: 100%;
`;


function Note() {
  return (
    <>
      <Title titleText="Let's" gradTitleText="Notes" iconBox="✏️" subTitleText="Great ideas start with notes and scribbles!" />
      <NoteContainer>
        <SideMenu></SideMenu>
        <ContBoard></ContBoard>
      </NoteContainer>
    </>
  );
}
  
  export default Note;