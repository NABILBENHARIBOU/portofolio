import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

function AppointmentPreview() {
  return (
    <div
      className="relative z-10 flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(47,109,252,0.18),transparent_34%),linear-gradient(135deg,#f7f9fc_0%,#e8f1ff_100%)] p-[clamp(18px,5vw,28px)]"
      aria-label="Appointment dashboard preview"
    >
      <article className="w-full max-w-[320px] rounded-[18px] border border-[#dae2ef]/90 bg-white p-[clamp(16px,4vw,22px)] shadow-[0_20px_48px_rgba(15,23,42,0.16),0_2px_8px_rgba(15,23,42,0.06)]">
        <header className="mb-[18px] flex items-center gap-[13px]">
          <span
            className="relative inline-flex h-[42px] w-[42px] shrink-0 rounded-[14px] border border-[#2f6dfc]/20 bg-[#e8f1ff] shadow-[inset_0_-1px_0_rgba(47,109,252,0.08)]"
            aria-hidden="true"
          >
            <span className="absolute left-[15px] top-[9px] h-[7px] w-[3px] rounded-full bg-[#2f6dfc]" />
            <span className="absolute right-[15px] top-[9px] h-[7px] w-[3px] rounded-full bg-[#2f6dfc]" />
            <span className="absolute left-[11px] right-[11px] top-[13px] h-[3px] rounded-full bg-[#2f6dfc]" />
            <span className="absolute left-[11px] right-[11px] top-[19px] h-[13px] rounded-b-[5px] border-2 border-t-0 border-[#2f6dfc]" />
          </span>
          <div>
            <h4 className="m-0 text-[clamp(0.92rem,2.4vw,1.04rem)] font-bold leading-[1.2] text-[#172033]">
              Rendez-vous du jour
            </h4>
            <time
              className="mt-1 block text-[0.82rem] font-medium leading-[1.3] text-[#64748b]"
              dateTime="2026-05-19"
            >
              19 mai 2026
            </time>
          </div>
        </header>
        <div className="rounded-[14px] border border-[#dde7f3] bg-[#f7f9fc] px-[15px] py-[14px] text-[clamp(0.82rem,2.2vw,0.93rem)] font-medium leading-[1.45] text-[#526173]">
          Aucun rendez-vous prévu aujourd'hui.
        </div>
      </article>
    </div>
  );
}

