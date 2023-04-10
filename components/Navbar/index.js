import {
  NavbarContainer,
  NameContainer,
  FirstName,
  LastName,
  SocialIcon,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkText,
  BurgerStyled,
} from "./index.styles";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { useIsMobile } from "../../hooks/useIsMobile";
import { BuyMeCoffeeButton } from "../BuyMeCoffeeButton";

const size = 21;

export const Navbar = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <NavbarContainer>
      {isMobile && <BurgerStyled />}
      <NameContainer href="/">
        <a>
          <FirstName>Carlos</FirstName>
          <LastName>García</LastName>
        </a>
      </NameContainer>
      <NavbarLinkContainer>
        <NavbarLink href="/">
          <NavbarLinkText className={router.pathname == "/" ? "isActive" : ""}>
            {router.pathname === "/" ? "<Inicio>" : "Inicio"}
          </NavbarLinkText>
        </NavbarLink>
        <NavbarLink href="/blog">
          <NavbarLinkText
            className={router.pathname.includes("/blog") ? "isActive" : ""}
          >
            {router.pathname.includes("/blog") ? "<Blog>" : "Blog"}
          </NavbarLinkText>
        </NavbarLink>
        <NavbarLink href="/mi-mapa">
          <NavbarLinkText
            className={router.pathname.includes("/mi-mapa") ? "isActive" : ""}
          >
            {router.pathname.includes("/mi-mapa")
              ? "<Mis viajes>"
              : "Mis viajes"}
          </NavbarLinkText>
        </NavbarLink>
        <NavbarLink href="/sobre-mi">
          <NavbarLinkText
            className={router.pathname.includes("/sobre-mi") ? "isActive" : ""}
          >
            {router.pathname.includes("/sobre-mi") ? "<Sobre mi>" : "Sobre mi"}
          </NavbarLinkText>
        </NavbarLink>
      </NavbarLinkContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SocialIcon
          href="https://twitter.com/carlos97cgr"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size={size} color={"#FFF"} />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/carlos97gr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={size} color={"#FFF"} />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com/carlos97cgr/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={size} color={" #FFF"} />
        </SocialIcon>
        <SocialIcon
          href="https://github.com/solrac97gr"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={size} color={" #FFF"} />
        </SocialIcon>
        <SocialIcon
          href="https://www.youtube.com/channel/UC-xrCcsYNYMs4iIvAja0Gig"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size={size} color={"#FFF"} />
        </SocialIcon>
      </div>
    </NavbarContainer>
  );
};
