import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 380px;
  height: 550px;
  background-color: #d9e6ff;
`;

export const StLogo = styled.img`
  width: 150px;
  height: 140px;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  top: 5%;
`;

export const StInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  input {
    width: 220px;
    height: 35px;
    margin: 20px;
    border: 0;
  }
`;

export const StBtn = styled.div`
  margin-top: 15px;

  button {
    border-radius: 10px;
    border: 0;
    width: 80px;
    height: 35px;
    margin: 20px;
  }
`;
