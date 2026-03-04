import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-[10px] font-bold uppercase text-zinc-400 mb-3 font-sans tracking-widest border-b border-zinc-200 pb-1">
      {title}
    </h2>
    {children}
  </section>
);

const Job = ({ title, company, period, bullets }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline flex-wrap gap-1">
      <h3 className="font-bold text-sm">{title}</h3>
      <span className="text-[10px] font-sans text-zinc-500 shrink-0">{period}</span>
    </div>
    <p className="text-[11px] italic text-zinc-500 mb-1">{company}</p>
    <ul className="list-disc list-outside ml-4 space-y-0.5">
      {bullets.map((b, i) => (
        <li key={i} className="text-[11px] leading-relaxed text-zinc-700">{b}</li>
      ))}
    </ul>
  </div>
);

export default function CVContent() {
  return (
    <div className="bg-white text-zinc-900 p-6 md:p-8 min-h-full font-serif shadow-inner">

      {/* Header */}
      <header className="border-b-2 border-zinc-900 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Gabriel Rabelo</h1>
        <p className="text-zinc-500 font-sans mt-0.5 text-xs">Software Engineer · Porto Alegre, Brazil · Open to remote LATAM roles</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[10px] font-sans text-blue-600">
          <a href="tel:+5551993028304" className="flex items-center gap-1 hover:underline"><Phone size={11} /> +55 51 99302-8304</a>
          <a href="mailto:gabriel@rabelosolutions.com" className="flex items-center gap-1 hover:underline"><Mail size={11} /> gabriel@rabelosolutions.com</a>
          <a href="https://linkedin.com/in/rabelito" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><Linkedin size={11} /> rabelito</a>
          <a href="https://github.com/GabrieRabelo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline"><Github size={11} /> GabrieRabelo</a>
        </div>
      </header>

      {/* Summary */}
      <Section title="Professional Summary">
        <p className="text-xs md:text-sm leading-relaxed text-zinc-700">
          Software Engineer with over 6 years of experience building scalable, high-reliability systems within the fintech sector.
          Expert in Java, Kotlin, and Clojure, with a robust background in distributed systems, microservices, and event-driven
          architectures serving millions of active users. Focused on technical excellence, functional programming, and leveraging
          AI-driven tooling to optimize engineering workflows.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Technical Skills">
        <div className="space-y-1.5 text-[11px] font-sans">
          {[
            { label: 'Languages', value: 'Java, Kotlin, Clojure, SQL' },
            { label: 'Technologies', value: 'Spring Boot, Spring WebFlux, Kafka, gRPC, Datomic, Docker, Kubernetes' },
            { label: 'Architecture', value: 'Microservices, Event-Driven Architecture, Distributed Systems, High Availability' },
            { label: 'Practices', value: 'Unit & E2E Testing, Functional Programming, Clean Code, TDD, Agile Development' },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-2">
              <span className="font-bold text-zinc-900 shrink-0">{label}:</span>
              <span className="text-zinc-700">{value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Work Experience">
        <Job
          title="Software Engineer"
          company="Nubank — Brazil (Remote)"
          period="12/2024 – 02/2026"
          bullets={[
            'Developed reliable and scalable backend systems using Clojure and Datomic, contributing to key services within the Variable Income Platform.',
            'Built and maintained high-availability distributed systems integrated with Kafka, ensuring resilient processing for millions of active users.',
            'Promoted high-quality code practices and fostered team growth through consistent knowledge-sharing and technical mentorship.',
            'Explored and implemented AI-driven tooling to enhance developer productivity and streamline complex engineering workflows.',
            'Led technical discovery and refinement sessions to translate business requirements into production-ready architectural solutions.',
          ]}
        />
        <Job
          title="Software Engineer"
          company="Sicredi (Credit Union Administrative Center) — Porto Alegre, Brazil"
          period="07/2021 – 12/2024"
          bullets={[
            'Designed and maintained mission-critical backend microservices using the Java/Kotlin and Spring Boot ecosystem.',
            'Led technical refinement sessions, improving architecture quality and accelerating team delivery speed.',
            'Mentored junior engineers and new hires, promoting a culture of clean code, reactive practices, and testing excellence.',
            'Supported critical production systems in the financial domain, ensuring stability and rapid incident resolution.',
          ]}
        />
        <Job
          title="Software Engineering Intern"
          company="Sicredi — Porto Alegre, Brazil"
          period="01/2020 – 07/2021"
          bullets={[
            'Assisted in backend development utilizing Java, Kotlin, and Spring WebFlux for reactive systems.',
            'Supported production environments by troubleshooting and resolving incidents in real-time.',
            'Conducted comprehensive software testing (unit, integration, and E2E) to ensure release stability.',
          ]}
        />
        <Job
          title="Software Engineering Intern"
          company="PUCRS / Thoughtworks — Porto Alegre, Brazil"
          period="06/2019 – 12/2019"
          bullets={[
            'Collaborated with ThoughtWorks mentors in an academic-industry partnership to develop experimental software solutions.',
            'Applied Agile methodologies, pair programming, and clean code practices in real-world projects.',
          ]}
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <div>
          <div className="flex justify-between items-baseline flex-wrap gap-1">
            <h3 className="font-bold text-sm">Bachelor's Degree in Software Engineering</h3>
            <span className="text-[10px] font-sans text-zinc-500">2019 – 2023</span>
          </div>
          <p className="text-[11px] italic text-zinc-500">Pontifical Catholic University of Rio Grande do Sul (PUCRS)</p>
        </div>
      </Section>

      {/* Languages & Interests */}
      <Section title="Languages & Interests">
        <div className="space-y-1 text-[11px] font-sans">
          <div className="flex gap-2">
            <span className="font-bold text-zinc-900 shrink-0">Languages:</span>
            <span className="text-zinc-700">Portuguese (Native), English (Full Professional), Italian (Elementary)</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-zinc-900 shrink-0">Interests:</span>
            <span className="text-zinc-700">Technology, Reading, Fitness (Muay Thai), Specialty Coffee, Continuous Learning</span>
          </div>
        </div>
      </Section>

    </div>
  );
}
