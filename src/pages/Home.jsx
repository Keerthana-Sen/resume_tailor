export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Keerthana Sen 👋</h1>
      <p className="text-lg text-gray-600 mb-8">
        I'm a software developer passionate about building things for the web.
        Welcome to my portfolio.
      </p>
      <a
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        See my work
      </a>
    </main>
  )
}
