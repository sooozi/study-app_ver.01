import styled from "styled-components";

const txtSize = {
    titLarge: '45px',
    large: '40px',
    medium: '20px',
    default: '16px',
    small: '12px',
  }

const TitTxt = styled.h3`
  display: inline-block;
  font-weight: 700;
  font-size: ${txtSize.titLarge};
  margin-bottom: 10px;
`;

const GradaTitTxt = styled(TitTxt) `
  background-image: linear-gradient(to right, rgb(255, 175, 88) 30%, rgb(255, 65, 65) 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  margin-left: 15px;
`;

const IconBox = styled(TitTxt) `
  margin-left: 3px;
`;

const SubTitTxt = styled.span`
  display: block;
  font-weight: 500;
  font-size: ${txtSize.default};
`;

const Title = function({ titleText, gradTitleText, iconBox, subTitleText }){
  return(
    <div style={{margin: '0 0 20px 0',}}>
      <TitTxt>{titleText}</TitTxt>
      <GradaTitTxt>{gradTitleText}</GradaTitTxt>
      <IconBox>{iconBox}</IconBox>
      <SubTitTxt>{subTitleText}</SubTitTxt>
    </div>
  )
}

export { Title };

