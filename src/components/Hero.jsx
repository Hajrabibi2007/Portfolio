import { ArrowRight, Github, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react'

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
      <div aria-hidden="true" className="hero-orbit absolute right-[12%] top-10 -z-10 h-[400px] w-[400px] rounded-full border border-[#8270d7]/25" />
      <div aria-hidden="true" className="hero-orbit absolute right-[16%] top-20 -z-10 h-[320px] w-[320px] rounded-full border border-[#8270d7]/20" />
      <div aria-hidden="true" className="absolute -right-20 top-24 -z-10 h-80 w-80 rounded-full bg-[#7565d6]/20 blur-[100px]" />
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
          <p className="mt-1 font-display text-sm font-medium text-[#bdb1ff]">Frontend Developer</p>
          <p className="mt-4 max-w-[490px] text-[13px] leading-[1.75] text-[#c6c7d4] sm:text-sm">
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

        <div className="relative mx-auto flex min-h-[330px] w-full max-w-[510px] items-center justify-center lg:min-h-[390px]">
          <div aria-hidden="true" className="absolute left-[10%] top-[19%] hidden -rotate-12 font-display text-lg italic leading-tight text-[#c1b6ff]/80 sm:block">
            Build<br />Learn<br />Grow
            <span className="mt-1 block text-sm">↘</span>
          </div>
          <div className="hero-profile-art relative flex h-[290px] w-[290px] items-center justify-center rounded-full border border-[#a78bfa]/30 sm:h-[340px] sm:w-[340px]">
            <div className="absolute inset-5 rounded-full border border-[#a78bfa]/20" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[#7565d6]/30 via-[#252744]/70 to-[#111426]" />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] shadow-[0_24px_90px_rgba(112,92,219,0.22)] backdrop-blur sm:h-44 sm:w-44">
              <span className="font-display text-6xl font-bold tracking-[-0.09em] text-[#d3c8ff] sm:text-7xl">HB</span>
              <span className="absolute -bottom-2 right-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#181a31] bg-[#a78bfa] text-[#17142b]">
                <Sparkles size={17} />
              </span>
            </div>
            <div className="absolute bottom-7 left-4 rounded-full border border-white/10 bg-[#1d2039]/90 px-3 py-1.5 text-[10px] font-medium text-[#e1dcff] shadow-xl backdrop-blur">
              BS Computer Science · 5th Semester
            </div>
          </div>
          <div className="absolute right-0 top-1/2 grid w-[148px] -translate-y-1/2 gap-1.5 rounded-2xl border border-white/10 bg-[#f8f7ff] p-2.5 text-[#25243b] shadow-2xl shadow-black/20 sm:-right-2 sm:w-[160px] sm:p-3">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl px-1.5 py-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#eee9ff] text-[#7864d2]"><Icon size={14} /></span>
                <span className="text-[9px] font-semibold leading-tight sm:text-[10px]">{label}<br />{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-white/10 py-4 text-[10px] font-medium text-[#b7b8c8] sm:text-[11px]">
        <span>Samundri / Faisalabad, Pakistan</span>
        <a href="#about" className="transition hover:text-white">Scroll to explore ↓</a>
      </div>
    </section>
  )
}

export default Hero
