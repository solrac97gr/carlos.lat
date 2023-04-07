import styled from "styled-components";

export const SocialShareContainer = styled.div`
  @media (max-width: 768px) {
    background-color: #2d2e32;
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 999;
    bottom: 0;
    width: 100%;
    padding: 8px;
    align-items: center;
  }
`;
