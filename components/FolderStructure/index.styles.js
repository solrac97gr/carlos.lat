import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #011627;
  padding: 21px;
  border-radius: 5px;
  font-size: 15px;
  justify-content: space-between;
`;

export const SubContainer = styled.div`
  margin-left: 40px;
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

export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;  
`;