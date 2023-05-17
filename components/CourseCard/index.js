import { logEvent } from "../../lib/analytics";
import {
  Card,
  Content,
  Tag,
  Tags,
  Title,
  Date,
  ImageStyled,
} from "./index.styles";

export const CourseCard = ({ course }) => {
  return (
    <Card
      onClick={() => {
        logEvent("Button", "Click_Course_Card");
      }}
      href={course.link}
      key={course.name}
    >
      <ImageStyled
        src={course.photo}
        alt={course.name}
        width="500px"
        height="250px"
        unoptimized
      ></ImageStyled>
      <Content>
        <Title>{course.name}</Title>
        <small>{course.difficulty}</small>
        <br />
        <span>{course.description}</span>
        <Tags>
          {course.tags.map((tag) => {
            return <Tag key={tag}>{tag}</Tag>;
          })}
        </Tags>
        <Date>Creator: {course.creator}</Date>
      </Content>
    </Card>
  );
};
