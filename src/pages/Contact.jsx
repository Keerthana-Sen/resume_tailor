const links = [
  { label: 'Email', value: 'keesen23@gmail.com', href: 'mailto:keesen23@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/keerthanasen', href: 'https://linkedin.com/in/keerthanasen' },
  { label: 'GitHub', value: 'github.com/keerthanasen', href: 'https://github.com/keerthanasen' },
]

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-2">Contact</h1>
      <p className="text-gray-500 mb-10">Feel free to reach out.</p>
      <div className="flex flex-col gap-4">
        {links.map(l => (
          <div key={l.label} className="flex items-center gap-4">
            <span className="text-gray-500 w-20">{l.label}</span>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {l.value}
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}