function GsdDashboardPreview() {
  const menuItems = [
    'Tableau de bord',
    'Administrateur',
    'Enseignant',
    'Eleve',
    'Parent',
    'Comptable',
    'Scolarite',
    'Pedagogie',
    'Presences',
    'Emploi du temps',
    'Paiements',
    'Administration'
  ];

  const stats = [
    ['Eleves inscrits', '0'],
    ['Enseignants', '0'],
    ['Presence du jour', '0%'],
    ['Paiements recus', '0 FCFA']
  ];

  return (
    <div
      className="relative z-10 h-full w-full overflow-hidden bg-[#f7f9fc] p-[clamp(8px,2.2vw,12px)]"
      aria-label="GSD school management admin dashboard preview"
    >
      <div className="mx-auto flex h-full w-full max-w-[520px] overflow-hidden rounded-[16px] border border-[#dfe6f0] bg-[#f7f9fc] shadow-[0_18px_42px_rgba(15,23,42,0.16)]">
        <aside className="hidden w-[104px] shrink-0 border-r border-[#e4eaf2] bg-white p-[8px] sm:block">
          <div className="mb-[7px] flex h-[24px] items-center gap-[6px]">
            <span className="grid h-[21px] w-[21px] place-items-center rounded-[8px] bg-[#2f6dfc] text-[7px] font-bold text-white">
              GSD
            </span>
            <span className="truncate text-[7px] font-semibold text-[#172033]">School</span>
          </div>
          <nav className="space-y-[2px]">
            {menuItems.map((item, index) => (
              <div
                key={item}
                className={`h-[11px] truncate rounded-[6px] px-[5px] text-[5.1px] font-medium leading-[11px] ${
                  index === 0
                    ? 'bg-[#e8f1ff] text-[#2f6dfc]'
                    : 'text-[#667085]'
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="flex h-[30px] items-center justify-between gap-[8px] border-b border-[#e4eaf2] bg-white px-[10px]">
            <h4 className="min-w-0 truncate text-[7.6px] font-bold text-[#172033]">
              Tableau de bord administrateur
            </h4>
            <div className="flex shrink-0 items-center gap-[4px]">
              <span className="h-[10px] w-[30px] rounded-full bg-[#f1f5fb]" />
              <span className="h-[13px] w-[13px] rounded-full bg-[#e8f1ff]" />
            </div>
          </header>

          <div className="space-y-[6px] p-[8px]">
            <section className="rounded-[12px] border border-[#e2e8f0] bg-white p-[8px] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
              <h5 className="mb-[3px] truncate text-[7.8px] font-bold leading-tight text-[#172033]">
                Bienvenue, Admin
              </h5>
              <p className="max-w-[260px] text-[5.7px] font-medium leading-[1.35] text-[#667085]">
                Gerez l'etablissement, les classes, les presences et les
                paiements depuis un tableau de bord centralise.
              </p>
            </section>

            <section className="grid grid-cols-4 gap-[5px]">
              {stats.map(([label, value]) => (
                <article
                  key={label}
                  className="min-w-0 rounded-[10px] border border-[#e2e8f0] bg-white p-[6px] shadow-[0_7px_16px_rgba(15,23,42,0.05)]"
                >
                  <p className="mb-[4px] truncate text-[5px] font-semibold text-[#667085]">
                    {label}
                  </p>
                  <strong className="block truncate text-[9px] font-bold leading-none text-[#172033]">
                    {value}
                  </strong>
                </article>
              ))}
            </section>

            <section className="grid grid-cols-2 gap-[6px]">
              <article className="min-w-0 rounded-[12px] border border-[#e2e8f0] bg-white p-[7px] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <h5 className="mb-[6px] truncate text-[7px] font-bold text-[#172033]">
                  Actions rapides
                </h5>
                <div className="space-y-[5px]">
                  <button className="flex h-[17px] w-full items-center justify-between gap-[4px] rounded-[8px] bg-[#2f6dfc] px-[7px] text-left text-[5.7px] font-semibold text-white">
                    <span className="min-w-0 truncate">Gerer les eleves</span>
                    <span aria-hidden="true">+</span>
                  </button>
                  <button className="h-[17px] w-full truncate rounded-[8px] border border-[#dbe4f0] bg-[#f7f9fc] px-[7px] text-left text-[5.7px] font-semibold text-[#344054]">
                    Gerer les emplois du temps
                  </button>
                </div>
              </article>

              <article className="min-w-0 rounded-[12px] border border-[#e2e8f0] bg-white p-[7px] shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
                <h5 className="mb-[6px] truncate text-[7px] font-bold text-[#172033]">
                  Suivi du jour
                </h5>
                <div className="space-y-[5px]">
                  <div className="flex items-center justify-between gap-[4px] rounded-[8px] bg-[#f7f9fc] px-[7px] py-[5px]">
                    <span className="min-w-0 truncate text-[5.7px] font-medium text-[#667085]">
                      0 eleves inscrits
                    </span>
                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#2f6dfc]" />
                  </div>
                  <div className="flex items-center justify-between gap-[4px] rounded-[8px] bg-[#f7f9fc] px-[7px] py-[5px]">
                    <span className="min-w-0 truncate text-[5.7px] font-medium text-[#667085]">
                      0 enseignants affectes
                    </span>
                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#2f6dfc]" />
                  </div>
                </div>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: 'Secure Appointment Management System',
      description: 'A secure web application built with Django REST and React for managing appointments with authentication and role-based access.',
      preview: 'appointments',
      links: [
        { label: 'Live Demo', href: '#', icon: ExternalLink },
        { label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU/gestion-rendez-vous', icon: Github }
      ],
      tags: ['Django', 'React', 'API', 'Security'],
      gradient: 'from-[#00D1FF] to-[#6C63FF]'
    },
    {
      title: 'Local Web Penetration Testing Lab',
      description: 'A personal lab environment to practice web application pentesting using Kali Linux, Metasploit, and Burp Suite.',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcGVuZXRyYXRpb24lMjB0ZXN0aW5nJTIwbGFifGVufDF8fHx8MTc3OTAzNjEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { label: 'Live Demo', href: '#', icon: ExternalLink },
        { label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU', icon: Github }
      ],
      tags: ['Pentesting', 'Kali Linux', 'Metasploit'],
      gradient: 'from-[#6C63FF] to-[#00D1FF]'
    },
    {
      title: 'Student Management Dashboard',
      description: 'A reusable admin dashboard with data tables and authentication built using modern frontend tools.',
      preview: 'gsd-dashboard',
      links: [
        { label: 'Live Demo', href: '#', icon: ExternalLink },
        { label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU/gestions_ecole', icon: Github }
      ],
      tags: ['React', 'UI', 'Dashboard'],
      gradient: 'from-[#00D1FF] to-[#6C63FF]'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and API integration built with Spring Boot and React.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { label: 'Live Demo', href: '#', icon: ExternalLink },
        { label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU', icon: Github }
      ],
      tags: ['Spring Boot', 'React', 'Vite', 'TypeScript'],
      gradient: 'from-[#6C63FF] to-[#00D1FF]'
    }
  ];

  return (
    <section id="projects" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-12 text-center"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#fff'
            }}
          >
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 209, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 209, 255, 0.1)'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                {project.preview === 'appointments' ? (
                  <AppointmentPreview />
                ) : project.preview === 'gsd-dashboard' ? (
                  <GsdDashboardPreview />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className="mb-3"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#fff'
                  }}
                >
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="px-3 py-1 text-xs"
                      style={{
                        background: 'rgba(0, 209, 255, 0.1)',
                        color: '#00D1FF',
                        border: '1px solid rgba(0, 209, 255, 0.3)'
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => {
                    const Icon = link.icon ?? ExternalLink;

                    return (
                      <Button
                        key={link.label}
                        asChild
                        className="flex-1 min-w-[130px] transition-all hover:scale-105"
                        style={{
                          background: 'rgba(0, 209, 255, 0.1)',
                          color: '#00D1FF',
                          border: '1px solid rgba(0, 209, 255, 0.3)'
                        }}
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon size={16} />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
