const projects = [
  {
    name: 'XFLOW — Explainable Workflow Decisions',
    description:
      'A LangGraph autonomous agent that explains enterprise approval decisions by reasoning over live transaction data and a vector-indexed policy corpus. Outperforms baseline RAG pipeline across all RAGAS metrics.',
    stack: ['LangGraph', 'LangChain', 'ChromaDB', 'FastAPI', 'Streamlit', 'Groq'],
  },
  {
    name: 'OpenEvent — Event Management Platform',
    description:
      'A 6-microservice event booking platform with REST + GraphQL APIs, Kafka-driven communication, and Kubernetes deployment. Showcases scalable, production-ready architecture.',
    stack: ['Spring Boot', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes', 'GraphQL'],
  },
  {
    name: 'Weather App',
    description:
      'Weather application with a full CI/CD Jenkins pipeline featuring automated testing and deployment.',
    stack: ['Docker', 'Jenkins', 'CI/CD', 'GitHub'],
  },
]

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-gray-500 mb-10">Things I've built.</p>
      <div className="flex flex-col gap-8">
        {projects.map(p => (
          <div key={p.name} className="border rounded-xl p-6 hover:shadow-md transition">
            <h2 className="font-semibold text-lg mb-2">{p.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map(tech => (
                <span key={tech} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
