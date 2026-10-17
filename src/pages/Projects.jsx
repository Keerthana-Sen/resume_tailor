const moreProjects = [
  {
    name: 'OpenEvent — Event Management Platform',
    description:
      'A 6-microservice event booking platform with REST + GraphQL APIs, Kafka-driven communication, and Kubernetes deployment.',
    stack: ['Spring Boot', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes', 'GraphQL'],
  },
  {
    name: 'Weather App',
    description:
      'Weather application with a full CI/CD Jenkins pipeline featuring automated testing and deployment.',
    stack: ['Docker', 'Jenkins', 'CI/CD', 'GitHub'],
  },
]

export default function MoreProjects() {
  return (
    <div className="mt-14">
      <h3 className="text-base font-semibold mb-5 text-gray-800 uppercase tracking-wider">
        More projects
      </h3>
      <div className="grid md:grid-cols-2 gap-5">
        {moreProjects.map(p => (
          <div key={p.name} className="border border-blue-100 bg-white rounded-2xl p-6 hover:shadow-md hover:border-blue-300 transition">
            <h4 className="font-semibold text-gray-900 mb-2">{p.name}</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map(tech => (
                <span key={tech} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/Keerthana-Sen"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 text-blue-600 font-medium hover:underline"
      >
        See all on GitHub →
      </a>
    </div>
  )
}