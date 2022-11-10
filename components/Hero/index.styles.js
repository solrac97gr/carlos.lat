import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 10% 0 10%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 0 0 0;
  }
`;
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PresentationContainer = styled.div``;
export const ExperienceContainer = styled.div``;

export const Title = styled.h4`
  font-size: 55px;
  font-weight: 400;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 34px;
  }
  margin-bottom: 8px;
`;
export const SubTitle = styled.h3`
  font-size: 21px;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 8px;
`;
export const Tag = styled.h2`
  font-size: 13px;
  font-weight: 400;
  background-color: #63f3ab;
  max-width: 200px;
  padding: 8px;
  border-radius: 3px;
  color: black;
  margin: 0px;
  margin-bottom: 8px;
`;
export const Description = styled.h1`
  font-size: 21px;
  font-weight: 400;
  color: #95989f;
  margin: 0px;
  margin-bottom: 13px;
`;
export const LinkHero = styled.a`
  color: #63f3ab;
  text-decoration: underline;
  font-size: 21px;
  cursor: pointer;
`;
export const ExperienceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ExperienceYears = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ExperienceProjects = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ExperienceNumber = styled.span`
  font-size: 45px;
`;
export const ExperienceText = styled.div`
  width: 90px;
  margin: auto;
  margin-left:3px ;
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: #393640;
  border-radius: 100%;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
  }
`;
