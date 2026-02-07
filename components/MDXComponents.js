import { Podcast } from "./Podcast";
import { Gist } from "./Gist";
import { BlogLink } from "./BlogLink";
import { EditPost } from "./EditPost";
import { FolderStructure } from "./FolderStructure";
import { SocialShareButtons } from "./SocialShareButtons";
import { NewsletterSubscribe } from "./NewsletterSubscribe";
import { CodeSnippet } from "./CodeSnipet";
import { PromoBanner } from "./PromoBanner";
import {CodeComparition} from "./CodeComparition"
import { Table, Thead, Th, Td, Tr } from "./Table";
import Image from "next/image";

const components = {
  PromoBanner,
  CodeSnippet,
  NewsletterSubscribe,
  SocialShareButtons,
  FolderStructure,
  EditPost,
  BlogLink,
  Podcast,
  Gist,
  CodeComparition,
  table: Table,
  thead: Thead,
  th: Th,
  td: Td,
  tr: Tr,
  img: (props) => (
    <Image
      {...props}
      alt={props.alt || ""}
      style={{
        borderRadius: "5px",
      }}
    ></Image>
  ),
  p: (props) => <p style={{ textAlign: "justify" }}>{props.children}</p>,
};

export default components;
