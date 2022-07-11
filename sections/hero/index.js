/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Description,
  ExperienceNumber,
  ExperienceProjects,
  ExperienceRow,
  ExperienceText,
  ExperienceYears,
  LeftColumn,
  LinkHero,
  RightColumn,
  SubTitle,
  Tag,
  Title,
  ImageContainer,
  PresentationContainer,
  ExperienceContainer,
} from "./index.style";
import Link from "next/link";
import Image from "next/future/image";
import { PHONE_NUMBER } from "../../consts";
export const Hero = () => {
  return (
    <Container>
      <LeftColumn>
        <PresentationContainer>
          <Title>Hello World 🌎!</Title>
          <SubTitle>Soy Carlos García</SubTitle>
          <Tag>Desarrollador FullStack</Tag>
          <Description>Desarrollo usando Go, React y Mongo ❤️</Description>
          <Link
            href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Hola%20me%20gustar%C3%ADa%20trabajar%20contigo`}
          >
            <LinkHero>Trabajemos juntos</LinkHero>
          </Link>
        </PresentationContainer>
        <ExperienceContainer>
          <ExperienceRow>
            <ExperienceYears>
              <ExperienceNumber>4</ExperienceNumber>
              <ExperienceText>años de experiencia</ExperienceText>
            </ExperienceYears>
            <ExperienceProjects>
              <ExperienceNumber>14</ExperienceNumber>
              <ExperienceText>proyectos completados</ExperienceText>
            </ExperienceProjects>
          </ExperienceRow>
        </ExperienceContainer>
      </LeftColumn>
      <RightColumn>
        <ImageContainer>
          <img
            src="https://newporfolio-4b2a1.firebaseapp.com/static/profile-4475f23252283d7f7f0f4830790772a4.png"
            alt="carlos garcia"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            loading="lazy"
          ></img>
        </ImageContainer>
      </RightColumn>
    </Container>
  );
};
