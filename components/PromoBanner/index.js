import { Container, Text, CallToAction, Button } from "./index.styles";

export const PromoBanner = () => {
    return (
      <Container>
        <Text>
          La clave para ser un buen programador es mantenerse en constante
          aprendizaje. 👉🏽
        </Text>
        <CallToAction href={"/cursos"}>
          <Button>Ver Cursos</Button>
        </CallToAction>
      </Container>
    );
}