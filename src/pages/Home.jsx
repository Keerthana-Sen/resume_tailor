export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-blue-600 font-medium mb-2">Hi, I'm</p>
      <h1 className="text-5xl font-bold mb-4">Keerthana Sen</h1>
      <p className="text-xl text-gray-500 mb-6">
        Associate Software Developer · Gen AI & LLM · Microservices · Bengaluru, India
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        I build enterprise-grade backend systems and intelligent AI agents.
        Currently at SAP Labs, working on Java Spring Boot microservices and
        exploring multi-agent orchestration with LangGraph.
      </p>
      <div className="flex gap-4">
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  )
}
