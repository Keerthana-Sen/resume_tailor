import { useState, useRef } from 'react'
import MoreProjects from './Projects'

const xflowSteps = [
  { label: 'Retrieve', text: 'Searches a vector-indexed policy corpus (ChromaDB) for the rules that apply to this request.' },
  { label: 'Check', text: 'Pulls the live transaction data for the request, so the answer reflects what actually happened.' },
  { label: 'Reason', text: 'A LangGraph agent compares the case against each rule, step by step.' },
  { label: 'Explain', text: 'Returns a plain-language reason that points back to the policy it used.' },
]

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
    period: 'Aug 2024 – July 2026',
    points: [
      'Developed and maintained Java Spring Boot microservices for enterprise SAP applications',
      'Wrote JUnit 5 & Kafka tests; biweekly multi-environment testing across staging, canary, PaaS, SaaS',
      'Built data models on SAP Datasphere; converted ADS views to Analytic Models',
    ],
    skills: ['Java', 'Spring Boot', 'JUnit 5', 'Kafka', 'SAP Datasphere', 'SAP BTP'],
  },
  {
    company: 'NPPD Care',
    role: 'Market Research Intern',
    period: 'Dec 2023 – May 2024',
    points: [
      "Conducted market research on India's health & wellness sector using Linear Regression to forecast trends",
    ],
    skills: ['Market Research', 'Linear Regression', 'Trend Forecasting'],
  },
  {
    company: 'Feynn Labs',
    role: 'ML Intern',
    period: 'May 2023 – Jul 2023',
    points: [
      'Applied ML techniques to real-world datasets; market segmentation using K-Means clustering',
    ],
    skills: ['Machine Learning', 'K-Means Clustering', 'Market Segmentation'],
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
  const [step, setStep] = useState(0)

  function sendToBack() {
    setDeck(prev => {
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }


  return (
    <div className="pt-16">

      {/* Home */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-2 items-center gap-10 md:gap-16"
      >
        <div className="order-2 md:order-1">
          <p className="text-blue-600 font-medium mb-2 text-sm tracking-widest uppercase">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 leading-tight">
            Keerthana Sen
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-5">
            Associate Software Developer · Gen AI & LLM · Microservices
          </p>
          <p className="text-gray-500 leading-relaxed mb-8 text-base md:text-lg max-w-xl">
            Powered by coffee and curiosity — I started with a fascination for how large systems talk to
            each other, and that curiosity became a BTech, an MTech at BITS Pilani, production
            microservices at SAP Labs, and somewhere along the way, a deep interest in building AI that
            can actually explain itself.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition font-medium">
              View Projects
            </a>
            <a href="#contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-400 hover:text-blue-600 transition font-medium">
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src="/only_me.png"
            alt="Keerthana Sen"
            className="w-60 h-60 md:w-[35rem] md:h-[35rem] rounded-full object-cover"
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>
      </section>


      {/* About + Experience */}
      <section
        id="about"
        className="border-t border-blue-100 max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-12 md:gap-16"
      >
        {/* LEFT: reserved for the animation (later) */}
        <div className="hidden md:block">
          <div className="sticky top-28 h-[30rem] rounded-3xl border border-blue-100 bg-blue-50 flex items-center justify-center text-blue-300 text-sm">
            Animation goes here
          </div>
        </div>

        {/* RIGHT: about + skills + experience */}
        <div>
          <p className="text-blue-600 text-sm tracking-widest uppercase mb-1">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="text-gray-500 mb-10 leading-relaxed text-base md:text-lg">
            BTech from Christ University, currently pursuing MTech at BITS Pilani. I specialize in
            backend microservices and Gen AI systems, with hands-on experience building production
            systems at SAP Labs.
          </p>

          <h3 className="text-base font-semibold mb-4 text-gray-800 uppercase tracking-wider">Skills</h3>
          <div className="flex flex-col gap-4 mb-14">
            {skills.map(s => (
              <div key={s.category}>
                <p className="text-gray-400 text-sm mb-1.5">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.split(', ').map(item => (
                    <span key={item} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 id="experience" className="text-base font-semibold mb-6 text-gray-800 uppercase tracking-wider scroll-mt-24">
            Experience
          </h3>
          <ol className="relative border-l-3 border-blue-500 ml-2">
            {experience.map((e, i) => (
              <li key={e.company} className="ml-8 pb-10 last:pb-0 relative">
                <span
                  className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-blue-600 ${i === 0 ? 'bg-blue-600' : 'bg-white'
                    }`}
                />
                <h4 className="font-semibold text-gray-900 text-lg">{e.company}</h4>
                <p className="text-blue-600 text-sm font-medium">{e.role}</p>
                <p className="text-sm text-gray-400 mb-3">{e.period}</p>
                <ul className="flex flex-col gap-2 mb-4">
                  {e.points.map((p, j) => (
                    <li key={j} className="text-gray-500 text-sm flex gap-2 leading-relaxed">
                      <span className="text-blue-400 shrink-0">–</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {e.skills.map(sk => (
                    <span key={sk} className="bg-white text-gray-600 text-xs px-2.5 py-1 rounded-full border border-gray-200">
                      {sk}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-blue-100 max-w-6xl mx-auto px-6 md:px-10 py-16"
      >
        <p className="text-blue-600 text-sm tracking-widest uppercase mb-1">Featured work</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          XFLOW: explainable workflow decisions
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT: the story */}
          <div>
            {/* Question bubble */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-bl-sm px-5 py-4 mb-6 max-w-sm">
              <p className="text-xs text-blue-400 mb-1">An employee asks</p>
              <p className="text-gray-900 font-medium text-lg">“Why was my request rejected?”</p>
            </div>

            <p className="text-gray-500 leading-relaxed mb-4">
              Enterprise approval systems are good at saying <b className="text-gray-800">yes</b> or{' '}
              <b className="text-gray-800">no</b>, and bad at saying <i>why</i>. People are left guessing,
              and reviewers dig through policy documents by hand.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              I built an autonomous agent that answers that question. It reasons over live transaction
              data and a vector-indexed policy corpus, then explains the decision in plain language.
            </p>

            <div className="rounded-xl border border-blue-100 p-4 mb-6">
              <p className="text-sm text-gray-400 mb-1">The result</p>
              <p className="text-gray-900 font-medium">
                Outperforms a baseline RAG pipeline across all RAGAS metrics.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {['LangGraph', 'LangChain', 'ChromaDB', 'FastAPI', 'Streamlit', 'Groq'].map(t => (
                <span key={t} className="bg-white text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/Keerthana-Sen"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition font-medium"
            >
              View XFLOW on GitHub
            </a>
          </div>

          {/* RIGHT: how it answers */}
          <div className="bg-white border border-blue-100 rounded-3xl p-6 shadow-sm">
            <p className="text-sm text-gray-400 mb-4">How XFLOW answers</p>
            <ol className="flex flex-col gap-3 mb-5">
              {xflowSteps.map((s, i) => (
                <li
                  key={s.label}
                  className={`flex gap-3 rounded-xl p-3 transition-all duration-500 ${i <= step ? 'opacity-100 bg-blue-50' : 'opacity-30'
                    }`}
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <button
              onClick={() => setStep(s => (s + 1) % xflowSteps.length)}
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              {step === xflowSteps.length - 1 ? 'Start over' : 'Next step →'}
            </button>
          </div>
        </div>

        <p className="mt-12 text-gray-500">
          Also built: OpenEvent (event platform on 6 microservices) and a Weather App with a Jenkins CI/CD
          pipeline.{' '}
          <a
            href="https://github.com/Keerthana-Sen"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            See all on GitHub →
          </a>
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-blue-100 max-w-3xl mx-auto px-6 py-12">
        <p className="text-blue-500 text-sm tracking-widest uppercase mb-1">Get in touch</p>
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
              <span className="text-blue-400">{l.icon}</span>
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
