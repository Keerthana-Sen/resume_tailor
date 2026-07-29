import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b px-6 py-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">
        MyPortfolio
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-600 transition">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
        <Link to="/login" className="hover:text-blue-600 transition button">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
