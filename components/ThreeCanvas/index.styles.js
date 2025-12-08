import styled from 'styled-components';

export const CanvasContainer = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;
