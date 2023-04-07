import styled from "styled-components";

export const SocialShareContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  width: 100%;

  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    width: 100%;
  }
`;
