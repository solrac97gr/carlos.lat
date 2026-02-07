import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.95rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #1e3a5f;
`;

export const StyledThead = styled.thead`
  background-color: #011627;
`;

export const StyledTh = styled.th`
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #7fdbca;
  border-bottom: 2px solid #3b82f6;
`;

export const StyledTd = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #1e3a5f;
  color: #d6deeb;
`;

export const StyledTbody = styled.tbody``;

export const StyledTr = styled.tr`
  background-color: #011627;

  &:nth-child(even) {
    background-color: #01203a;
  }
`;
