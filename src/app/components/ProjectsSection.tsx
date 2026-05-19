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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZG1pbiUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzkwMzYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      links: [
        { label: 'Live Demo', href: '#', icon: ExternalLink },
        { label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU', icon: Github }
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
