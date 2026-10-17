import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'

const contactEmail = 'hajrabibi7002@gmail.com'
const linkedInUrl = 'https://www.linkedin.com/in/hajra-bibi-b47110320'
const githubUrl = 'https://github.com/Hajrabibi2007'

function Contact() {
  const [formState, setFormState] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setFormState('sent')
    form.reset()
  }

  return (
    <section id="contact" className="scroll-mt-[62px] px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#7864d2]">✦ Contact</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Let&apos;s Work Together</h2>
          <p className="mt-2 max-w-lg text-[11px] font-medium leading-relaxed text-[#555b6d] dark:text-[#d0d0df]">Have a project in mind or just want to say hello? Feel free to contact me.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid content-start gap-3 sm:grid-cols-2">
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 rounded-xl border border-[#eeedf5] bg-white p-3.5 shadow-[0_4px_18px_rgba(45,43,69,0.03)] transition hover:border-[#d9d0ff] dark:border-white/10 dark:bg-white/[0.035]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2]"><Mail size={15} /></span>
              <span className="min-w-0"><span className="block text-[9px] font-bold text-[#555b6d] dark:text-[#d0d0df]">Email</span><span className="mt-0.5 block truncate text-[10px] font-semibold text-[#292a3a] dark:text-[#f0eff8]">{contactEmail}</span></span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-[#eeedf5] bg-white p-3.5 shadow-[0_4px_18px_rgba(45,43,69,0.03)] dark:border-white/10 dark:bg-white/[0.035]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2]"><MapPin size={15} /></span>
              <span><span className="block text-[9px] font-bold text-[#555b6d] dark:text-[#d0d0df]">Location</span><span className="mt-0.5 block text-[10px] font-semibold text-[#292a3a] dark:text-[#f0eff8]">Samundri / Faisalabad</span></span>
            </div>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#eeedf5] bg-white p-3.5 shadow-[0_4px_18px_rgba(45,43,69,0.03)] transition hover:border-[#d9d0ff] dark:border-white/10 dark:bg-white/[0.035]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2]"><Linkedin size={15} /></span>
              <span><span className="block text-[9px] font-bold text-[#555b6d] dark:text-[#d0d0df]">LinkedIn</span><span className="mt-0.5 block text-[10px] font-semibold text-[#292a3a] dark:text-[#f0eff8]">linkedin.com/in/hajra-bibi-b47110320</span></span>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-[#eeedf5] bg-white p-3.5 shadow-[0_4px_18px_rgba(45,43,69,0.03)] transition hover:border-[#d9d0ff] dark:border-white/10 dark:bg-white/[0.035]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0edff] text-[#7864d2]"><Github size={15} /></span>
              <span><span className="block text-[9px] font-bold text-[#555b6d] dark:text-[#d0d0df]">GitHub</span><span className="mt-0.5 block text-[10px] font-semibold text-[#292a3a] dark:text-[#f0eff8]">github.com/Hajrabibi2007</span></span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-[#eeedf5] bg-white p-4 text-[#292a3a] shadow-[0_5px_22px_rgba(45,43,69,0.04)] dark:border-white/10 dark:bg-white/[0.035] dark:text-[#f0eff8] sm:p-5">
            <div className="grid gap-3">
              <label className="block text-[10px] font-bold text-[#3d4152] dark:text-[#e3e2ed]">
                Name
                <input name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" className="mt-1.5 w-full rounded-lg border border-[#d9d8e3] bg-[#fdfdff] px-3 py-2.5 text-[11px] font-medium text-[#242438] outline-none transition placeholder:font-medium placeholder:text-[#737789] focus:border-[#9c88ed] focus:ring-2 focus:ring-[#a78bfa]/15 dark:border-white/20 dark:bg-[#171827] dark:text-white dark:placeholder:text-[#b4b5c5]" />
              </label>
              <label className="block text-[10px] font-bold text-[#3d4152] dark:text-[#e3e2ed]">
                Email
                <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Your email" className="mt-1.5 w-full rounded-lg border border-[#d9d8e3] bg-[#fdfdff] px-3 py-2.5 text-[11px] font-medium text-[#242438] outline-none transition placeholder:font-medium placeholder:text-[#737789] focus:border-[#9c88ed] focus:ring-2 focus:ring-[#a78bfa]/15 dark:border-white/20 dark:bg-[#171827] dark:text-white dark:placeholder:text-[#b4b5c5]" />
              </label>
              <label className="block text-[10px] font-bold text-[#3d4152] dark:text-[#e3e2ed]">
                Message
                <textarea name="message" required minLength={10} maxLength={5000} rows={3} placeholder="Your message..." className="mt-1.5 w-full resize-y rounded-lg border border-[#d9d8e3] bg-[#fdfdff] px-3 py-2.5 text-[11px] font-medium leading-relaxed text-[#242438] outline-none transition placeholder:font-medium placeholder:text-[#737789] focus:border-[#9c88ed] focus:ring-2 focus:ring-[#a78bfa]/15 dark:border-white/20 dark:bg-[#171827] dark:text-white dark:placeholder:text-[#b4b5c5]" />
              </label>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p aria-live="polite" className="text-[9px] font-medium text-[#555b6d] dark:text-[#c5c5d4]">
                {formState === 'sent' ? `Your email app should open a draft to ${contactEmail}.` : 'Opens a pre-filled email draft.'}
              </p>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#7058d7] px-4 py-2.5 text-[10px] font-bold text-white transition hover:bg-[#5c45bf]">
                Send Message <Send size={12} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
