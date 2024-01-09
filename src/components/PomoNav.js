import { default as React, useState } from 'react';
import styled from "styled-components";

const TodoInner= styled.div `
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.2rem 1rem;
    border-radius: 1.5rem;
    width: clamp(150px, 14vw, 250px);
    min-width: 150px;
    height: initial;
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
    font-size: 13px;
    margin-bottom: 10px;
`;

const ContWrap= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const ContBox= styled.div `
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

const PomoTime = styled.input `
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
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    &:focus, &:focus-visible  {
        border: 1px solid rgba(255, 243, 229, 1);
        background-color: rgba(255, 243, 229, 1);
        &::placeholder {
            color: transparent;
        }
    }
`;

const AddNewPomo = styled.button `
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



function PomoNav({ onSetMinutes }) {
    const [inputMinutes, setInputMinutes] = useState('');

    const handleInputChange = (event) => {
        setInputMinutes(event.target.value);
    };

    const handleSetMinutes = () => {
        if (!isNaN(inputMinutes) && inputMinutes >= 0) {
            console.log("Setting minutes:", inputMinutes); // 확인을 위한 로그
            onSetMinutes(parseInt(inputMinutes, 10));
            setInputMinutes('');
        }
    };

    return (
        <TodoInner>
            <InnerTopTit>Setting</InnerTopTit>
            <ContWrap>
                <div>
                    <ContBox>
                        <InnerTit>Minutes</InnerTit>
                        <PomoTime
                            type="number"
                            placeholder="Set Minutes"
                            value={inputMinutes}
                            onChange={handleInputChange}
                        />
                        <AddNewPomo onClick={handleSetMinutes}>Set Minutes</AddNewPomo>
                    </ContBox>
                </div>
            </ContWrap>
        </TodoInner>
    );
}
  
export default PomoNav;