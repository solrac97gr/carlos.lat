import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
`;

// Hero Section
export const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    padding: 10rem 3rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 12rem 4rem 6rem;
  }
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  max-width: 48rem;
  margin: 0 auto 2.5rem;
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.75;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.a`
  width: 100%;
  background-color: #3b82f6;
  color: white;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const SecondaryButton = styled.a`
  width: 100%;
  background-color: transparent;
  color: #3b82f6;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: 2px solid #3b82f6;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
    color: white;
    transform: translateY(-2px);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

// Section Styles
export const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 4rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const SectionSubtitle = styled.p`
  max-width: 48rem;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
  color: #6b7280;
  text-align: center;
  line-height: 1.75;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Problem Section
export const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProblemCard = styled.div`
  padding: 2rem;
  background: #fef2f2;
  border-left: 4px solid #ef4444;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.2);
  }
`;

export const ProblemTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #991b1b;
  margin-bottom: 0.75rem;
`;

export const ProblemDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.625;
`;

// Solution Section
export const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const SolutionStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const StepNumber = styled.div`
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
`;

export const StepContent = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const StepDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.75;
`;

// Benefits Section
export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const BenefitCard = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
  border-radius: 0.75rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.15);
  }
`;

export const BenefitIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
`;

export const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.625;
`;

// Use Cases Section
export const UseCasesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UseCaseCard = styled.div`
  padding: 2rem;
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2);
    transform: translateY(-4px);
  }
`;

export const UseCaseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const UseCaseDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.625;
`;

// Process Section
export const ProcessTimeline = styled.div`
  margin-top: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 2rem;
    bottom: 2rem;
    width: 2px;
    background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const ProcessPhase = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 5rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 2rem;
    width: 1rem;
    height: 1rem;
    background: #3b82f6;
    border-radius: 50%;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const PhaseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const PhaseDescription = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.75;
`;

// CTA Section
export const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
  text-align: center;

  @media (min-width: 768px) {
    padding: 6rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 4rem;
  }
`;

export const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const CTASubtitle = styled.p`
  max-width: 48rem;
  margin: 0 auto 2.5rem;
  font-size: 1.125rem;
  color: #e0e7ff;
  line-height: 1.75;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CTAButton = styled.a`
  background-color: white;
  color: #3b82f6;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.4);
    background-color: #f3f4f6;
  }
`;

export const CTAAlternative = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #c7d2fe;

  a {
    color: white;
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      color: #e0e7ff;
    }
  }
`;
