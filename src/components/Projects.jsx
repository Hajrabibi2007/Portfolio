import { useState } from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const githubUrl = 'https://github.com/Hajrabibi2007'

const projects = [
  {
    title: 'Task Management App',
    categories: ['Web Development'],
    category: 'Web Development',
    description: 'A task manager built with React and Supabase to keep everyday work clear, organized, and in sync.',
    features: ['State management', 'CRUD operations', 'Database sync'],
    tags: ['React', 'Supabase'],
    visual: 'tasks',
    liveDemo: '#',
  },
  {
    title: 'Restaurant / Order Booking App',
    categories: ['Web Development', 'UI/UX'],
    category: 'Web Development',
    description: 'A responsive ordering experience with a clear menu, smooth cart flow, and accurate totals.',
    features: ['Category filtering', 'Cart management', 'Subtotal & tax'],
    tags: ['React', 'Tailwind CSS'],
    visual: 'restaurant',
    liveDemo: '#',
  },
  {
    title: 'Interactive Web App',
    categories: ['UI/UX', 'Other'],
    category: 'Other',
    description: 'A playful interactive experience featuring custom motion, engaging modals, and a browsable gallery.',
    features: ['Custom animations', 'Interactive modals', 'Gallery components'],
    tags: ['JavaScript', 'CSS', 'UI/UX'],
    visual: 'interactive',
    liveDemo: 'https://hifzmate-pro.vercel.app',
  },
]

const filters = ['All', 'Web Development', 'UI/UX', 'Other']

