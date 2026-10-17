import { ArrowRight, ClipboardList, Code2, Palette, Search } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern and responsive websites using the latest technologies.',
  },
  {
    icon: Palette,
    title: 'Website Design',
    description: 'Clean and attractive UI/UX designs made with your visitors in mind.',
  },
  {
    icon: ClipboardList,
    title: 'Data Entry',
    description: 'Organized and accurate data entry work, handled with care.',
  },
  {
    icon: Search,
    title: 'Research & Analysis',
    description: 'Web research and data analysis to turn information into insight.',
  },
]

function Services() {
  return (
    <section id="services" className="scroll-mt-[62px] bg-[#fafaff] px-5 py-14 dark:bg-[#191a2b] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">✦ Services</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">What I Can Do</h2>
            <p className="mt-2 max-w-md text-[11px] font-medium leading-relaxed text-[#555b6f] dark:text-[#d0d0df]">
              I offer these services to help individuals and businesses build their online presence.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group flex min-h-[172px] flex-col rounded-xl border border-[#eeedf5] bg-white p-4 shadow-[0_5px_22px_rgba(45,43,69,0.035)] transition hover:-translate-y-0.5 hover:border-[#d9d0ff] dark:border-white/10 dark:bg-[#222336]">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6955dd] dark:bg-[#a78bfa]/15 dark:text-[#c0b0ff]"><Icon size={18} strokeWidth={2} /></span>
              <h3 className="mt-3 font-display text-[13px] font-bold leading-snug">{title}</h3>
              <p className="mt-1.5 flex-1 text-[10px] font-medium leading-[1.65] text-[#555b6f] dark:text-[#d0d0df]">{description}</p>
              <a href="#contact" aria-label={`Ask about ${title}`} className="mt-3 flex h-7 w-7 items-center justify-center self-end rounded-full bg-[#eee9ff] text-[#7864d2] transition group-hover:bg-[#7864d2] group-hover:text-white dark:bg-white/10 dark:group-hover:bg-[#7864d2]"><ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
