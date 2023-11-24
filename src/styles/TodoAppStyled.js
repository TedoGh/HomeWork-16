import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 25px;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin: 0 25px;
  height: 100%;
  background-color: #091a2b;
  border-radius: 8px;
  h2,
  p {
    color: white;
  }
`;

export const Lists = styled.div`
  border: 2px solid #fb9517;
  width: 300px;
  height: 55px;
  margin: 0 auto;
  border-radius: 10px;
  border-left: 8px solid #fb9517;
  margin-bottom: 15px;

  li {
    list-style: none;
    display: flex;
    margin-left: 10px;
    align-items: center;
  }
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  display: "none";
`;
