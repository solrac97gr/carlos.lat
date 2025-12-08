/* eslint-disable @next/next/no-img-element */
import {
  Container,
  HeroSection,
  GridContainer,
  CanvasColumn,
  ContentColumn,
  Title,
  TitleAccent,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ClientsSection,
  ClientsScrollContainer,
  ClientsScroll,
  ClientItem,
  ClientLogo,
  ClientsSubtitle,
} from "./index.styles";
import Link from "next/link";
import { logEvent } from "../../lib/analytics";
import { PHONE_NUMBER } from "../../lib/consts";
import { ThreeCanvas } from "../ThreeCanvas";

export const Hero = ({ numberOfPosts }) => {
  return (
    <Container>
      <HeroSection>
        <GridContainer>
          <CanvasColumn>
            <ThreeCanvas />
          </CanvasColumn>
          
          <ContentColumn>
            <Title>
              Asegura el Futuro de tu Negocio con<br />
              <TitleAccent>IA e Inteligencia de Datos</TitleAccent>
            </Title>
            <Subtitle>
              Ayudo a las empresas a aprovechar la inteligencia artificial y estrategias basadas en datos para optimizar la tecnología, desbloquear nuevas oportunidades e impulsar un crecimiento inteligente.
            </Subtitle>
            <ButtonGroup>
              <Link href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Hola%20me%20gustar%C3%ADa%20trabajar%20contigo`} passHref>
                <PrimaryButton
                  onClick={() => {
                    logEvent("Button", "Book_Consultation");
                  }}
                  href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=Hola%20me%20gustar%C3%ADa%20trabajar%20contigo`}
                  target="_blank"
                >
                  Reservar Consulta
                </PrimaryButton>
              </Link>
              <Link href="/blog" passHref>
                <SecondaryButton
                  onClick={() => {
                    logEvent("Button", "View_Blog");
                  }}
                  href="/blog"
                >
                  Ver Blog
                </SecondaryButton>
              </Link>
            </ButtonGroup>
          </ContentColumn>
        </GridContainer>

        <ClientsSection>
          <ClientsScrollContainer>
            <ClientsScroll>
              <ClientItem>
                <ClientLogo src="/images/accenture.png" alt="Accenture" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/adevinta.png" alt="Adevinta" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/banco-santander.png" alt="Banco Santander" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/bayonet.svg" alt="Bayonet" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/acklen.webp" alt="Acklen Avenue" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/manzana-verde.svg" alt="Manzana Verde" />
              </ClientItem>
              {/* Duplicate for seamless loop */}
              <ClientItem>
                <ClientLogo src="/images/accenture.png" alt="Accenture" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/adevinta.png" alt="Adevinta" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/banco-santander.png" alt="Banco Santander" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/bayonet.svg" alt="Bayonet" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/acklen.webp" alt="Acklen Avenue" />
              </ClientItem>
              <ClientItem>
                <ClientLogo src="/images/manzana-verde.svg" alt="Manzana Verde" />
              </ClientItem>
            </ClientsScroll>
          </ClientsScrollContainer>
          <ClientsSubtitle>
            Tengo experiencia trabajando con clientes empresariales en los sectores bancario, tecnológico y de consultoría
          </ClientsSubtitle>
        </ClientsSection>
      </HeroSection>
    </Container>
  );
};
