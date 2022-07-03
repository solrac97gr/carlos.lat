import {
  NavbarContainer,
  NameContainer,
  FirstName,
  LastName,
  SocialIcon,
} from "./index.style";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const size = 21;
const color = "#000000";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NameContainer href="/">
        <a>
          <FirstName>Carlos</FirstName>
          <LastName>García</LastName>
        </a>
      </NameContainer>
      <div>
        <SocialIcon
          href="https://twitter.com/carlosgrowth"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={size} color={color} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/carlos97gr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={size} color={color} />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/carlos97cgr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={size} color={color} />
        </SocialIcon>
        <SocialIcon
          href="https://www.youtube.com/channel/UC-xrCcsYNYMs4iIvAja0Gig"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={size} color={color} />
        </SocialIcon>
      </div>
    </NavbarContainer>
  );
};
