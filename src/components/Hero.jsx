import { ArrowRight, Github, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react'
import image1 from '../assets/image1.jpg'

const githubUrl = 'https://github.com/Hajrabibi2007'
const linkedInUrl = 'https://www.linkedin.com/in/hajra-bibi-b47110320'
const contactEmail = 'hajrabibi7002@gmail.com'

const highlights = [
  { icon: Sparkles, label: 'Creative', detail: 'Designs' },
  { icon: ArrowRight, label: 'Clean', detail: 'Code' },
  { icon: Github, label: 'Real', detail: 'Projects' },
  { icon: ArrowRight, label: 'Continuous', detail: 'Learning' },
]

function Hero() {
  return (
    <section id="home" className="hero-surface relative isolate scroll-mt-16 overflow-hidden px-5 text-white sm:px-8">
      <div className="mx-auto grid min-h-[560px] max-w-6xl items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b7a8ff]">
            <span className="text-[#a78bfa]">✦</span> Welcome to my portfolio
          </div>
          <h1 className="font-display text-[3.4rem] font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-[4.5rem]">
            Hi, I&apos;m
            <span className="block text-[#b49cff]">Hajra Bibi</span>
          </h1>
          <p className="mt-3 font-display text-xl font-semibold tracking-tight text-white/95 sm:text-2xl">
            Aspiring Software Developer
          </p>
          <p className="mt-1 font-display text-sm font-semibold text-[#cbbdff]">Frontend Developer</p>
          <p className="mt-4 max-w-[490px] text-[13px] font-medium leading-[1.75] text-[#e0e0ea] sm:text-sm">
            I am a Software Engineering student with a passion for web development, clean code, and building useful real-world projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#a78bfa] px-5 py-3 text-xs font-bold text-[#17142b] transition hover:-translate-y-0.5 hover:bg-[#c3b2ff]"
            >
              View My Projects <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#b7a8ff]/60 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2.5">
            <a aria-label="GitHub profile" href={githubUrl} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e6e4f2] transition hover:bg-[#a78bfa] hover:text-[#17142b]">
              <Github size={16} />
            </a>
            <a aria-label="LinkedIn profile" href={linkedInUrl} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e6e4f2] transition hover:bg-[#a78bfa] hover:text-[#17142b]">
              <Linkedin size={16} />
            </a>
            <a aria-label="Instagram profile" href="#contact" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e6e4f2] transition hover:bg-[#a78bfa] hover:text-[#17142b]">
              <Instagram size={16} />
            </a>
            <a aria-label="Email Hajra" href={`mailto:${contactEmail}`} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#e6e4f2] transition hover:bg-[#a78bfa] hover:text-[#17142b]">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[450px]">
          <p className="absolute left-0 top-0 z-20 font-display text-sm italic leading-tight text-[#d1c8ff] sm:text-base">
            Build · Learn · Grow <span className="text-xs">↘</span>
          </p>
          <div className="relative mt-6 min-h-[410px] w-full">
            <div aria-hidden="true" className="absolute left-[46%] top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a99aff]/25" />
            <div aria-hidden="true" className="absolute left-[46%] top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a99aff]/20" />
            <div aria-hidden="true" className="absolute left-[46%] top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a99aff]/15" />
            <div aria-hidden="true" className="absolute left-[30%] top-[18%] h-64 w-64 rounded-full bg-[#7565d6]/20 blur-[90px]" />
            <div className="absolute left-0 top-4 z-10 aspect-[487/640] w-[68%] max-w-[290px] overflow-hidden rounded-[5rem_1.5rem_5rem_1.5rem] border border-white/20 shadow-[0_24px_90px_rgba(112,92,219,0.3)] ring-4 ring-[#a78bfa]/10">
              <img src={image1} alt="Hajra Bibi" className="block h-full w-full object-cover" />
            </div>
            <p className="absolute bottom-3 left-1 z-20 rounded-full border border-white/20 bg-[#1d2039]/95 px-3 py-1.5 text-center text-[10px] font-semibold text-white shadow-xl">
            BS Computer Science · 5th Semester
            </p>
            <div className="absolute right-0 top-[46%] z-20 grid w-[190px] -translate-y-1/2 grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-[#f8f7ff] p-2 text-[#25243b] shadow-2xl shadow-black/30 sm:w-[205px] sm:gap-1.5 sm:p-2.5">
              {highlights.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl px-1.5 py-1.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#eee9ff] text-[#7864d2]"><Icon size={14} /></span>
                  <span className="text-[9px] font-semibold leading-tight sm:text-[10px]">{label}<br />{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-white/10 py-4 text-[10px] font-medium text-[#b7b8c8] sm:text-[11px]">
        <span className="text-[#dedee8]">Samundri / Faisalabad, Pakistan</span>
        <a href="#about" className="font-semibold text-[#dedee8] transition hover:text-white">Scroll to explore ↓</a>
      </div>
    </section>
  )
}

export default Hero
