import { CourseContainer } from "../components/CourseContainer";

const courses = [
  {
    name: "Curso de ASP.NET MVC 5",
    link: "https://go.hotmart.com/Y82938214F",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2Fasp-net.jpg?alt=media&token=8dbd7e2e-bb76-4408-9002-bd8e5ba3d01b",
    difficulty: "Principiante",
    description:
      "Construye aplicaciones web robustas con el Patron MVC y ASP.NET MVC 5 usando Visual Studio 2022.",
    creator: "successforallacademy.com",
    tags: ["ASP.NET"],
  },
  {
    name: "Curso de Python",
    link: "https://go.hotmart.com/E81579781P",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2Fpython.webp?alt=media&token=dd9d7434-0c63-4724-828e-b4dc42fd1e63",
    difficulty: "Principiante",
    description:
      "Aprende Python uno de los lenguajes de programación más versásiles y demandados.",
    creator: "aprendopromas.com",
    tags: ["Python"],
  },
  {
    name: "Curso de SQL Server",
    link: "https://go.hotmart.com/O82938245L",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2Fsql-server.jpg?alt=media&token=5d8e9698-8b11-48f6-b2fc-b4524d4b6354",
    difficulty: "Principiante",
    description:
      "Domina SQL Server una tecnología muy usada por empresas grandes/medianas.",
    creator: "paolociguero92.wixsite.com",
    tags: ["SQL"],
  },
  {
    name: "CCNA 200-301:LAN Switching y VLANs",
    link: "https://go.hotmart.com/E82938296L",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2Fcisco.jpg?alt=media&token=dafbbff6-7137-4782-803f-097141b1cf10",
    difficulty: "Media",
    description:
      "Este curso aborda las tecnología LAN Switching que son tratadas en el examen Cisco CCNA 200-301",
    creator: "eclassvirtual.com",
    tags: ["Redes"],
  },
  {
    name: "SAP para Ingenieros",
    link: "https://go.hotmart.com/X82938150K?ap=e591",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2Fsap.png?alt=media&token=92508ab5-fd8d-4d80-bda9-7fdae3bdeec3",
    difficulty: "Principiante",
    description:
      "Aprende sobre administración, mantenimiento, auditoria y monitoreo del sistema SAP.",
    creator: "masterclasses.la",
    tags: ["SAP"],
  },
];

export default function Courses() {
  return <CourseContainer courses={courses} />;
}
