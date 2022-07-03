import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  overflow: hidden;
  background-color: white;
  -webkit-box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.13);
  box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.13);
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
  font-weight: bold;
  font-size: 21px;
`;

export const LastName = styled.span`
  font-weight: 400;
  font-size: 21px;
`;

export const SocialIcon = styled.a`
  margin-right: 8px;
`;
