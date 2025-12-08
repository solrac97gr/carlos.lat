import Image from "next/image";
import styled from "styled-components";

export const ImageStyled = styled(Image)`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  object-fit: cover;
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: white;
  text-decoration: none;
  border: none;
  border-radius: 0.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  height: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.15), 0 10px 10px -5px rgba(37, 99, 235, 0.1);
    transform: translateY(-8px);
  }

  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  background: #eff6ff;
  color: #3b82f6;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  border: none;
`;

export const Date = styled.small`
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: auto;
`;
