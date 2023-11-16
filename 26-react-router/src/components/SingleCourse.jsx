import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "./data/courses";
// import NotFound from "./NotFound";
import { useEffect } from "react";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);

  //   перенаправлення якщо сторінка не знайдена(також слід використовивати ? у return як на прикладі нижче)
  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);
  // Показати Компонент не знайдено
  //   if (!course) {
  //     return <NotFound />;
  //   }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
