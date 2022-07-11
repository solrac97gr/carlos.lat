import styled from "styled-components";
import Link from "next/link";

const LOGO_FONT_SIZE = "21px";

export const NavbarContainer = styled.div`
  background-color: #2d2e32;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  overflow: hidden;
  z-index: 999;
  @media (max-width: 768px) {
    padding: 20px;
    justify-content: space-between;
  }
`;

export const NameContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  padding-right: 5px;
`;

export const FirstName = styled.span`
  font-weight: 600;
  font-size: ${LOGO_FONT_SIZE};
`;

export const LastName = styled.span`
  color: #95989f;
  font-weight: 500;
  font-size: ${LOGO_FONT_SIZE};
  margin-left: 3px;
`;

export const SocialIcon = styled.a`
  margin-right: 8px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  
`;

export const NavbarLinkText = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: 21px;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;
