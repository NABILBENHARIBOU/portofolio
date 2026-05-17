import { motion } from 'motion/react';
import { BriefcaseBusiness, GraduationCap, ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog';

export function EducationSection() {
  const timelineItems = [
    {
      icon: GraduationCap,
      title: 'Cybersecurity Studies',
      period: 'Current',
      description:
        'Focused on network security, ethical hacking, secure development, and practical cybersecurity fundamentals.',
      details:
        'This path builds a strong foundation in cybersecurity concepts, secure application design, network protection, and practical defensive thinking.',
      highlights: [
        'Network security fundamentals and threat analysis',
        'Secure coding habits for web applications',
        'Hands-on practice with ethical hacking concepts'
      ],
      tags: ['Cybersecurity', 'Networking', 'Ethical Hacking']
    },
    {
      icon: BriefcaseBusiness,
      title: 'Full-Stack Development Practice',
      period: 'Projects',
      description:
        'Building full-stack web applications with Django, Spring Boot, React, Vite, and TypeScript.',
      details:
        'Project work focused on creating complete applications, from backend APIs and databases to responsive frontend interfaces.',
      highlights: [
        'Backend development with Django and Spring Boot',
        'Frontend interfaces with React, Vite, and TypeScript',
        'Practical project structure, routing, and deployment habits'
      ],
      tags: ['Django', 'Spring Boot', 'React', 'TypeScript']
    },
    {
      icon: ShieldCheck,
      title: 'Security Learning Path',
      period: 'In Progress',
      description:
        'Practicing penetration testing workflows with tools such as Kali Linux, Nmap, Wireshark, Burp Suite, and Metasploit.',
      details:
        'A practical learning track dedicated to security testing workflows, reconnaissance, traffic analysis, and vulnerability discovery.',
      highlights: [
        'Reconnaissance and scanning with Nmap',
        'Traffic inspection with Wireshark',
        'Web security testing using Burp Suite'
      ],
      tags: ['Kali Linux', 'Nmap', 'Burp Suite', 'Metasploit']
    }
  ];

  return (
    <section id="education" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-4 text-center"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
              color: '#fff'
            }}
          >
            Education & Experience
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-lg" style={{ color: '#B0B0B0' }}>
            A focused path combining cybersecurity studies, hands-on labs, and full-stack application development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="rounded-2xl overflow-hidden backdrop-blur-sm text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(0, 209, 255, 0.1)',
                      boxShadow: '0 8px 32px 0 rgba(0, 209, 255, 0.1)'
                    }}
                  >
                    <div className="relative h-48 overflow-hidden flex items-center justify-center">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          background:
                            index % 2 === 0
                              ? 'linear-gradient(135deg, #00D1FF 0%, #6C63FF 100%)'
                              : 'linear-gradient(135deg, #6C63FF 0%, #00D1FF 100%)'
                        }}
                      />
                      <div
                        className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
                        style={{
                          background: 'rgba(11, 15, 25, 0.75)',
                          border: '1px solid rgba(0, 209, 255, 0.25)',
                          boxShadow: '0 0 30px rgba(0, 209, 255, 0.2)'
                        }}
                      >
                        <Icon size={44} style={{ color: index % 2 === 0 ? '#00D1FF' : '#6C63FF' }} />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: '#fff'
                          }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="text-sm px-3 py-1 rounded-full w-fit"
                          style={{
                            color: '#00D1FF',
                            background: 'rgba(0, 209, 255, 0.08)',
                            border: '1px solid rgba(0, 209, 255, 0.18)'
                          }}
                        >
                          {item.period}
                        </span>
                      </div>

                      <p className="mb-4 text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full"
                            style={{
                              color: '#E0E0E0',
                              background: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                </DialogTrigger>

                <DialogContent
                  className="sm:max-w-xl"
                  style={{
                    background: 'rgba(11, 15, 25, 0.96)',
                    border: '1px solid rgba(0, 209, 255, 0.24)',
                    boxShadow: '0 24px 70px rgba(0, 209, 255, 0.18)',
                    color: '#fff'
                  }}
                >
                  <DialogHeader>
                    <div
                      className="mb-2 w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'rgba(0, 209, 255, 0.08)',
                        border: '1px solid rgba(0, 209, 255, 0.2)'
                      }}
                    >
                      <Icon size={28} style={{ color: index % 2 === 0 ? '#00D1FF' : '#6C63FF' }} />
                    </div>
                    <DialogTitle className="text-2xl" style={{ color: '#fff' }}>
                      {item.title}
                    </DialogTitle>
                    <DialogDescription className="text-base leading-relaxed" style={{ color: '#B0B0B0' }}>
                      {item.details}
                    </DialogDescription>
                  </DialogHeader>

                  <div>
                    <p className="mb-3 text-sm font-semibold" style={{ color: '#00D1FF' }}>
                      More details
                    </p>
                    <ul className="space-y-3">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#E0E0E0' }}>
                          <span className="mt-2 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: '#00D1FF' }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          color: '#E0E0E0',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
