import { useEffect, useRef, useState } from 'react'
import { Github } from 'lucide-react'

const skills = [
  { name: 'HTML', logo: 'html' },
  { name: 'CSS', logo: 'css' },
  { name: 'JavaScript', logo: 'javascript' },
  { name: 'React', logo: 'react' },
  { name: 'Database (MySQL)', logo: 'mysql' },
  { name: 'UI/UX Design', logo: 'figma' },
  { name: 'Git & GitHub', logo: 'github' },
  { name: 'Python', logo: 'python' },
]

function SkillLogo({ type }) {
  if (type === 'github') {
    return <Github aria-hidden="true" size={36} strokeWidth={2.4} className="text-[#171717]" />
  }

  if (type === 'react') {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10 fill-none stroke-[#54c8e8]" strokeWidth="2">
        <circle cx="24" cy="24" r="3.2" fill="#54c8e8" stroke="none" />
        <ellipse cx="24" cy="24" rx="20" ry="7.5" />
        <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)" />
      </svg>
    )
  }

  if (type === 'figma') {
    return (
      <svg aria-hidden="true" viewBox="0 0 40 48" className="h-10 w-8">
        <path fill="#f24e1e" d="M12 2h8v12h-8a6 6 0 1 1 0-12Z" />
        <path fill="#ff7262" d="M20 2h8a6 6 0 1 1 0 12h-8Z" />
        <path fill="#a259ff" d="M12 14h8v12h-8a6 6 0 1 1 0-12Z" />
        <circle cx="26" cy="20" r="6" fill="#1abcfe" />
        <path fill="#0acf83" d="M12 26h8v8a6 6 0 1 1-8-5.65Z" />
      </svg>
    )
  }

  if (type === 'python') {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10">
        <path fill="#3776ab" d="M23 3c-10 0-10 4-10 9v5h13v2H8c-5 0-7 4-7 10s2 10 7 10h5v-7c0-5 4-9 9-9h10c4 0 7-3 7-7V12c0-6-5-9-16-9Zm-5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
        <path fill="#ffd343" d="M25 45c10 0 10-4 10-9v-5H22v-2h18c5 0 7-4 7-10s-2-10-7-10h-5v7c0 5-4 9-9 9H16c-4 0-7 3-7 7v4c0 6 5 9 16 9Zm5-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      </svg>
    )
  }

  if (type === 'mysql') {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10">
        <ellipse cx="19" cy="11" rx="12" ry="5" fill="#4479a1" />
        <path d="M7 11v21c0 3 5 5 12 5s12-2 12-5V11c0 3-5 5-12 5S7 14 7 11Z" fill="#4479a1" />
        <path d="M7 21c0 3 5 5 12 5s12-2 12-5M7 29c0 3 5 5 12 5s12-2 12-5" fill="none" stroke="#d8e9f4" strokeWidth="2" />
        <path d="M34 12c3-4 7-4 9-3-3 1-4 3-4 5l4 4c-4 0-7-2-9-6Z" fill="#e58b35" />
      </svg>
    )
  }

  const colors = {
    html: { fill: '#e44d26', label: '5' },
    css: { fill: '#264de4', label: '3' },
    javascript: { fill: '#f0db4f', label: 'JS' },
  }
  const brand = colors[type]
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-10 w-10">
      {type === 'javascript' ? (
        <>
          <rect x="3" y="3" width="42" height="42" rx="2" fill={brand.fill} />
          <text x="24" y="34" fill="#323330" fontSize="17" fontWeight="700" textAnchor="middle">{brand.label}</text>
        </>
      ) : (
        <>
          <path fill={brand.fill} d="M5 3h38l-3.5 36L24 45 8.5 39 5 3Z" />
          <path fill="#fff" d={type === 'html' ? 'M15 11h19l-.5 5H20l.5 4h12l-1.2 12L24 35l-7-3-.5-6h5l.3 3 2.5 1 2.7-1 .4-4H16l-1-14Z' : 'M14 11h21l-.5 5H20l.5 4h13l-1.4 12L24 35l-8-3-.5-6h5l.3 3 3.2 1 3.4-1 .4-4H16l-2-14Z'} />
        </>
      )}
    </svg>
  )
}

function Skills() {
  const sectionRef = useRef(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="scroll-mt-[62px] bg-[#fafaff] px-5 py-14 dark:bg-[#191a2b] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <div>
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">✦ My skills</p>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-4xl">Skills &<br />Technologies</h2>
            <p className="mt-3 max-w-sm text-[12px] font-medium leading-[1.8] text-[#4f566a] dark:text-[#d5d5e2]">
              Here are the technologies and tools I have learned and continue to improve.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ name, logo }, index) => (
            <article
              key={name}
              style={{ transitionDelay: hasEntered ? `${index * 45}ms` : '0ms' }}
              className={`rounded-xl border border-[#eeedf5] bg-white p-3.5 shadow-[0_4px_18px_rgba(45,43,69,0.03)] transition duration-500 hover:-translate-y-0.5 hover:border-[#d9d0ff] dark:border-white/10 dark:bg-[#222336] ${hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            >
              <div className="flex min-h-[89px] flex-col items-center justify-center gap-1.5">
                <SkillLogo type={logo} />
                <h3 className="font-display text-center text-[12px] font-bold">{name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
