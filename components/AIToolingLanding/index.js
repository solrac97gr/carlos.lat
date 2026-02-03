import {
  Container,
  FloatingLanguageSwitch,
  LanguageButton,
  HeroSection,
  Badge,
  Title,
  Subtitle,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionTitle,
  SectionSubtitle,
  ProblemGrid,
  ProblemCard,
  ProblemTitle,
  ProblemDescription,
  SolutionGrid,
  SolutionStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  UseCasesGrid,
  UseCaseCard,
  UseCaseTitle,
  UseCaseDescription,
  ProcessTimeline,
  ProcessPhase,
  PhaseTitle,
  PhaseDescription,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialHeader,
  TestimonialAvatar,
  TestimonialInfo,
  TestimonialName,
  TestimonialRole,
  TestimonialCompany,
  TestimonialStars,
  TestimonialText,
  PricingGrid,
  PricingCard,
  PricingBadge,
  PricingHeader,
  PricingName,
  PricingPrice,
  PricingIdeal,
  PricingFeatures,
  PricingFeature,
  PricingROI,
  PricingCTA,
  PricingGuarantee,
  FAQGrid,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  CTASection,
  CTATitle,
  CTASubtitle,
  CTAButton,
  CTAAlternative,
  SimpleFooter,
  FooterContent,
  FooterText,
  FooterLinks,
  FooterLink,
  Copyright,
} from "./index.styles";
import { useLanguage } from "../../lib/LanguageContext";
import { PHONE_NUMBER } from "../../lib/consts";
import { logEvent } from "../../lib/analytics";
import { useState, useEffect } from "react";
import Link from "next/link";

