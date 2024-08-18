import React, { useState, useEffect } from "react";
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClassNames = `w-full fixed top-0 z-50 transition-all ${
    isScrolled ? "backdrop-blur-md" : ""
  } ${
    theme === "light" ? "bg-slate-600 text-white" : "bg-gray-900 text-white"
  }`;

  const logoText = "Logo Here.";

  const navLinks = [
    { to: "/", text: "Inicio" },
    { to: "/category", text: "Categorias" },
    { to: "/about", text: "¿Quienes somos?" },
    { to: "/contact", text: "Contáctanos" },
  ];

  return (
    <header className={headerClassNames}>
      <div className="container mx-auto flex justify-between items-center py-6 px-5 xl:px-12">
        <Link className="text-3xl font-bold font-heading" to="/">
          {logoText}
        </Link>
        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link key={link.to} className="hover:text-gray-200" to={link.to}>
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-5 items-center">
          <Link
            className="relative flex items-center hover:text-gray-200"
            to="/store"
          >
            <ShoppingCart className="h-6 w-6" />
            {/* Show a red dot indicator when there are items in the cart */}
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </Link>
          <Link className="hover:text-gray-200" to="/login">
            <User className="h-6 w-6" />
          </Link>
        </div>
        <div className="xl:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="hover:text-gray-200">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <ModeToggle />
      </div>
      {isMenuOpen && (
        <nav className="md:hidden w-full">
          <div className="container mx-auto flex flex-col space-y-4 py-4 px-5">
            {navLinks.map((link) => (
              <Link key={link.to} className="hover:text-gray-200" to={link.to}>
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
