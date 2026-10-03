import { useEffect, useRef, useState } from 'react'
import { Atom, Braces, Code2, Database, FileCode2, GitBranch, PanelsTopLeft, Terminal } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: PanelsTopLeft },
      { name: 'JavaScript', icon: Braces },
      { name: 'React', icon: Atom },
      { name: 'Tailwind CSS', icon: FileCode2 },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Vite', icon: Terminal },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'VS Code', icon: Code2 },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Supabase', icon: Database },
      { name: 'REST APIs', icon: Braces },
    ],
  },
]

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
      <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">✦ My skills</p>
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-4xl">Skills &<br />Technologies</h2>
          <p className="mt-4 max-w-sm text-[12px] leading-[1.8] text-[#687087] dark:text-[#c0c1d0]">
            Here are the technologies and tools I have learned and continue to improve.
          </p>
          <div className="skills-note relative mt-5 hidden h-[90px] overflow-hidden rounded-2xl bg-[#f0edff] px-4 py-3 text-xs text-[#72639a] dark:bg-white/[0.04] lg:block">
            <span className="font-display text-sm italic">Keep learning,<br />keep growing ♡</span>
            <Code2 className="absolute bottom-3 right-5 text-[#9f8be7]" size={32} />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {skillGroups.flatMap((group) => group.skills.map((skill) => ({ ...skill, group: group.title }))).map(({ name, icon: Icon, group }, index) => (
            <article
              key={name}
              style={{ transitionDelay: hasEntered ? `${index * 45}ms` : '0ms' }}
              className={`rounded-xl border border-[#eeedf5] bg-white p-3.5 shadow-[0_4px_18px_rgba(45,43,69,0.03)] transition duration-500 hover:-translate-y-0.5 hover:border-[#d9d0ff] dark:border-white/10 dark:bg-white/[0.035] ${hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2] dark:bg-[#a78bfa]/10 dark:text-[#c0b0ff]"><Icon size={18} strokeWidth={1.9} /></span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-[12px] font-bold">{name}</h3>
                  <p className="mt-0.5 text-[9px] text-[#8c91a3]">{group}</p>
                </div>
              </div>
              <div aria-hidden="true" className="mt-3 h-1 overflow-hidden rounded-full bg-[#eeedf5] dark:bg-white/10">
                <div className={`h-full origin-left rounded-full bg-gradient-to-r from-[#7361dc] to-[#a78bfa] transition-transform duration-1000 ${hasEntered ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
