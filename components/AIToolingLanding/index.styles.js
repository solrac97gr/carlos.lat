import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
`;

// Floating Language Switcher
export const FloatingLanguageSwitch = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  display: flex;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

// Simple Header
export const SimpleHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 800;
  color: #111827;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #3b82f6;
  }
`;

export const LogoAccent = styled.span`
  color: #3b82f6;
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.isActive ? '#3b82f6' : 'transparent'};
  color: ${props => props.isActive ? 'white' : '#6b7280'};
  border: 1px solid ${props => props.isActive ? '#3b82f6' : '#e5e7eb'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.isActive ? '#2563eb' : '#f3f4f6'};
    border-color: ${props => props.isActive ? '#2563eb' : '#d1d5db'};
  }
`;

// Simple Footer
export const SimpleFooter = styled.footer`
  background: #111827;
  padding: 3rem 2rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

export const FooterText = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

export const FooterLink = styled.a`
  color: #d1d5db;
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

export const Copyright = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  margin-top: 2rem;
`;

// Hero Section
export const HeroSection = styled.section`
  padding: 6rem 2rem 4rem;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    padding: 8rem 3rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 10rem 4rem 6rem;
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

// Testimonials Section
export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const TestimonialHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const TestimonialAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
`;

export const TestimonialInfo = styled.div`
  flex: 1;
`;

export const TestimonialName = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
`;

export const TestimonialRole = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const TestimonialCompany = styled.span`
  color: #3b82f6;
  font-weight: 600;
`;

export const TestimonialStars = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #fbbf24;
  margin-bottom: 0.5rem;
`;

export const TestimonialText = styled.p`
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.625;
  font-style: italic;
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

// Pricing Section
export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PricingCard = styled.div`
  padding: 2.5rem 2rem;
  background: white;
  border: ${props => props.featured ? '3px solid #3b82f6' : '2px solid #e5e7eb'};
  border-radius: 1rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.3);
    border-color: #3b82f6;
  }
`;

export const PricingBadge = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const PricingHeader = styled.div`
  text-align: center;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e5e7eb;
`;

export const PricingName = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const PricingPrice = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

export const PricingIdeal = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  font-style: italic;
`;

export const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex-grow: 1;
`;

export const PricingFeature = styled.li`
  display: flex;
  align-items: start;
  gap: 0.75rem;
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.5;

  &::before {
    content: '✓';
    color: #10b981;
    font-weight: 700;
    font-size: 1.125rem;
    flex-shrink: 0;
  }
`;

export const PricingROI = styled.div`
  background: #eff6ff;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #1e40af;
  font-weight: 600;
  text-align: center;
`;

export const PricingCTA = styled.a`
  display: block;
  width: 100%;
  background: ${props => props.primary ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : '#f3f4f6'};
  color: ${props => props.primary ? 'white' : '#3b82f6'};
  font-weight: 700;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px ${props => props.primary ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

export const PricingGuarantee = styled.p`
  text-align: center;
  max-width: 48rem;
  margin: 3rem auto 0;
  padding: 1.5rem;
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: 0.5rem;
  font-size: 0.9375rem;
  color: #78350f;
  font-weight: 600;
`;

// FAQ Section
export const FAQGrid = styled.div`
  max-width: 56rem;
  margin: 3rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FAQItem = styled.div`
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1);
  }
`;

export const FAQQuestion = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.625;
`;