function ProjectVisual({ kind }) {
  if (kind === 'tasks') {
    return (
      <div className="project-window project-window-dark">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <span className="text-[8px] font-bold text-white">HajraTasks</span><span className="rounded bg-[#9c76ed] px-2 py-1 text-[7px] text-white">+ New task</span>
        </div>
        <div className="grid grid-cols-[0.55fr_1.45fr] gap-2 p-3">
          <div className="space-y-2 text-[7px] text-white/50"><p className="text-white">My tasks</p><p>Today</p><p>Upcoming</p><p>Completed</p></div>
          <div className="space-y-1.5">{['Build dashboard', 'Review new tasks', 'Plan this week'].map((task, index) => <div key={task} className="flex items-center gap-2 rounded-md bg-white/[0.07] px-2 py-2 text-[7px] text-white/80"><span className={`h-2.5 w-2.5 rounded border ${index === 0 ? 'border-[#a78bfa] bg-[#a78bfa]' : 'border-white/30'}`} />{task}</div>)}</div>
        </div>
      </div>
    )
  }
  if (kind === 'restaurant') {
    return (
      <div className="project-window overflow-hidden">
        <div className="flex items-center justify-between bg-white px-3 py-2 dark:bg-[#222336]">
          <span className="text-[8px] font-bold text-[#26243c] dark:text-white">Gather & Grain</span><span className="rounded-full bg-[#eee9ff] px-2 py-1 text-[7px] text-[#735bc4]">Cart · 2</span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          <div className="flex h-16 items-end rounded-lg bg-gradient-to-br from-[#f0cda3] to-[#d98963] p-2 text-[7px] font-bold text-white">Seasonal bowl</div>
          <div className="flex h-16 items-end rounded-lg bg-gradient-to-br from-[#c1cfad] to-[#668765] p-2 text-[7px] font-bold text-white">Garden toast</div>
        </div>
        <div className="mx-3 mb-3 flex justify-between rounded-lg bg-[#f5f2ff] px-2 py-1.5 text-[7px] text-[#514a72] dark:bg-white/5 dark:text-white/70"><span>Subtotal + tax</span><span className="font-bold">$24.50</span></div>
      </div>
    )
  }
  return (
    <div className="project-window overflow-hidden">
      <div className="flex items-center gap-1.5 bg-white px-3 py-2 dark:bg-[#222336]"><span className="h-1.5 w-1.5 rounded-full bg-[#ef8496]" /><span className="h-1.5 w-1.5 rounded-full bg-[#f4cf75]" /><span className="h-1.5 w-1.5 rounded-full bg-[#8dd29a]" /></div>
      <div className="grid grid-cols-[1fr_0.8fr] gap-2 p-3">
        <div className="grid grid-cols-2 gap-1.5">{['from-[#d9ccff] to-[#8e78db]', 'from-[#ffd8d2] to-[#ed998b]', 'from-[#d6e9e0] to-[#8db8a5]', 'from-[#f8e6b9] to-[#ddba6a]'].map((colors) => <div key={colors} className={`h-8 rounded-md bg-gradient-to-br ${colors}`} />)}</div>
        <div className="flex flex-col justify-center rounded-lg bg-[#f0edff] p-2 dark:bg-white/5"><span className="h-1.5 w-3/4 rounded bg-[#8272c9]/50" /><span className="mt-2 h-1 w-full rounded bg-[#8272c9]/20" /><span className="mt-1 h-1 w-2/3 rounded bg-[#8272c9]/20" /><span className="mt-3 h-4 w-12 rounded bg-[#9078e8]" /></div>
      </div>
    </div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <section id="projects" className="scroll-mt-[62px] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">✦ Projects</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">My Projects</h2>
            <p className="mt-2 text-[11px] text-[#747b8e] dark:text-[#b4b5c6]">Here are some of the projects I have worked on. Each project is a step in my learning journey.</p>
          </div>
          <div className="flex w-fit flex-wrap gap-1 rounded-full bg-[#f1f0f7] p-1 dark:bg-white/[0.06]" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full px-3 py-1.5 text-[9px] font-semibold transition ${activeFilter === filter ? 'bg-[#7058d7] text-white shadow-sm' : 'text-[#73778a] hover:text-[#39354f] dark:text-[#c4c1d4] dark:hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-xl border border-[#eeedf5] bg-white shadow-[0_5px_22px_rgba(45,43,69,0.04)] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#51428c]/10 dark:border-white/10 dark:bg-white/[0.035]">
              <div className={`relative mx-2 mt-2 aspect-[1.65] overflow-hidden rounded-lg p-3 ${project.visual === 'tasks' ? 'bg-gradient-to-br from-[#d8e9dc] to-[#dce3f5] dark:from-[#263e3a] dark:to-[#303348]' : project.visual === 'restaurant' ? 'bg-gradient-to-br from-[#f4e1ca] to-[#f2e9ee] dark:from-[#49372e] dark:to-[#393044]' : 'bg-gradient-to-br from-[#eee5ff] to-[#e5edf7] dark:from-[#352e4c] dark:to-[#283b48]'}`}>
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/80 px-2 py-1 text-[8px] font-semibold text-[#5c5575] backdrop-blur dark:bg-black/20 dark:text-white">{project.category}</span>
                <ProjectVisual kind={project.visual} />
              </div>
              <div className="p-4 pt-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-[14px] font-bold leading-tight">{project.title}</h3>
                  <ArrowRight size={15} className="mt-0.5 shrink-0 text-[#8574d1] transition group-hover:translate-x-1" />
                </div>
                <p className="mt-2 min-h-[48px] text-[10px] leading-[1.65] text-[#777d90] dark:text-[#b4b5c6]">{project.description}</p>
                <ul className="mt-3 space-y-1">
                  {project.features.map((feature) => <li key={feature} className="flex items-center gap-1.5 text-[9px] text-[#676e82] dark:text-[#c0c1cf]"><span className="h-1 w-1 rounded-full bg-[#8b72e6]" />{feature}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0edff] px-2 py-1 text-[8px] font-semibold text-[#6b59b8] dark:bg-[#a78bfa]/10 dark:text-[#c0b0ff]">{tag}</span>)}
                </div>
                <div className="mt-3 flex gap-2 border-t border-[#f0eff5] pt-3 dark:border-white/10">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="inline-flex items-center gap-1 rounded-md bg-[#7058d7] px-3 py-2 text-[9px] font-semibold text-white transition hover:bg-[#5c45bf]">Live Demo <ExternalLink size={11} /></a>
                  <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub profile for ${project.title}`} className="inline-flex items-center gap-1 rounded-md border border-[#e7e5ef] px-3 py-2 text-[9px] font-semibold text-[#55576a] transition hover:border-[#9b89e6] dark:border-white/10 dark:text-[#d0d0db]"><Github size={12} /> GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
