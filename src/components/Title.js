import styled from "styled-components";

const txtSize = {
    titLarge: '35px',
    large: '30px',
    medium: '20px',
    default: '16px',
    small: '12px',
}

// 미디어 쿼리를 사용하여 화면 크기에 따라 값 조정
const mediaQueries = {
  largeScreen: '@media screen and (max-width: 1200px)',
  mobileScreen: '@media screen and (max-device-width: 767px)',
  smallScreen: '@media screen and (max-width: 600px)',
}

const actualTxtSize = {
  titLarge: `${txtSize.titLarge} ${mediaQueries.mobileScreen}`,
  large: `${txtSize.large}`,
  medium: `${txtSize.medium}`,
  default: `${txtSize.default}`,
  small: `${txtSize.small}`,
}

const TitTxt = styled.h3`
  display: inline-block;
  font-weight: 700;
  font-size: ${actualTxtSize.titLarge};

  /* 767px 이하일 때 크기 변경 */
  ${mediaQueries.smallScreen} {
    font-size: ${actualTxtSize.large};
  }
  margin-bottom: 1rem;
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
  font-size: ${actualTxtSize.default};
`;

const Title = function({ titleText, gradTitleText, iconBox, subTitleText }){
  return(
    <div style={{margin: '0 0 0 0',}}>
      <TitTxt>{titleText}</TitTxt>
      <GradaTitTxt>{gradTitleText}</GradaTitTxt>
      <IconBox>{iconBox}</IconBox>
      {/* <SubTitTxt>{subTitleText}</SubTitTxt> */}
    </div>
  )
}

export { Title };

