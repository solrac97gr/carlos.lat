import { BsFillFolderFill } from "react-icons/bs";
import {
  SiGoland,
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiJson,
  SiDocker,
  SiGit
} from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { BsFileEarmarkCodeFill, BsCaretDownFill } from "react-icons/bs";
import {
  Container,
  SubContainer,
  FileNameContainer,
  FileName,
} from "./index.styles";

const size = 21;

const RenderExtensionIcon = (extension) => {
  switch (extension) {
    case "go":
      return <SiGoland size={size} color="#3AB4F2" />;
    case "rs":
      return <FaRust size={size} color="#DE5246" />;
    case "js":
      return <SiJavascript size={size} color="yellow" />;
    case "json":
      return <SiJson size={size} color="green" />;
    case "html":
      return <SiHtml5 size={size} color="blue" />;
    case "css":
      return <SiCsswizardry size={size} color="orange" />;
    case "docker":
      return <SiDocker size={size} color="skyblue" />;
    case "gitignore":
      return <SiGit size={size} color="orange" />;
    default:
      return <BsFileEarmarkCodeFill size={size} color="gray" />;
  }
};

const ExtractExtension = (filename) => {
  return filename === "dockerfile"?"docker":filename.split(".").pop();
};

const RenderTree = (tree) => {
  return tree.map((el) => {
    if (el.type == "file") {
      return (
        <FileNameContainer key={el.name}>
          {RenderExtensionIcon(ExtractExtension(el.name))}
          <FileName>{el.name}</FileName>
        </FileNameContainer>
      );
    }
    return (
      <div key={el.name}>
        <FileNameContainer>
          <BsFillFolderFill color="#63f3ab" size={size} />
          <FileName>{el.name}</FileName>
        </FileNameContainer>
        <SubContainer>{RenderTree(el.content)}</SubContainer>
      </div>
    );
  });
};

export const FolderStructure = ({ tree }) => {
  return <Container>{RenderTree(tree)}</Container>;
};
