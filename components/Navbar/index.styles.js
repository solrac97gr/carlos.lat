import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  z-index: 50;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const NavbarContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.025em;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoAccent = styled.span`
  color: #2563eb;
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #2563eb;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  color: #4b5563;
  transition: color 0.3s ease;
  cursor: pointer;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    color: #2563eb;
  }
`;

export const CTAButton = styled.a`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2563eb;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  background-color: #ffffff;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  display: block;
  padding: 0.5rem 1.5rem;
  color: #4b5563;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;

export const MobileSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
`;

export const MobileCTAButton = styled.a`
  display: block;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 0.5rem 1.25rem;
  margin: 0.5rem 1.5rem 0;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const LanguageDropdown = styled.div`
  position: relative;
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  color: #4b5563;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  gap: 0.25rem;

  &:hover {
    color: #2563eb;
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const LanguageMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 6rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  z-index: 10;
`;

export const LanguageOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  color: #374151;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
