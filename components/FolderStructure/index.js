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
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaRust } from "react-icons/fa";
import {
  BsFileEarmarkCodeFill,
  BsFillTerminalFill,
  BsFillMarkdownFill,
} from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import {
  Container,
  SubContainer,
  FileNameContainer,
  FileName,
} from "./index.styles";
import { CopyButton } from "../CopyButton";
import { IoIosArrowDown } from "react-icons/io";

const size = 21;

const RenderExtensionIcon = (extension) => {
  const icons = {
    go: <SiGoland color="#3AB4F2" size={size} />,
    js: <SiJavascript color="yellow" size={size} />,
    html: <SiHtml5 color="blue" size={size} />,
    css: <SiCsswizardry color="orange" size={size} />,
    json: <SiJson color="green" size={size} />,
    docker: <SiDocker color="skyblue" size={size} />,
    gitignore: <SiGit color="orange" size={size} />,
    rs: <FaRust color="#DE5246" size={size} />,
    yaml: <AiOutlineDeploymentUnit color="#63f3ab" size={size} />,
    csv: <FaFileCsv color="magenta" size={size} />,
    md: <BsFillMarkdownFill color="orange" size={size} />,
    sh: <BsFillTerminalFill color="red" size={size} />,
    default: <BsFileEarmarkCodeFill color="gray" size={size} />,
  };

  return icons[extension] || icons["default"];
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
  const iterationHash = Math.random().toString(36).substring(7);
  return tree?.map((el) => {
    if (el.type == "file") {
      return (
        <FileNameContainer key={el.name} id={el.name}>
          {RenderExtensionIcon(ExtractExtension(el.name))}
          <FileName>{el.name}</FileName>
        </FileNameContainer>
      );
    }
    return (
      <div key={el.name} id={el.name}>
        <FileNameContainer>
          <IoIosArrowDown
            size={size-7}
            onClick={() => {
              const element = document.getElementById(el.name);
              const className = `sub-folder-${iterationHash}`;
              const list = element.getElementsByClassName(className)
              console.log(list)
             list[0].classList.toggle("hidden");
            }}
            style={{ margin: 3, cursor: "pointer" }}
          />
          <BsFillFolderFill color="#63f3ab" size={size} />
          <FileName>{el.name}</FileName>
        </FileNameContainer>
        <SubContainer className={`sub-folder-${iterationHash}`}>
          {RenderTree(el.content)}
        </SubContainer>
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
        }}
      />
    </Container>
  );
};
