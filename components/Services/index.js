import {
  Section,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
  ServiceCard,
  IconWrapper,
  ServiceTitle,
  ServiceDescription,
  HighlightSection,
  HighlightBadge,
  HighlightTitle,
  HighlightDescription,
  HighlightButton,
} from "./index.styles";
import { useLanguage } from "../../lib/LanguageContext";
import Link from "next/link";

export const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      id: "ai-automation",
      title: t('services.aiAutomation.title'),
      description: t('services.aiAutomation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8" />
          <rect x="8" y="8" width="8" height="12" rx="2" />
          <path d="M4 12a8 8 0 0 1 8-8" />
          <path d="M20 12v4h-4" />
          <path d="M16 20a8 8 0 0 0-8-8" />
        </svg>
      )
    },
    {
      id: "data-visualization",
      title: t('services.dataVisualization.title'),
      description: t('services.dataVisualization.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M18 17V8" />
          <path d="M13 17V3" />
          <path d="M8 17v-4" />
        </svg>
      )
    },
    {
      id: "software-development",
      title: t('services.softwareDevelopment.title'),
      description: t('services.softwareDevelopment.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      id: "mvp-validation",
      title: t('services.mvpValidation.title'),
      description: t('services.mvpValidation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 9 5-5" />
          <path d="m11 15-5-5" />
          <path d="m2 15 5-5" />
          <path d="M7 22 17 12" />
          <path d="m22 7-5 5" />
        </svg>
      )
    },
    {
      id: "cloud-solutions",
      title: t('services.cloudSolutions.title'),
      description: t('services.cloudSolutions.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.32-10.95A5 5 0 1 1 19 19Z" />
        </svg>
      )
    },
    {
      id: "ai-education",
      title: t('services.aiEducation.title'),
      description: t('services.aiEducation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      )
    },
  ];

  return (
    <Section id="services">
      <Container>
        <Header>
          <Title>{t('services.title')}</Title>
          <Subtitle>
            {t('services.subtitle')}
          </Subtitle>
        </Header>
        <Grid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </Grid>
        <HighlightSection>
          <HighlightBadge>{t('services.highlight.badge')}</HighlightBadge>
          <HighlightTitle>{t('services.highlight.title')}</HighlightTitle>
          <HighlightDescription>{t('services.highlight.description')}</HighlightDescription>
          <Link href="/landing/ai-tooling" passHref>
            <HighlightButton href="/landing/ai-tooling">
              {t('services.highlight.cta')}
            </HighlightButton>
          </Link>
        </HighlightSection>
      </Container>
    </Section>
  );
};
