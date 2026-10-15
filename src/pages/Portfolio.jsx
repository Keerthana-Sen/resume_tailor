import { useState, useRef } from 'react'

const skills = [
  { category: 'Languages', items: 'Java, Python, SQL, React, JavaScript' },
  { category: 'Frameworks', items: 'Spring Boot, FastAPI, LangGraph' },
  { category: 'Gen AI & LLM', items: 'RAG Pipelines, Multi-agent Orchestration, Prompt Engineering' },
  { category: 'Tools', items: 'Docker, Kubernetes, Kafka, SAP BTP, SAP Datasphere, GitHub' },
]

const experience = [
  {
    company: 'SAP Labs India',
    role: 'Associate Software Developer',
    period: 'Aug 2024 – Present',
    points: [
      'Developed and maintained Java Spring Boot microservices for enterprise SAP applications',
      'Wrote JUnit 5 & Kafka tests; biweekly multi-environment testing across staging, canary, PaaS, SaaS',
      'Built data models on SAP Datasphere; converted ADS views to Analytic Models',
    ],
  },
  {
    company: 'NPPD Care',
    role: 'Market Research Intern',
    period: 'Dec 2023 – May 2024',
    points: [
      "Conducted market research on India's health & wellness sector using Linear Regression to forecast trends",
    ],
  },
  {
    company: 'Feynn Labs',
    role: 'ML Intern',
    period: 'May 2023 – Jul 2023',
    points: [
      'Applied ML techniques to real-world datasets; market segmentation using K-Means clustering',
    ],
  },
]

