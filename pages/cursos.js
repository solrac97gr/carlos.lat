import { CourseContainer } from "../components/CourseContainer";

const courses = [
  {
    name: "Curso de ASP.NET MVC 5",
    link: "https://go.hotmart.com/Y82938214F",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2FASP.NET%20MVC%205%20Course.png?alt=media&token=37392c13-95dc-4fe8-a6a8-e6d7e9771820",
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
      "https://firebasestorage.googleapis.com/v0/b/portfolio-18ce8.appspot.com/o/cursos%2FCreate%20a%20instagram%20post%20for%20my%20feed%20about%20this%20new%20python%20course%20but%20in%20Spanish%20use%20a%20gradient%20in%20the%20background%20and%20center%20the%20image%20try%20to%20make%20it%20the%20most%20minimalist%20as%20you%20can%20and%20add%20a%20call%20to%20action%20in%20Spanish%20also.png?alt=media&token=8cf6653f-8ddc-4d95-932f-098e8d1f0970",
    difficulty: "Principiante",
    description:
      "Aprende Python uno de los lenguajes de programación más versásiles y demandados.",
    creator: "aprendopromas.com",
    tags: ["Python"],
  },
];

export default function Courses() {
  return <CourseContainer courses={courses} />;
}
