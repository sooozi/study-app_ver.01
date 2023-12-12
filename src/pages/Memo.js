import React from 'react';
import styled from "styled-components";
import { Title } from '../components/Title';

const MemoContainer = styled.div `
  border: 1px solid red;
`;


function Memo() {
  return (
    <>
      <Title titleText="Let's" gradTitleText="Memo" iconBox="✏️" subTitleText="Great ideas start as notepad scribbles!" />
      <MemoContainer>

      </MemoContainer>
    </>
  );
}
  
  export default Memo;