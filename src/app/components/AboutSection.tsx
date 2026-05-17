import { motion } from 'motion/react';
import { Code2, Shield, Terminal, Database, Globe, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const techIcons = [
    { icon: Shield, label: 'Security' },
    { icon: Code2, label: 'Development' },
    { icon: Terminal, label: 'Linux' },
    { icon: Database, label: 'Databases' },
    { icon: Globe, label: 'Web Tech' },
    { icon: Lock, label: 'Encryption' }
  ];

  return (
    <section id="about" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div 
              className="relative rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80"
              style={{
                border: '4px solid #00D1FF',
                boxShadow: '0 0 40px rgba(0, 209, 255, 0.3)'
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjeWJlcnNlY3VyaXR5JTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc5MDM2MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nabil Ben Haribou"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 209, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 209, 255, 0.1)'
              }}
            >
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#E0E0E0' }}>
                I am a cybersecurity student and aspiring pentester with a strong interest in 
                ethical hacking, network security, and secure web development. I work with 
                technologies like Django, React, Linux, and Docker while learning professional 
                penetration testing using tools such as Nmap, Wireshark, and Burp Suite.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#E0E0E0' }}>
                My goal is to become an expert in offensive security and build highly secure applications.
              </p>

              {/* Tech Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                {techIcons.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-105"
                    style={{
                      background: 'rgba(0, 209, 255, 0.05)',
                      border: '1px solid rgba(0, 209, 255, 0.2)'
                    }}
                  >
                    <Icon size={24} style={{ color: '#00D1FF' }} />
                    <span className="text-xs" style={{ color: '#B0B0B0' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
