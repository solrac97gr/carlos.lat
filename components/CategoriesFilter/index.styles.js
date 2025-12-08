import styled, { css } from "styled-components";
import { theme, media } from "../../lib/theme";

export const Container = styled.div`
  padding: ${theme.spacing['2xl']} 0;

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing['3xl']} 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${theme.fontSize['3xl']};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xl};

  ${media.mobile} {
    font-size: ${theme.fontSize['2xl']};
  }
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #d1d5db #f3f4f6;
    padding: 0.5rem 0;
    gap: 0.5rem;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #f3f4f6;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }
  }
`;

export const Category = styled.button`
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border-color: #3b82f6;
    color: #3b82f6;
  }

  ${(props) =>
    props.isActive &&
    css`
      background: #3b82f6 !important;
      color: white !important;
      border-color: #3b82f6 !important;
    `}
`;
