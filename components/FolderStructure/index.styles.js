import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  padding: 21px;
  border-radius: 5px;
  font-size: 15px;
  justify-content:space-between ;
`;

export const SubContainer = styled.div`
  margin-left: 20px;
`;

export const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FileName = styled.p`
  margin-left: 5px;
  margin-top: 3px;
  margin-bottom: 3px;
`;
