import {
  Section,
  Container,
  Content,
  Title,
  Description,
  StatsGrid,
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel,
  WhyChooseBox,
  WhyChooseTitle,
  FeatureList,
  FeatureItem,
  CheckIcon,
} from "./index.styles";
import { YEARS_OF_EXPERIENCE } from "../../lib/consts";

export const About = () => {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Title>Tu Socio de Confianza en Innovación</Title>
          <Description>
            Veo la tecnología como tu ventaja competitiva. Como profesional orientado a datos, mi misión es aprovechar el poder de la inteligencia artificial y el análisis avanzado para resolver desafíos complejos y desbloquear tu máximo potencial en un mundo digital. Soy más que un consultor; soy tu socio en innovación.
          </Description>

          <StatsGrid>
            <StatCard>
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </StatIcon>
              <StatNumber>{YEARS_OF_EXPERIENCE}+ Años</StatNumber>
              <StatLabel>Experiencia en la industria</StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </StatIcon>
              <StatNumber>20+ Proyectos</StatNumber>
              <StatLabel>Entregados exitosamente en todo el mundo</StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </StatIcon>
              <StatNumber>24/7 Soporte</StatNumber>
              <StatLabel>Asistencia dedicada cuando la necesites</StatLabel>
            </StatCard>
          </StatsGrid>

          <WhyChooseBox>
            <WhyChooseTitle>¿Por Qué Trabajar Conmigo?</WhyChooseTitle>
            <FeatureList>
              <FeatureItem>
                <CheckIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </CheckIcon>
                <span>
                  <strong>Enfoque Basado en Datos:</strong> Adapto cada solución a tus desafíos y objetivos únicos.
                </span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </CheckIcon>
                <span>
                  <strong>Experiencia en IA y Análisis:</strong> Con más de {YEARS_OF_EXPERIENCE} años de experiencia trabajando con empresas líderes en la industria, aporto un profundo conocimiento técnico.
                </span>
              </FeatureItem>
              <FeatureItem>
                <CheckIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </CheckIcon>
                <span>
                  <strong>Orientado a Resultados:</strong> Me enfoco en entregar resultados medibles que mejoren tu rentabilidad.
                </span>
              </FeatureItem>
            </FeatureList>
          </WhyChooseBox>
        </Content>
      </Container>
    </Section>
  );
};