export const AIToolingLanding = ({ hideLanguageSwitcher = false }) => {
  const { t, language, changeLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappText = !mounted
    ? "Hola%20me%20gustar%C3%ADa%20hablar%20sobre%20herramientas%20de%20IA"
    : language === "en"
    ? "Hi%20I%20would%20like%20to%20discuss%20AI%20tooling%20services"
    : "Hola%20me%20gustar%C3%ADa%20hablar%20sobre%20herramientas%20de%20IA";

  const handleCTAClick = () => {
    logEvent("Button", "AI_Tooling_CTA");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    logEvent("Language", "Change", lang);
  };

  return (
    <Container>
      {/* Floating Language Switcher - Hidden when using separate language URLs */}
      {!hideLanguageSwitcher && (
        <FloatingLanguageSwitch>
          <LanguageButton
            isActive={language === "en"}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </LanguageButton>
          <LanguageButton
            isActive={language === "es"}
            onClick={() => handleLanguageChange("es")}
          >
            ES
          </LanguageButton>
        </FloatingLanguageSwitch>
      )}

      {/* Hero Section */}
      <HeroSection>
        <Badge>{t("aiTooling.hero.badge")}</Badge>
        <Title>{t("aiTooling.hero.title")}</Title>
        <Subtitle>{t("aiTooling.hero.subtitle")}</Subtitle>
        <Description>{t("aiTooling.hero.description")}</Description>
        <ButtonGroup>
          <Link
            href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
            passHref
          >
            <PrimaryButton
              onClick={handleCTAClick}
              href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
              target="_blank"
            >
              {t("aiTooling.hero.cta")}
            </PrimaryButton>
          </Link>
          <SecondaryButton
            as="button"
            onClick={() => scrollToSection("how-it-works")}
          >
            {t("aiTooling.hero.ctaSecondary")}
          </SecondaryButton>
        </ButtonGroup>
        <Description style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
          {t("aiTooling.hero.trustBar")}
        </Description>
      </HeroSection>

      {/* Problem Section */}
      <Section style={{ background: "#f9fafb" }}>
        <SectionTitle>{t("aiTooling.problem.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.problem.subtitle")}</SectionSubtitle>
        <ProblemGrid>
          <ProblemCard>
            <ProblemTitle>{t("aiTooling.problem.point1")}</ProblemTitle>
            <ProblemDescription>
              {t("aiTooling.problem.point1Desc")}
            </ProblemDescription>
          </ProblemCard>
          <ProblemCard>
            <ProblemTitle>{t("aiTooling.problem.point2")}</ProblemTitle>
            <ProblemDescription>
              {t("aiTooling.problem.point2Desc")}
            </ProblemDescription>
          </ProblemCard>
          <ProblemCard>
            <ProblemTitle>{t("aiTooling.problem.point3")}</ProblemTitle>
            <ProblemDescription>
              {t("aiTooling.problem.point3Desc")}
            </ProblemDescription>
          </ProblemCard>
        </ProblemGrid>
      </Section>

      {/* Solution Section */}
      <Section>
        <SectionTitle>{t("aiTooling.solution.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.solution.subtitle")}</SectionSubtitle>
        <SolutionGrid>
          <SolutionStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>{t("aiTooling.solution.step1Title")}</StepTitle>
              <StepDescription>
                {t("aiTooling.solution.step1Desc")}
              </StepDescription>
            </StepContent>
          </SolutionStep>
          <SolutionStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>{t("aiTooling.solution.step2Title")}</StepTitle>
              <StepDescription>
                {t("aiTooling.solution.step2Desc")}
              </StepDescription>
            </StepContent>
          </SolutionStep>
          <SolutionStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>{t("aiTooling.solution.step3Title")}</StepTitle>
              <StepDescription>
                {t("aiTooling.solution.step3Desc")}
              </StepDescription>
            </StepContent>
          </SolutionStep>
          <SolutionStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>{t("aiTooling.solution.step4Title")}</StepTitle>
              <StepDescription>
                {t("aiTooling.solution.step4Desc")}
              </StepDescription>
            </StepContent>
          </SolutionStep>
        </SolutionGrid>
      </Section>

      {/* Benefits Section */}
      <Section style={{ background: "#f9fafb" }}>
        <SectionTitle>{t("aiTooling.benefits.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.benefits.subtitle")}</SectionSubtitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </BenefitIcon>
            <BenefitTitle>{t("aiTooling.benefits.benefit1")}</BenefitTitle>
            <BenefitDescription>
              {t("aiTooling.benefits.benefit1Desc")}
            </BenefitDescription>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4" />
                <path d="m16.2 7.8 2.9-2.9" />
                <path d="M18 12h4" />
                <path d="m16.2 16.2 2.9 2.9" />
                <path d="M12 18v4" />
                <path d="m4.9 19.1 2.9-2.9" />
                <path d="M2 12h4" />
                <path d="m4.9 4.9 2.9 2.9" />
              </svg>
            </BenefitIcon>
            <BenefitTitle>{t("aiTooling.benefits.benefit2")}</BenefitTitle>
            <BenefitDescription>
              {t("aiTooling.benefits.benefit2Desc")}
            </BenefitDescription>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </BenefitIcon>
            <BenefitTitle>{t("aiTooling.benefits.benefit3")}</BenefitTitle>
            <BenefitDescription>
              {t("aiTooling.benefits.benefit3Desc")}
            </BenefitDescription>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </BenefitIcon>
            <BenefitTitle>{t("aiTooling.benefits.benefit4")}</BenefitTitle>
            <BenefitDescription>
              {t("aiTooling.benefits.benefit4Desc")}
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      {/* Use Cases Section */}
      <Section>
        <SectionTitle>{t("aiTooling.useCases.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.useCases.subtitle")}</SectionSubtitle>
        <UseCasesGrid>
          <UseCaseCard>
            <UseCaseTitle>{t("aiTooling.useCases.case1Title")}</UseCaseTitle>
            <UseCaseDescription>
              {t("aiTooling.useCases.case1Desc")}
            </UseCaseDescription>
          </UseCaseCard>
          <UseCaseCard>
            <UseCaseTitle>{t("aiTooling.useCases.case2Title")}</UseCaseTitle>
            <UseCaseDescription>
              {t("aiTooling.useCases.case2Desc")}
            </UseCaseDescription>
          </UseCaseCard>
          <UseCaseCard>
            <UseCaseTitle>{t("aiTooling.useCases.case3Title")}</UseCaseTitle>
            <UseCaseDescription>
              {t("aiTooling.useCases.case3Desc")}
            </UseCaseDescription>
          </UseCaseCard>
          <UseCaseCard>
            <UseCaseTitle>{t("aiTooling.useCases.case4Title")}</UseCaseTitle>
            <UseCaseDescription>
              {t("aiTooling.useCases.case4Desc")}
            </UseCaseDescription>
          </UseCaseCard>
        </UseCasesGrid>
      </Section>

      {/* Process Section */}
      <Section id="how-it-works" style={{ background: "#f9fafb" }}>
        <SectionTitle>{t("aiTooling.process.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.process.subtitle")}</SectionSubtitle>
        <ProcessTimeline>
          <ProcessPhase>
            <PhaseTitle>{t("aiTooling.process.phase1")}</PhaseTitle>
            <PhaseDescription>
              {t("aiTooling.process.phase1Desc")}
            </PhaseDescription>
          </ProcessPhase>
          <ProcessPhase>
            <PhaseTitle>{t("aiTooling.process.phase2")}</PhaseTitle>
            <PhaseDescription>
              {t("aiTooling.process.phase2Desc")}
            </PhaseDescription>
          </ProcessPhase>
          <ProcessPhase>
            <PhaseTitle>{t("aiTooling.process.phase3")}</PhaseTitle>
            <PhaseDescription>
              {t("aiTooling.process.phase3Desc")}
            </PhaseDescription>
          </ProcessPhase>
          <ProcessPhase>
            <PhaseTitle>{t("aiTooling.process.phase4")}</PhaseTitle>
            <PhaseDescription>
              {t("aiTooling.process.phase4Desc")}
            </PhaseDescription>
          </ProcessPhase>
        </ProcessTimeline>
      </Section>

      {/* Pricing Section */}
      <Section>
        <SectionTitle>{t("aiTooling.pricing.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.pricing.subtitle")}</SectionSubtitle>
        <PricingGrid>
          {/* Starter Package */}
          <PricingCard>
            <PricingHeader>
              <PricingName>{t("aiTooling.pricing.starter.name")}</PricingName>
              <PricingPrice>{t("aiTooling.pricing.starter.price")}</PricingPrice>
              <PricingIdeal>{t("aiTooling.pricing.starter.ideal")}</PricingIdeal>
            </PricingHeader>
            <PricingFeatures>
              {t("aiTooling.pricing.starter.features").map((feature, index) => (
                <PricingFeature key={index}>{feature}</PricingFeature>
              ))}
            </PricingFeatures>
            <PricingROI>{t("aiTooling.pricing.starter.roi")}</PricingROI>
            <Link href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`} passHref>
              <PricingCTA
                onClick={handleCTAClick}
                href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
                target="_blank"
              >
                {t("aiTooling.pricing.starter.cta")}
              </PricingCTA>
            </Link>
          </PricingCard>

          {/* Pro Package (Featured) */}
          <PricingCard featured>
            <PricingBadge>{t("aiTooling.pricing.pro.badge")}</PricingBadge>
            <PricingHeader>
              <PricingName>{t("aiTooling.pricing.pro.name")}</PricingName>
              <PricingPrice>{t("aiTooling.pricing.pro.price")}</PricingPrice>
              <PricingIdeal>{t("aiTooling.pricing.pro.ideal")}</PricingIdeal>
            </PricingHeader>
            <PricingFeatures>
              {t("aiTooling.pricing.pro.features").map((feature, index) => (
                <PricingFeature key={index}>{feature}</PricingFeature>
              ))}
            </PricingFeatures>
            <PricingROI>{t("aiTooling.pricing.pro.roi")}</PricingROI>
            <Link href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`} passHref>
              <PricingCTA
                primary
                onClick={handleCTAClick}
                href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
                target="_blank"
              >
                {t("aiTooling.pricing.pro.cta")}
              </PricingCTA>
            </Link>
          </PricingCard>

          {/* Enterprise Package */}
          <PricingCard>
            <PricingHeader>
              <PricingName>{t("aiTooling.pricing.enterprise.name")}</PricingName>
              <PricingPrice>{t("aiTooling.pricing.enterprise.price")}</PricingPrice>
              <PricingIdeal>{t("aiTooling.pricing.enterprise.ideal")}</PricingIdeal>
            </PricingHeader>
            <PricingFeatures>
              {t("aiTooling.pricing.enterprise.features").map((feature, index) => (
                <PricingFeature key={index}>{feature}</PricingFeature>
              ))}
            </PricingFeatures>
            <PricingROI>{t("aiTooling.pricing.enterprise.roi")}</PricingROI>
            <Link href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`} passHref>
              <PricingCTA
                onClick={handleCTAClick}
                href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
                target="_blank"
              >
                {t("aiTooling.pricing.enterprise.cta")}
              </PricingCTA>
            </Link>
          </PricingCard>
        </PricingGrid>
        <PricingGuarantee>{t("aiTooling.pricing.guarantee")}</PricingGuarantee>
      </Section>

      {/* FAQ Section */}
      <Section style={{ background: "#f9fafb" }}>
        <SectionTitle>{t("aiTooling.faq.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.faq.subtitle")}</SectionSubtitle>
        <FAQGrid>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <FAQItem key={num}>
              <FAQQuestion>{t(`aiTooling.faq.question${num}`)}</FAQQuestion>
              <FAQAnswer>{t(`aiTooling.faq.answer${num}`)}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQGrid>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <SectionTitle>{t("aiTooling.testimonials.title")}</SectionTitle>
        <SectionSubtitle>{t("aiTooling.testimonials.subtitle")}</SectionSubtitle>
        <TestimonialsGrid>
          {[1, 2, 3].map((num) => {
            const testimonial = t(`aiTooling.testimonials.testimonial${num}`);
            const initials = testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <TestimonialCard key={num}>
                <TestimonialHeader>
                  <TestimonialAvatar>{initials}</TestimonialAvatar>
                  <TestimonialInfo>
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialRole>
                      {testimonial.role} at{" "}
                      <TestimonialCompany>
                        {testimonial.company}
                      </TestimonialCompany>
                    </TestimonialRole>
                  </TestimonialInfo>
                </TestimonialHeader>
                <TestimonialStars>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </TestimonialStars>
                <TestimonialText>&ldquo;{testimonial.text}&rdquo;</TestimonialText>
              </TestimonialCard>
            );
          })}
        </TestimonialsGrid>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <CTATitle>{t("aiTooling.cta.title")}</CTATitle>
        <CTASubtitle>{t("aiTooling.cta.subtitle")}</CTASubtitle>
        <Description style={{ color: '#e0e7ff', maxWidth: '42rem', margin: '0 auto 2rem' }}>
          <strong style={{ display: 'block', fontSize: '1.125rem', marginBottom: '1rem' }}>
            {t("aiTooling.cta.assessmentBenefits")}
          </strong>
          <div style={{ textAlign: 'left', display: 'inline-block' }}>
            <div style={{ marginBottom: '0.5rem' }}>✓ {t("aiTooling.cta.benefit1")}</div>
            <div style={{ marginBottom: '0.5rem' }}>✓ {t("aiTooling.cta.benefit2")}</div>
            <div style={{ marginBottom: '0.5rem' }}>✓ {t("aiTooling.cta.benefit3")}</div>
            <div style={{ marginBottom: '0.5rem' }}>✓ {t("aiTooling.cta.benefit4")}</div>
          </div>
        </Description>
        <Link
          href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
          passHref
        >
          <CTAButton
            onClick={handleCTAClick}
            href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`}
            target="_blank"
          >
            {t("aiTooling.cta.button")}
          </CTAButton>
        </Link>
        <CTAAlternative>
          {t("aiTooling.cta.alternative")}{" "}
          <a href="mailto:cgarciarosales97@gmail.com">
            cgarciarosales97@gmail.com
          </a>
        </CTAAlternative>
        <Description style={{ color: '#c7d2fe', fontSize: '0.875rem', marginTop: '1.5rem', fontStyle: 'italic' }}>
          {t("aiTooling.cta.limited")}
        </Description>
        <Description style={{ color: '#fbbf24', fontSize: '1rem', marginTop: '1rem', fontWeight: '600' }}>
          🔒 {t("aiTooling.cta.guarantee")}
        </Description>
      </CTASection>

      {/* Simple Footer */}
      <SimpleFooter>
        <FooterContent>
          <FooterText>
            {language === "en"
              ? "AI Tooling & Developer Productivity Consulting"
              : "Consultoría en Herramientas de IA y Productividad"}
          </FooterText>
          <FooterLinks>
            <FooterLink href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${whatsappText}`} target="_blank">
              WhatsApp
            </FooterLink>
            <FooterLink href="mailto:cgarciarosales97@gmail.com">
              Email
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/carlos97gr/" target="_blank" rel="noreferrer">
              LinkedIn
            </FooterLink>
            <FooterLink href="https://github.com/solrac97gr" target="_blank" rel="noreferrer">
              GitHub
            </FooterLink>
          </FooterLinks>
          <Copyright>
            © {new Date().getFullYear()} Carlos García. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </Copyright>
        </FooterContent>
      </SimpleFooter>
    </Container>
  );
};
