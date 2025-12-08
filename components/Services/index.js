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
} from "./index.styles";

export const Services = () => {
  const services = [
    {
      id: "ai-automation",
      title: "Automatizaciones con IA",
      description: "Optimiza tus operaciones e incrementa la productividad integrando agentes de IA personalizados para manejar tareas repetitivas y flujos de trabajo complejos.",
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
      title: "Visualización de Datos",
      description: "Transforma conjuntos de datos complejos en paneles claros e interactivos. Te ayudamos a descubrir insights accionables y tomar decisiones informadas al instante.",
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
      title: "Desarrollo de Software",
      description: "Desde aplicaciones web hasta sistemas empresariales, construimos soluciones de software robustas, escalables y seguras adaptadas a las necesidades específicas de tu negocio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      id: "mvp-validation",
      title: "Validaciones de MVP",
      description: "Lleva tus ideas a la vida de manera rápida y eficiente. Te ayudamos a construir y probar Productos Mínimos Viables para validar conceptos y asegurar el ajuste al mercado.",
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
      title: "Soluciones en la Nube",
      description: "Aprovecha el poder y la escalabilidad de la nube. Proporcionamos servicios expertos para migración, optimización y gestión de tu infraestructura en la nube.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.32-10.95A5 5 0 1 1 19 19Z" />
        </svg>
      )
    },
    {
      id: "ai-education",
      title: "Servicios Educativos de IA",
      description: "Potencia a tu equipo con nuestros programas de capacitación personalizados. Enseñamos a tu personal cómo usar efectivamente las herramientas de IA para aumentar la creatividad y productividad.",
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
          <Title>Servicios Principales</Title>
          <Subtitle>
            Potencio tu negocio con soluciones vanguardistas basadas en datos y diseñadas para el futuro.
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
      </Container>
    </Section>
  );
};
