import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import courses from "./data/courses";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  //   якщо key === undefined або якщо значення не знаходиться в нашому масиві SORT_KEYS. ми це робимо для того щоб по замовченню отримувати оригінальну послідовність
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  //   сортування яке працює для цисел і строк
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  console.log(sortCourses(courses, sortKey));
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      //   можна і не писати undefined, виклик функції без аргумента і так по озамовченню поверне undefined
      setSortKey(undefined);
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>
      {sortedCourses.map((course) => {
        return (
          <div key={course.id}>
            <Link to={course.slug} className="courseLink">
              {course.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Courses;
