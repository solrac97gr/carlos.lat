import { Podcast } from "./Podcast";
import { Gist } from "./Gist";
import { BlogLink } from "./BlogLink";
import { EditPost } from "./EditPost";
import { FolderStructure } from "./FolderStructure";
import Image from "next/image";

const components = {
  FolderStructure,
  EditPost,
  BlogLink,
  Podcast,
  Gist,
  img: (props) => <Image {...props}></Image>,
  p: (props)=> <p style={{textAlign:"justify"}}>{props.children}</p>
};

export default components;
