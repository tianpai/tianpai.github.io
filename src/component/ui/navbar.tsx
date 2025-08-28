import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function NavBar() {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const threshold = 50;

      if (scrollTop > threshold) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down - hide navbar
          setIsHidden(true);
        } else {
          // Scrolling up - show navbar
          setIsHidden(false);
        }
      } else {
        // At top of page - always show navbar
        setIsHidden(false);
      }

      setLastScrollTop(scrollTop);
    };

    // Find the scrollable container
    const scrollContainer = document.querySelector(".h-full.overflow-y-auto");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollTop]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-4 nav-bg backdrop-blur-sm rounded-3xl left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-in-out ${isHidden ? "-translate-y-16" : "translate-y-0"}`}
    >
      <div className="flex space-x-6 px-5 py-2 ">
        <Link
          to="/"
          className={`shine-hover ${isActive("/") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          HOME
        </Link>
        <Link
          to="/projects"
          className={`shine-hover ${isActive("/projects") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          PROJECTS
        </Link>
        <Link
          to="/blog"
          className={`shine-hover ${isActive("/blog") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          BLOGS
        </Link>
        <Link
          to="/about"
          className={`shine-hover ${isActive("/about") ? "opacity-100 font-bold" : "opacity-70"}`}
        >
          ABOUT
        </Link>
      </div>
    </nav>
  );
}
