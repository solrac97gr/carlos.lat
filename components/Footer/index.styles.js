import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: white;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (min-width: 768px) {
    padding: 3rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem 4rem;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const LogoAccent = styled.span`
  color: #60a5fa;
`;

export const FooterTagline = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const ColumnTitle = styled.h4`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LinkItem = styled.li``;

export const FooterLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
`;

export const InfoItem = styled.li``;

export const SocialLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Divider = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;
`;

export const Copyright = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
`;
