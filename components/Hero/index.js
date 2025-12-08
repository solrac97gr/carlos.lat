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
import { useLanguage } from "../../lib/LanguageContext";

export const Hero = ({ numberOfPosts }) => {
  const { t, language } = useLanguage();
  
  const whatsappText = language === 'en' 
    ? 'Hi%20I%20would%20like%20to%20work%20with%20you'
    : 'Hola%20me%20gustar%C3%ADa%20trabajar%20contigo';
  return (
    <Container>
      <HeroSection>
        <GridContainer>
          <CanvasColumn>
            <ThreeCanvas />
          </CanvasColumn>
          
          <ContentColumn>
            <Title>
              {t('hero.titlePart1')}<br />
              <TitleAccent>{t('hero.titlePart2')}</TitleAccent>
            </Title>
            <Subtitle>
              {t('hero.subtitle')}
            </Subtitle>
            <ButtonGroup>
              <Link href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`} passHref>
                <PrimaryButton
                  onClick={() => {
                    logEvent("Button", "Book_Consultation");
                  }}
                  href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
                  target="_blank"
                >
                  {t('hero.cta1')}
                </PrimaryButton>
              </Link>
              <Link href="/blog" passHref>
                <SecondaryButton
                  onClick={() => {
                    logEvent("Button", "View_Blog");
                  }}
                  href="/blog"
                >
                  {t('hero.cta2')}
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
            {t('hero.clientsSubtitle')}
          </ClientsSubtitle>
        </ClientsSection>
      </HeroSection>
    </Container>
  );
};
