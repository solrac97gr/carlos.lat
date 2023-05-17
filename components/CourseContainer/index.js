import { Container } from "./index.styles"
import { CourseCard } from "../CourseCard";

export const CourseContainer = ({courses}) => {
    return (
      <Container>
        {courses.map((course) => {
          return <CourseCard key={course.link} course={course}></CourseCard>;
        })}
      </Container>
    );
}