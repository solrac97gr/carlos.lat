import styled from "styled-components";

export const SocialShareContainer = styled.div`
  @media (max-width: 768px) {
    background-color: #ffffff;
    border-top: 1px solid #e5e7eb;
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
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;
