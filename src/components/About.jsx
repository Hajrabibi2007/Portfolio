import { GraduationCap, Heart, MapPin, Target } from 'lucide-react'

const details = [
  {
    icon: GraduationCap,
    label: 'Education',
    title: 'BS Computer Science',
    description: '5th Semester',
    tone: 'violet',
  },
  {
    icon: MapPin,
    label: 'Location',
    title: 'Pakistan',
    description: 'Samundri / Faisalabad',
    tone: 'blue',
  },
  {
    icon: Heart,
    label: 'Interests',
    title: 'Web Development',
    description: 'UI/UX · Clean code · Real-world projects',
    tone: 'rose',
  },
  {
    icon: Target,
    label: 'Career Goal',
    title: 'Become a Software Developer',
    description: 'Build useful products and keep learning.',
    tone: 'indigo',
  },
]

function About() {
  return (
    <section id="about" className="scroll-mt-[62px] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">
          <span>✦</span> About me
        </div>
        <div className="grid gap-8 md:grid-cols-[1fr_0.72fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-4xl">A Little Bit<br />About Me</h2>
            <p className="mt-4 max-w-xl text-[12px] leading-[1.8] text-[#687087] dark:text-[#c0c1d0] sm:text-[13px]">
              I am a Software Engineering student with a passion for web development, clean code, and building useful real-world projects. I enjoy designing beautiful websites and learning new skills. My goal is to build a career in software development and work on projects that make a positive impact.
            </p>
          </div>
          <div className="about-visual relative mx-auto flex h-[205px] w-full max-w-[310px] items-center justify-center overflow-hidden rounded-[5rem_1.5rem_5rem_1.5rem] bg-gradient-to-br from-[#eee9ff] to-[#f9edf0] dark:from-[#2b2741] dark:to-[#342b3c]">
            <img
              src="/about-study.svg"
              alt="Illustration of a desk with a plant, notebook, and laptop"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute right-3 top-3 max-w-28 rotate-6 font-display text-sm italic leading-tight text-[#655a84] dark:text-[#d0c6ff]">Good Ideas<br />Take Time ♡</span>
          </div>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(({ icon: Icon, label, title, description, tone }) => (
            <article key={label} className="rounded-xl border border-[#eeedf5] bg-white p-4 shadow-[0_4px_20px_rgba(45,43,69,0.035)] transition hover:-translate-y-0.5 hover:border-[#d9d0ff] dark:border-white/10 dark:bg-white/[0.035]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2]">
                <Icon size={16} strokeWidth={1.9} className={tone === 'rose' ? 'text-[#e56e92]' : tone === 'blue' ? 'text-[#6484e8]' : ''} />
              </div>
              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#8c91a3]">{label}</p>
              <h3 className="mt-1 font-display text-[12px] font-bold leading-snug">{title}</h3>
              <p className="mt-1 text-[10px] leading-relaxed text-[#7a8093] dark:text-[#aeb0c0]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
