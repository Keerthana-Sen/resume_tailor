export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-blue-50 border-b border-blue-100 px-8 py-4 flex items-center justify-between z-10 shadow-sm">
      <a href="#home" className="font-bold text-xl text-gray-900">Keerthana Sen</a>
      <div className="flex gap-8 items-center">
        <a href="#home" className="text-gray-500 hover:text-gray-900 transition text-sm">Home</a>
        <a href="#about" className="text-gray-500 hover:text-gray-900 transition text-sm">About</a>
        <a href="#projects" className="text-gray-500 hover:text-gray-900 transition text-sm">Projects</a>
        <a href="#contact" className="text-gray-500 hover:text-gray-900 transition text-sm">Contact</a>
        <a href="/login">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-400 transition">
            Login
          </button>
        </a>
      </div>
    </nav>
  )
}
