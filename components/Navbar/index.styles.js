import styled from "styled-components";
import Link from "next/link";
import { BurgerMenu } from "../BurgerMenu";
import { keyframes } from "styled-components";
const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 50% { height: 405px; width: 405px; opacity: 0.4; }
 60% { height: 405px; width: 405px; opacity: 0.5; }
 70% { height: 405px; width: 405px; opacity: 0.6; }
 80% { height: 405px; width: 405px; opacity: 0.7; }
 100% { height: 100px; width: 100px; opacity: 0.9; }
`;

const LOGO_FONT_SIZE = "21px";

export const BurgerStyled = styled(BurgerMenu)`
  display: none !important;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavbarContainer = styled.div`
  background-color: #2d2e32;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
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

export const NavbarLink = styled(Link)``;

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

export const NewBadge = styled.small`
  background-color: green;
  padding: 3px;
  border-radius: 5px;
  margin-left: 3px;
  color: white;
  animation-name: ${breatheAnimation};
  animation-duration: 2.7s;
  animation-iteration-count: infinite;
`;
