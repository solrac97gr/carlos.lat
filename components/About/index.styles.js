import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem 0;
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 7rem 0;
  }

  @media (min-width: 1024px) {
    padding: 9rem 0;
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

export const Content = styled.div`
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.75;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 3rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StatCard = styled.div`
  text-align: center;
`;

export const StatIcon = styled.div`
  background-color: #dbeafe;
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #2563eb;
  }
`;

export const StatNumber = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.p`
  color: #4b5563;
`;

export const WhyChooseBox = styled.div`
  background: linear-gradient(to bottom right, #eff6ff, #f9fafb);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

export const WhyChooseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  span {
    color: #374151;
    line-height: 1.625;
  }

  strong {
    font-weight: 600;
  }
`;

export const CheckIcon = styled.div`
  flex-shrink: 0;
  margin-top: 0.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #22c55e;
  }
`;
