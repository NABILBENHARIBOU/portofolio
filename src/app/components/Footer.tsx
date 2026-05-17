import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = ['About', 'Skills', 'Education', 'Projects', 'Tools', 'Contact'];
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/haribou-nabil-ben-609a91329/' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100090475674769' }
  ];

  return (
    <footer
      className="px-4 sm:px-6 lg:px-8 border-t"
      style={{
        borderColor: 'rgba(0, 209, 255, 0.1)',
        background: 'rgba(11, 15, 25, 0.8)'
      }}
    >
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <button
              type="button"
              onClick={() => onNavigate('hero')}
              className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl font-bold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
              style={{
                color: '#0B0F19',
                background: 'linear-gradient(135deg, #00D1FF 0%, #6C63FF 100%)',
                boxShadow: '0 0 24px rgba(0, 209, 255, 0.25)'
              }}
              aria-label="Go to hero section"
            >
              NB
            </button>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
              Cybersecurity student and full-stack developer building secure, modern web experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: '#00D1FF' }}>
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => {
                const sectionId = link.toLowerCase();

                return (
                  <a
                    key={link}
                    href={`#${sectionId}`}
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate(sectionId);
                    }}
                    className="text-sm transition-colors hover:text-[#00D1FF]"
                    style={{ color: '#E0E0E0' }}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide" style={{ color: '#00D1FF' }}>
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
                    style={{
                      color: '#fff',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(0, 209, 255, 0.12)'
                    }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate('contact');
                }}
                className="flex h-11 w-11 items-center justify-center rounded-lg transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
                style={{
                  color: '#00D1FF',
                  background: 'rgba(0, 209, 255, 0.08)',
                  border: '1px solid rgba(0, 209, 255, 0.18)'
                }}
                aria-label="Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'rgba(0, 209, 255, 0.1)', color: '#B0B0B0' }}
        >
          <p>© 2026 Nabil Ben Haribou. All rights reserved.</p>
          <p>Cybersecurity Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
