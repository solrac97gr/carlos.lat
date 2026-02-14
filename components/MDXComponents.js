import { Podcast } from "./Podcast";
import { Gist } from "./Gist";
import { BlogLink } from "./BlogLink";
import { EditPost } from "./EditPost";
import { FolderStructure } from "./FolderStructure";
import { SocialShareButtons } from "./SocialShareButtons";
import { NewsletterSubscribe } from "./NewsletterSubscribe";
import { CodeSnippet } from "./CodeSnipet";
import { PromoBanner } from "./PromoBanner";
import {CodeComparison} from "./CodeComparison"
import { MermaidDiagram } from "./MermaidDiagram";
import { Table, Thead, Tbody, Th, Td, Tr } from "./Table";
import Image from "next/image";

const components = {
  PromoBanner,
  CodeSnippet,
  MermaidDiagram,
  NewsletterSubscribe,
  SocialShareButtons,
  FolderStructure,
  EditPost,
  BlogLink,
  Podcast,
  Gist,
  CodeComparison,
  table: Table,
  thead: Thead,
  tbody: Tbody,
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
