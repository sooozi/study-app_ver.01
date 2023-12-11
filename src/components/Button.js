import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyle = css`
  position: relative;
  padding: 0 1.5rem;
  border-radius: 3rem;
  height: 33px;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  span {
    font-family: 'Montserrat';
    font-weight: 100;
    letter-spacing: -0.05rem;
  }
`;

const BasicButton = styled.button`
  ${ButtonStyle}
  background: rgba(255, 243, 229, 1);
`;

const BorderButton = styled.button`
  ${ButtonStyle}
    &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 3rem; 
    padding: 3px; 
    background: linear-gradient(to right, rgb(255, 175, 88) 30%, rgb(255, 65, 65) 70%); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }
`;

const GradButton = styled.button`
  ${ButtonStyle}
  background-image: linear-gradient(to right, rgb(255, 175, 88) 30%, rgb(255, 65, 65) 70%);
  color: #fff;
`;


function Button({ buttonText, showArrow, isBorderButton, isGradButton }) {
  const StyledButton = isBorderButton ? BorderButton : isGradButton ? GradButton : BasicButton;

  return (
    <StyledButton>
      <span>{buttonText}</span>
      {showArrow && <img src="arrow.png" alt="Arrow" />}
    </StyledButton>
  );
}

export default Button;

