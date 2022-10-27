import styled from "styled-components";

export const AboutContainer = styled.div` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1;

  background-color: #00adb5;

  span {
    color: orange;
    font-family: "Girassol", sans-serif;
    font-size: 2rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: right;
  margin: 1rem;
  border: 1px solid #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  span {
    color: #fff;
    font-family: "Girassol", sans-serif;
  }
  a {
    color: orange;
    font-family: "Girassol", sans-serif;
  }
`;



export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
  margin-top: 3rem;

`;

export const AboutTitle = styled.div`
  margin-bottom: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