const projects = [
  {
    name: 'XFLOW — Explainable Workflow Decisions',
    description:
      'A LangGraph autonomous agent that explains enterprise approval decisions by reasoning over live transaction data and a vector-indexed policy corpus. Outperforms baseline RAG pipeline across all RAGAS metrics.',
    stack: ['LangGraph', 'LangChain', 'ChromaDB', 'FastAPI', 'Streamlit', 'Groq'],
    link: 'https://github.com/Keerthana-Sen',
  },
  {
    name: 'OpenEvent — Event Management Platform',
    description:
      'A 6-microservice event booking platform with REST + GraphQL APIs, Kafka-driven communication, and Kubernetes deployment. Showcases scalable, production-ready architecture.',
    stack: ['Spring Boot', 'PostgreSQL', 'Kafka', 'Docker', 'Kubernetes', 'GraphQL'],
    link: 'https://github.com/Keerthana-Sen',
  },
  {
    name: 'Weather App',
    description:
      'Weather application with a full CI/CD Jenkins pipeline featuring automated testing and deployment.',
    stack: ['Docker', 'Jenkins', 'CI/CD', 'GitHub'],
    link: 'https://github.com/Keerthana-Sen',
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'keesen23@gmail.com',
    href: 'mailto:keesen23@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/keerthanasen',
    href: 'https://linkedin.com/in/keerthanasen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/keerthanasen',
    href: 'https://github.com/keerthanasen',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function Portfolio() {
  const [deck, setDeck] = useState(projects)
  const [activeExp, setActiveExp] = useState(0)
  const expRef = useRef(null)

  function sendToBack() {
    setDeck(prev => {
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }

  function handleExpScroll() {
    const container = expRef.current
    if (!container) return
    const cardWidth = 290 + 16 // card width + gap
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveExp(Math.min(index, experience.length - 1))
  }

  function scrollToExp(i) {
    const container = expRef.current
    if (!container) return
    container.scrollTo({ left: i * (290 + 16), behavior: 'smooth' })
    setActiveExp(i)
  }

  return (
    <div className="pt-16">

      {/* Home */}
      <section id="home" className="max-w-3xl mx-auto px-6 py-16 flex items-center gap-12">
        <div className="flex-1">
          <p className="text-orange-500 font-medium mb-2 text-sm tracking-widest uppercase">Hi, I'm</p>
          <h1 className="text-5xl font-bold mb-3 text-gray-900 leading-tight">Keerthana Sen</h1>
          <p className="text-lg text-gray-600 mb-4">
            Associate Software Developer · Gen AI & LLM · Microservices
          </p>
          <p className="text-gray-500 leading-relaxed mb-7 text-base max-w-md">
            Powered by coffee and curiosity — I started with a fascination for how large systems talk to each other, and that curiosity became a BTech, an MTech at BITS Pilani, 
            production microservices at SAP Labs, and somewhere along 
            the way, a deep interest in building AI that can actually 
            explain itself.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-400 transition font-medium text-sm">
              View Projects
            </a>
            <a href="#contact" className="border border-gray-300 text-gray-600 px-5 py-2.5 rounded-lg hover:border-gray-400 hover:text-gray-900 transition font-medium text-sm">
              Contact Me
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src="/only_me.png"
            alt="Keerthana Sen"
            className="w-48 h-48 rounded-full object-cover border-2 border-orange-400"
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-blue-100 max-w-3xl mx-auto px-6 py-12">
        <p className="text-orange-500 text-sm tracking-widest uppercase mb-1">Background</p>
        <h2 className="text-3xl font-bold mb-3 text-gray-900">About Me</h2>
        <p className="text-gray-500 mb-8 leading-relaxed text-base max-w-xl">
          BTech from Christ University, currently pursuing MTech at BITS Pilani.
          I specialize in backend microservices and Gen AI systems, with hands-on
          experience building production systems at SAP Labs.
        </p>

        <h3 className="text-base font-semibold mb-3 text-gray-800 uppercase tracking-wider">Skills</h3>
        <div className="grid grid-cols-1 gap-3 mb-10">
          {skills.map(s => (
            <div key={s.category} className="flex gap-4">
              <span className="text-gray-400 w-36 shrink-0 text-sm pt-0.5">{s.category}</span>
              <span className="text-gray-700 text-sm">{s.items}</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-semibold mb-4 text-gray-800 uppercase tracking-wider">Experience</h3>
        <div
          ref={expRef}
          onScroll={handleExpScroll}
          className="flex gap-4 overflow-x-auto pb-3 -mx-6 px-6 scrollbar-hide"
        >
          {experience.map(e => (
            <div key={e.company} className="min-w-[290px] max-w-[290px] border border-orange-200 rounded-xl p-5 bg-orange-50 shadow-sm shrink-0">
              <h4 className="font-semibold text-gray-900 text-base mb-0.5">{e.company}</h4>
              <p className="text-sky-500 text-sm mb-0.5">{e.role}</p>
              <p className="text-sm text-gray-400 mb-3">{e.period}</p>
              <ul className="flex flex-col gap-2">
                {e.points.map((p, i) => (
                  <li key={i} className="text-gray-500 text-sm flex gap-2 leading-relaxed">
                    <span className="text-orange-400 shrink-0">–</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {experience.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToExp(i)}
              className={`rounded-full transition-all duration-200 ${
                activeExp === i ? 'w-5 h-2 bg-orange-500' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-blue-100 max-w-3xl mx-auto px-6 py-12">
        <p className="text-orange-500 text-sm tracking-widest uppercase mb-1">Work</p>
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Projects</h2>
        <p className="text-gray-400 text-sm mb-8">Click a card to cycle. Use the GitHub button to open the project.</p>

        <div className="flex justify-center">
          <div className="relative h-[440px] w-72">
            {deck.map((p, i) => (
              <div
                key={p.name}
                className="absolute w-72 border border-orange-200 rounded-2xl p-6 bg-orange-50 shadow-md transition-all duration-300 cursor-pointer"
                style={{
                  top: `${i * 12}px`,
                  left: `${i * 10}px`,
                  zIndex: deck.length - i,
                  opacity: i > 1 ? 0 : 1,
                }}
                onClick={sendToBack}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-orange-500 text-sm font-mono">0{projects.indexOf(p) + 1}</span>
                  <div className="h-px flex-1 bg-blue-100" />
                  {i === 0 && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{p.name}</h3>
                <p className="text-gray-500 leading-relaxed mb-4 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(tech => (
                    <span key={tech} className="bg-sky-50 text-sky-600 text-xs px-2.5 py-1 rounded-full border border-sky-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-blue-100 max-w-3xl mx-auto px-6 py-12">
        <p className="text-orange-500 text-sm tracking-widest uppercase mb-1">Get in touch</p>
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Contact</h2>
        <p className="text-gray-500 text-base mb-7">Feel free to reach out.</p>
        <div className="flex gap-8 flex-wrap">
          {contactLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sky-500 hover:text-sky-600 transition"
            >
              <span className="text-orange-400">{l.icon}</span>
              <span className="text-base">{l.value}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-blue-100 text-center py-6 text-gray-400 text-sm">
        © 2026 Keerthana Sen
      </footer>

    </div>
  )
}
