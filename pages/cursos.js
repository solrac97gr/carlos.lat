import { CourseContainer } from "../components/CourseContainer";

const courses = [
  {
    name: "Curso de ASP.NET MVC 5",
    link: "https://go.hotmart.com/Y82938214F",
    photo:
      "https://e1.pxfuel.com/desktop-wallpaper/657/534/desktop-wallpaper-visual-studio-aspnet.jpg",
    difficulty: "Principiante",
    description:
      "Construye aplicaciones web robustas con el Patron MVC y ASP.NET MVC 5 usando Visual Studio 2022.",
    creator: "successforallacademy.com",
    tags: ["ASP.NET"],
  },
  {
    name: "Curso de Python",
    link: "https://go.hotmart.com/E81579781P",
    photo: "https://wallpaperaccess.com/full/1109826.jpg",
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
      "https://e1.pxfuel.com/desktop-wallpaper/959/113/desktop-wallpaper-3-sql-server-sql-server.jpg",
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
      "https://w0.peakpx.com/wallpaper/828/745/HD-wallpaper-cisco-brand-cisco-computer-hardware-ict-network-tech.jpg",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDpxLjhjTD_KV57vqB4EXcBQQKSKxaCGgt5d2R0NR7v16Nh5wXKwq295DNgzQ1slWsOU&usqp=CAU",
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
