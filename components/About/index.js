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
import { useLanguage } from "../../lib/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  return (
    <Section id="about">
      <Container>
        <Content>
          <Title>{t('about.title')}</Title>
          <Description>
            {t('about.description')}
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
              <StatNumber>{YEARS_OF_EXPERIENCE}+ {t('about.value1Title')}</StatNumber>
              <StatLabel>{t('about.value1Desc')}</StatLabel>
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
              <StatNumber>20+ {t('about.value2Title')}</StatNumber>
              <StatLabel>{t('about.value2Desc')}</StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </StatIcon>
              <StatNumber>24/7 {t('about.value3Title')}</StatNumber>
              <StatLabel>{t('about.value3Desc')}</StatLabel>
            </StatCard>
          </StatsGrid>

          <WhyChooseBox>
            <WhyChooseTitle>{t('about.whyChooseTitle')}</WhyChooseTitle>
            <FeatureList>
              <FeatureItem>
                <CheckIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </CheckIcon>
                <span dangerouslySetInnerHTML={{ __html: t('about.feature1') }} />
              </FeatureItem>
              <FeatureItem>
                <CheckIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </CheckIcon>
                <span dangerouslySetInnerHTML={{ __html: t('about.feature2').replace('{years}', YEARS_OF_EXPERIENCE) }} />
              </FeatureItem>
              <FeatureItem>
                <CheckIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </CheckIcon>
                <span dangerouslySetInnerHTML={{ __html: t('about.feature3') }} />
              </FeatureItem>
            </FeatureList>
          </WhyChooseBox>
        </Content>
      </Container>
    </Section>
  );
};
