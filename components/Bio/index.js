import { ACTUAL_COMPANY, AGE, ACTUAL_CAMERA } from "../../lib/consts";
import { Container, LinkStyled, Content } from "./index.styles";
import { ReserveMeeting } from "../ReserveMeeting";
import { logEvent } from "../../lib/analytics";

export const Bio = () => {
  return (
    <Container>
      <h1>Sobre mi 👨🏽‍💻</h1>
      <Content>
        Mi nombre es Carlos García, soy de Perú 🇵🇪 de la ciudad de Talara tengo{" "}
        {AGE} años y actualmente estoy viajando por el mundo y trabajando como
        desarrollador backend usando Go en {ACTUAL_COMPANY}, aprendí a programar
        cuando tenía 12 años cuando estaba en la escuela, mi primer lenguaje de
        programación fue Python. Me gusta mucho tomar fotos en formato analógico
        mi cámara actual es {ACTUAL_CAMERA} y los rollos que más uso son el
        Ilford HP5+ y Kodad Gold en Instagram podrán ver algunas fotos de éste
        interesante Hobby. Espero poder visitar todos los países del mundo y
        compartir todos mis conocimientos en programación en este blog.
      </Content>
      <LinkStyled
        onClick={() => {
          logEvent("Button", "Download_Resume");
        }}
        href="https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/pdf%2FProfile.pdf?alt=media&token=821db37a-f291-4ef0-a5d2-5a65e71509b1"
        target="_blank"
      >
        Descargar resumen
      </LinkStyled>
      <ReserveMeeting />
    </Container>
  );
};
