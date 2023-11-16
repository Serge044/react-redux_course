import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      {/* властивістю end ми готоворимо React Router'y що ми хочемо змінювати стиль для цього елемента тільки якщо ми знаходимося на сторінці з коренним шляхом */}
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="/courses"
      >
        Courses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
