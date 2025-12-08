import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow: hidden;
`;

export const HeroSection = styled.section`
  padding: 6rem 2.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 10rem 4rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 12rem 5rem 5rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
  }
`;

export const CanvasColumn = styled.div`
  width: 100%;
  height: 20rem;
  order: 2;

  @media (min-width: 768px) {
    height: 31.25rem;
    order: 2;
  }

  @media (min-width: 1024px) {
    height: 37.5rem;
  }
`;

export const ContentColumn = styled.div`
  text-align: center;
  order: 1;

  @media (min-width: 768px) {
    text-align: left;
    order: 1;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

export const TitleAccent = styled.span`
  color: #2563eb;
`;

export const Subtitle = styled.p`
  max-width: 36rem;
  margin: 0 auto 2.5rem;
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.625;

  @media (min-width: 768px) {
    margin: 0 0 2.5rem 0;
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 3rem;
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

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const PrimaryButton = styled.a`
  width: 100%;
  background-color: #2563eb;
  color: white;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const SecondaryButton = styled.a`
  width: 100%;
  background-color: #e5e7eb;
  color: #1f2937;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #d1d5db;
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const ClientsSection = styled.div`
  margin-top: 3rem;
  overflow: hidden;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export const ClientsScrollContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ClientsScroll = styled.div`
  display: flex;
  gap: 3rem;
  animation: scroll 30s linear infinite;
  width: fit-content;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  ${ClientsScrollContainer}:hover & {
    animation-play-state: paused;
  }
`;

export const ClientItem = styled.div`
  white-space: nowrap;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
`;

export const ClientLogo = styled.img`
  height: 2.5rem;
  width: auto;
  max-width: 9.375rem;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  ${ClientItem}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }

  /* Specific logo adjustments */
  &[alt="Adevinta"] {
    height: 2rem;
  }

  &[alt="Accenture"] {
    transform: translateY(-2px);
  }

  &[alt="Banco Santander"] {
    transform: translateY(-3px);
  }

  &[alt="Bayonet"] {
    transform: translateY(2px);
  }

  &[alt="Acklen Avenue"] {
    transform: translateY(-2px);
  }

  &[alt="Manzana Verde"] {
    transform: translateY(1px);
  }
`;

export const ClientsSubtitle = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 1rem;
`;
