export default function Navbar() {
  return (
    <nav className="bg-navy px-6 md:px-12 py-4 flex items-center justify-between">
  <span className="text-butter font-bold text-xl">Keerthana Sen</span>
  <div className="flex items-center gap-2">
    <a href="#home" className="text-butter px-3.5 py-2 rounded-lg transition-colors hover:bg-maroon">Home</a>
    <a href="#about" className="text-butter px-3.5 py-2 rounded-lg transition-colors hover:bg-maroon">About</a>
    <a href="#projects" className="text-butter px-3.5 py-2 rounded-lg transition-colors hover:bg-maroon">Projects</a>
    <a href="#contact" className="text-butter px-3.5 py-2 rounded-lg transition-colors hover:bg-maroon">Contact</a>
  </div>
</nav>
  )
}
