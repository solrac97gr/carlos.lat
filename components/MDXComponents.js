import { Podcast } from "./Podcast";
import { Gist } from "./Gist";
import { BlogLink } from "./BlogLink";
import { EditPost } from "./EditPost";
import { FolderStructure } from "./FolderStructure";
import { SocialShareButtons } from "./SocialShareButtons";
import { NewsletterSubscribe } from "./NewsletterSubscribe";
import Image from "next/image";

const components = {
  NewsletterSubscribe,
  SocialShareButtons,
  FolderStructure,
  EditPost,
  BlogLink,
  Podcast,
  Gist,
  img: (props) => (
    <Image
      {...props}
      style={{
        borderRadius: "5px",
      }}
    ></Image>
  ),
  p: (props) => <p style={{ textAlign: "justify" }}>{props.children}</p>,
};

export default components;
