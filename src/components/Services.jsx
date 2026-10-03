import { ArrowRight, ClipboardList, Code2, Palette, Search } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Responsive, modern web apps using React and Tailwind CSS.',
    tone: 'violet',
  },
  {
    icon: Palette,
    title: 'UI/UX & Frontend Design',
    description: 'Clean and attractive component design with a focus on usability.',
    tone: 'indigo',
  },
  {
    icon: ClipboardList,
    title: 'Data Entry',
    description: 'Accurate, organized data work with a careful eye for detail.',
    tone: 'blue',
  },
  {
    icon: Search,
    title: 'Research & Analysis',
    description: 'Web research, technical analysis, and useful documentation.',
    tone: 'rose',
  },
]

function Services() {
  return (
    <section id="services" className="scroll-mt-[62px] bg-[#fafaff] px-5 py-14 dark:bg-[#191a2b] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-xl">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">✦ Services</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">What I Can Do</h2>
          <p className="mt-2 text-[11px] leading-relaxed text-[#747b8e] dark:text-[#b4b5c6]">I offer these services to help individuals and businesses build their online presence.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group flex min-h-[160px] flex-col rounded-xl border border-[#eeedf5] bg-white p-4 shadow-[0_5px_22px_rgba(45,43,69,0.035)] transition hover:-translate-y-0.5 hover:border-[#d9d0ff] dark:border-white/10 dark:bg-white/[0.035]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2] dark:bg-[#a78bfa]/10 dark:text-[#c0b0ff]"><Icon size={16} /></span>
              <h3 className="mt-3 font-display text-[12px] font-bold leading-snug">{title}</h3>
              <p className="mt-1.5 flex-1 text-[10px] leading-[1.65] text-[#777d90] dark:text-[#b4b5c6]">{description}</p>
              <a href="#contact" aria-label={`Ask about ${title}`} className="mt-3 flex h-6 w-6 items-center justify-center self-end rounded-full bg-[#eee9ff] text-[#7864d2] transition group-hover:bg-[#7864d2] group-hover:text-white dark:bg-white/10 dark:group-hover:bg-[#7864d2]"><ArrowRight size={13} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
