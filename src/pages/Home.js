import styled from "styled-components";

const Wrapper = styled.div`
  background: red;
`;

function Home() {
    return (
      <>
        <Wrapper>
          <h1>Home Page</h1>
        </Wrapper>
      </>
    );
  }
  
  export default Home;