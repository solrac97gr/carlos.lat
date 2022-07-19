import { BsFillFolderFill } from "react-icons/bs";
import {
  SiGoland,
  SiJavascript,
  SiHtml5,
  SiCsswizardry,
  SiJson,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { BsFileEarmarkCodeFill, BsCaretDownFill } from "react-icons/bs";
import { VscCopy } from "react-icons/vsc";
import {
  Container,
  SubContainer,
  FileNameContainer,
  FileName,
} from "./index.styles";
import { CopyButton } from "../CopyButton";

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
  return filename === "dockerfile" ? "docker" : filename.split(".").pop();
};

const BuildCommand = (tree, path) => {
  let cmd = "";
  tree.forEach((entity) => {
    if (entity.type == "file") {
      if (entity.name === "go.mod") {
        return "";
      }
      if (path.length > 0) {
        cmd = `${cmd} touch ${path}/${entity.name} && `;
      } else {
        cmd = `${cmd} touch ${entity.name} && `;
      }
    } else {
      let subCmd;
      if (path.length > 0) {
        cmd = `${cmd} mkdir ${path}/${entity.name} && `;
        subCmd = BuildCommand(entity.content, `${path}/${entity.name}`);
      } else {
        cmd = `${cmd} mkdir ${entity.name} && `;
        subCmd = BuildCommand(entity.content, entity.name);
      }
      cmd = cmd + subCmd;
    }
  });
  return cmd;
};

const BuildFinalScript = (prevCmd) => {
  return prevCmd + "exit";
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
  return (
    <Container>
      <div>{RenderTree(tree)} </div>
      <CopyButton
        onClick={() => {
          const text = BuildFinalScript(BuildCommand(tree, ""));
          navigator.clipboard.writeText(text);
          alert("Comando copiado al portapapeles");
        }}
      />
    </Container>
  );
};
