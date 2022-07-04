import {
  NavbarContainer,
  NameContainer,
  FirstName,
  LastName,
  SocialIcon,
} from "./index.style";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const size = 25;

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
          <FaTwitter size={size} color={"#1DA1F2"} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/carlos97gr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={size} color={"#0077B5"} />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/carlos97cgr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={size} color={" #833AB4"} />
        </SocialIcon>
        <SocialIcon
          href="https://www.youtube.com/channel/UC-xrCcsYNYMs4iIvAja0Gig"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={size} color={"#FF0000"} />
        </SocialIcon>
      </div>
    </NavbarContainer>
  );
};
