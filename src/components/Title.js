import styled from "styled-components";

const txtSize = {
    large: '36px',
    medium: '20px',
    default: '16px',
    small: '12px',
  }

const TitTxt = styled.h1`
  font-weight: 700;
  font-size: ${txtSize.large};
  margin-bottom: 8px;
`

const SubTitTxt = styled.h2`
  font-weight: 400;
  font-size: ${txtSize.medium};
` 

const Title = function({ titleText, subTitleText }){
  return(
    <div style={{margin: '10px 0 20px 0',}}>
      <TitTxt>{titleText}</TitTxt>
      <SubTitTxt>{subTitleText}</SubTitTxt>
    </div>
  )
}

export { Title };

