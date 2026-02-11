import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 1rem;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 0.75rem;
    border-radius: 6px;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.375rem;
    margin-bottom: 0.75rem;
  }
`;

export const ToolButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: #f9fafb;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    background-color: #f3f4f6;
    border-color: #9ca3af;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8125rem;
    gap: 0.375rem;
    min-height: 44px; /* Touch target size */
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.625rem;
    font-size: 0.75rem;
  }
`;

export const DiagramContainer = styled.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  max-height: 600px;
  min-height: 210px;
  cursor: ${props => props.$isDragging ? 'grabbing' : 'grab'};
  user-select: none;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  touch-action: pan-x pan-y; /* Allow touch scrolling */
  padding: 1rem;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    min-height: 280px;
    max-height: 500px;
    padding: 0.75rem;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }

  @media (max-width: 480px) {
    min-height: 245px;
    max-height: 450px;
    padding: 0.5rem;
  }
`;

export const DiagramWrapper = styled.div`
  transform: scale(${props => props.$scale});
  transform-origin: top left;
  transition: transform 0.2s ease;
  display: inline-block;
  width: fit-content;
  min-width: 100%;

  /* Ensure diagrams are readable on mobile */
  svg {
    max-width: none; /* Allow SVG to be its natural size */
    height: auto;
    display: block;
    margin: 0 auto; /* Center horizontally */
  }

  @media (max-width: 768px) {
    /* Ensure text in diagrams is readable */
    font-size: 14px;
  }
`;

export const ZoomControls = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.25rem;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 768px) {
    bottom: 0.75rem;
    right: 0.75rem;
    padding: 0.375rem;
    backdrop-filter: blur(4px);
    animation: slideInUp 0.3s ease-out;

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 480px) {
    bottom: 0.5rem;
    right: 0.5rem;
    gap: 0.125rem;
  }
`;

export const ZoomButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: #374151;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent; /* Remove tap highlight on mobile */

  &:hover {
    background-color: #f3f4f6;
  }

  &:active {
    transform: scale(0.95);
    background-color: #e5e7eb;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 40px; /* Larger touch target */
    height: 40px;
    font-size: 1.375rem;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 1.25rem;
  }
`;

export const ZoomLevel = styled.span`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  min-width: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    min-width: 45px;
    padding: 0 0.375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    min-width: 40px;
    padding: 0 0.25rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  color: #dc2626;
  font-size: 0.875rem;
  font-family: monospace;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.8125rem;
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    padding: 0.625rem;
    font-size: 0.75rem;
  }
`;
