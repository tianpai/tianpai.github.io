import { Link, useLocation } from "react-router-dom";

export function NavBar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="absolute top-4 nav-bg backdrop-blur-sm rounded-3xl left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex space-x-6 px-5 py-2 ">
        <Link
          to="/"
          className={`shine-hover ${isActive("/") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          home
        </Link>
        <Link
          to="/projects"
          className={`shine-hover ${isActive("/projects") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          projects
        </Link>
        <Link
          to="/blog"
          className={`shine-hover ${isActive("/blog") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          blogs
        </Link>
        <Link
          to="/about"
          className={`shine-hover ${isActive("/about") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
