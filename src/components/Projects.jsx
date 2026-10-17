import { useState } from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

const githubUrl = 'https://github.com/Hajrabibi2007'

const projects = [
  {
    title: 'HifzMate Pro',
    categories: ['Web Development'],
    category: 'Web Development',
    description: 'A digital companion for organizing and tracking Hifz memorization progress.',
    features: ['Memorization tracking', 'Progress management', 'Responsive interface'],
    tags: ['React', 'Web App'],
    image: img1,
    imageAlt: 'HifzMate Pro project image',
    liveDemo: 'https://hifzmate-pro.vercel.app',
  },
  {
    title: 'Delicious Restaurant',
    categories: ['Web Development', 'UI/UX'],
    category: 'Web Development',
    description: 'A responsive ordering experience with a clear menu, smooth cart flow, and accurate totals.',
    features: ['Category filtering', 'Cart management', 'Subtotal & tax'],
    tags: ['React', 'Tailwind CSS'],
    image: img2,
    imageAlt: 'Delicious Restaurant Order Booking App project image',
    liveDemo: '#',
  },
  {
    title: 'Student Management System',
    categories: ['Web Development', 'Other'],
    category: 'Web Development',
    description: 'A web app for managing student information and keeping records organized.',
    features: ['Student records', 'Data management', 'Responsive interface'],
    tags: ['JavaScript', 'React', 'Web App'],
    image: img3,
    imageAlt: 'Student Management System project image',
    liveDemo: '#',
  },
]

const filters = ['All', 'Web Development', 'UI/UX', 'Other']

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
            <p className="mt-2 text-[11px] font-medium text-[#555b6f] dark:text-[#d0d0df]">Here are some of the projects I have worked on. Each project is a step in my learning journey.</p>
          </div>
          <div className="flex w-fit flex-wrap gap-1 rounded-full bg-[#f1f0f7] p-1 dark:bg-white/[0.06]" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full px-3 py-1.5 text-[9px] font-semibold transition ${activeFilter === filter ? 'bg-[#7058d7] text-white shadow-sm' : 'text-[#555b6f] hover:text-[#292a3a] dark:text-[#deddea] dark:hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-xl border border-[#eeedf5] bg-white shadow-[0_5px_22px_rgba(45,43,69,0.04)] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#51428c]/10 dark:border-white/10 dark:bg-white/[0.035]">
              <div className="aspect-[1.65] overflow-hidden rounded-xl bg-[#f0edff] dark:bg-[#222336]">
                <img src={project.image} alt={project.imageAlt} className="block h-full w-full rounded-xl object-cover" />
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2 py-1 text-[8px] font-bold text-[#403858] shadow-sm backdrop-blur dark:bg-[#171827]/90 dark:text-white">{project.category}</span>
              </div>
              <div className="p-4 pt-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-[14px] font-bold leading-tight">{project.title}</h3>
                  <ArrowRight size={15} className="mt-0.5 shrink-0 text-[#8574d1] transition group-hover:translate-x-1" />
                </div>
                <p className="mt-2 min-h-[48px] text-[10px] font-medium leading-[1.65] text-[#555b6f] dark:text-[#d0d0df]">{project.description}</p>
                <ul className="mt-3 space-y-1">
                  {project.features.map((feature) => <li key={feature} className="flex items-center gap-1.5 text-[9px] font-medium text-[#4f566a] dark:text-[#d5d5e2]"><span className="h-1 w-1 rounded-full bg-[#8b72e6]" />{feature}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0edff] px-2 py-1 text-[8px] font-bold text-[#51428c] dark:bg-[#a78bfa]/15 dark:text-[#d6caff]">{tag}</span>)}
                </div>
                <div className="mt-3 flex gap-2 border-t border-[#f0eff5] pt-3 dark:border-white/10">
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="inline-flex items-center gap-1 rounded-md bg-[#7058d7] px-3 py-2 text-[9px] font-semibold text-white transition hover:bg-[#5c45bf]">Live Demo <ExternalLink size={11} /></a>
                  <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`GitHub profile for ${project.title}`} className="inline-flex items-center gap-1 rounded-md border border-[#e7e5ef] px-3 py-2 text-[9px] font-semibold text-[#424457] transition hover:border-[#9b89e6] dark:border-white/10 dark:text-[#e0dfeb]"><Github size={12} /> GitHub</a>
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
