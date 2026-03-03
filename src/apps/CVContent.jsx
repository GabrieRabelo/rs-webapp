import { Mail, Linkedin, Globe } from 'lucide-react';

export default function CVContent() {
  return (
    <div className="bg-white text-zinc-900 p-6 md:p-8 min-h-full font-serif shadow-inner">
      <header className="border-b-2 border-zinc-900 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Gabriel Rabelo</h1>
        <p className="text-zinc-600 font-sans mt-1 text-sm md:text-base">Software Engineer | Java • Kotlin • React</p>
        <div className="flex flex-wrap gap-3 mt-3 text-[10px] md:text-xs font-sans text-blue-600">
          <span className="flex items-center gap-1"><Mail size={12} /> gabriel@rabelosolutions.com</span>
          <span className="flex items-center gap-1"><Linkedin size={12} /> /in/rabelito</span>
          <span className="flex items-center gap-1"><Globe size={12} /> rabelosolutions.com</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase text-zinc-400 mb-2 font-sans tracking-widest">Resumo</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          Desenvolvedor Fullstack com experiência em sistemas distribuídos e criação de interfaces interativas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xs font-bold uppercase text-zinc-400 mb-2 font-sans tracking-widest">Experiência</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">Senior Software Engineer</h3>
              <span className="text-[10px] font-sans text-zinc-500">2022 — Presente</span>
            </div>
            <p className="text-[10px] italic text-zinc-600">Tech Solutions Corp</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-bold uppercase text-zinc-400 mb-2 font-sans tracking-widest">Skills</h2>
        <div className="flex flex-wrap gap-1.5">
          {['Java', 'Kotlin', 'Spring Boot', 'React', 'TS', 'Tailwind', 'Docker'].map(skill => (
            <span key={skill} className="text-[9px] bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}