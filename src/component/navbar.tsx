import { Link } from "react-router-dom";

export function NavLinks() {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2">
      <div className="flex space-x-6 text-sm">
        <Link to="/projects" className="hover:underline">
          projects
        </Link>
        <Link to="/" className="hover:underline">
          home
        </Link>
        <Link to="/writings" className="hover:underline">
          writings
        </Link>
      </div>
    </nav>
  );
}
