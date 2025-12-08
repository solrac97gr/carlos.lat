import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 0;
  background-color: #f9fafb;

  @media (min-width: 768px) {
    padding: 7rem 0;
  }

  @media (min-width: 1024px) {
    padding: 7rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 36rem;
  margin: 0 auto;
  font-size: 1.125rem;
  color: #4b5563;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-0.5rem);
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  padding: 0.75rem;
  background-color: #dbeafe;
  border-radius: 9999px;
  margin-bottom: 1rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #3b82f6;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const ServiceDescription = styled.p`
  color: #4b5563;
  line-height: 1.625;
`;
