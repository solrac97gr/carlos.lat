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
} from "./index.styles";
import Link from "next/link";
import Image from "next/future/image";
import { ARTICLES_PUBLISHED, CURRENTLY_IN, NUMBER_OF_VISITED_COUNTRIES, PHONE_NUMBER, YEARS_OF_EXPERIENCE } from "../../lib/consts";
export const Hero = ({numberOfPosts}) => {
  return (
    <Container>
      <LeftColumn>
        <PresentationContainer>
          <Title>Hello World 🌎!</Title>
          <SubTitle>Soy Carlos García nací en Perú 🇵🇪.</SubTitle>
          <Tag>Desarrollador FullStack</Tag>
          <Description>Mi Stack preferido es Go, React y Mongo ❤️. Me encanta viajar 🛩 y actualmente estoy visitando {CURRENTLY_IN}.</Description>
          <Link
            href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Hola%20me%20gustar%C3%ADa%20trabajar%20contigo`}
          >
            <LinkHero
              href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Hola%20me%20gustar%C3%ADa%20trabajar%20contigo`}
              target="_blank"
            >
              Trabajemos juntos
            </LinkHero>
          </Link>
        </PresentationContainer>
        <ExperienceContainer>
          <ExperienceRow>
            <ExperienceYears>
              <ExperienceNumber>{YEARS_OF_EXPERIENCE}</ExperienceNumber>
              <ExperienceText>Años de experiencia</ExperienceText>
            </ExperienceYears>
            <ExperienceYears>
              <ExperienceNumber>{NUMBER_OF_VISITED_COUNTRIES}</ExperienceNumber>
              <ExperienceText>Países visitados</ExperienceText>
            </ExperienceYears>
            <ExperienceProjects>
              <ExperienceNumber>{numberOfPosts}</ExperienceNumber>
              <ExperienceText>Artículos publicados</ExperienceText>
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
