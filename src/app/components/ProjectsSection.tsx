import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Secure Appointment Management System',
      description: 'A secure web application built with Django REST and React for managing appointments with authentication and role-based access.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzkwMzYxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Django', 'React', 'API', 'Security'],
      gradient: 'from-[#00D1FF] to-[#6C63FF]'
    },
    {
      title: 'Local Web Penetration Testing Lab',
      description: 'A personal lab environment to practice web application pentesting using Kali Linux, Metasploit, and Burp Suite.',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcGVuZXRyYXRpb24lMjB0ZXN0aW5nJTIwbGFifGVufDF8fHx8MTc3OTAzNjEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Pentesting', 'Kali Linux', 'Metasploit'],
      gradient: 'from-[#6C63FF] to-[#00D1FF]'
    },
    {
      title: 'Student Management Dashboard',
      description: 'A reusable admin dashboard with data tables and authentication built using modern frontend tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZG1pbiUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzkwMzYxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'UI', 'Dashboard'],
      gradient: 'from-[#00D1FF] to-[#6C63FF]'
    },
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and API integration built with Spring Boot and React.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
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
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
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

                {/* View Project Button */}
                <Button
                  className="w-full transition-all hover:scale-105"
                  style={{
                    background: 'rgba(0, 209, 255, 0.1)',
                    color: '#00D1FF',
                    border: '1px solid rgba(0, 209, 255, 0.3)'
                  }}
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
