import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1f2937;
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  justify-content: space-between;
  color: #e5e7eb;
  border: 1px solid #374151;
`;

export const SubContainer = styled.div`
  margin-left: 2.5rem;
`;

export const FileNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const FileName = styled.p`
  margin: 0.25rem 0;
  color: #e5e7eb;
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;