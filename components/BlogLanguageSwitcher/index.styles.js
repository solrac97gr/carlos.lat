import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;

  p {
    margin: 0 0 1rem;
    font-size: 0.95rem;
    color: #6b7280;
    font-weight: 500;
  }

  .buttons {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

export const LanguageButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${props => props.$isActive ? '#3b82f6' : '#ffffff'};
  color: ${props => props.$isActive ? '#ffffff' : '#1f2937'};
  border: 1px solid ${props => props.$isActive ? '#3b82f6' : '#d1d5db'};
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$isActive ? '#2563eb' : '#f9fafb'};
    border-color: ${props => props.$isActive ? '#2563eb' : '#3b82f6'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
