import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 4rem 0 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  border-radius: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    padding: 5rem 0 3.5rem;
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 0 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 0 2rem;
    gap: 2rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
  color: #111827;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Content = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75;
  color: #4b5563;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background: #eff6ff;
  border-radius: 0.5rem;
  color: #3b82f6;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background: #dbeafe;
  }
`;

export const StyledA = styled.a`
  display: inline-block;
  background: #3b82f6;
  border-radius: 0.5rem;
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid transparent;
  width: fit-content;

  &:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const ImageStyled = styled(Image)`
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const ImageWrapper = styled.div`
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;
