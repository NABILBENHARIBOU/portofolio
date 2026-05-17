import { motion } from 'motion/react';
import { Terminal, Activity, Radar, Wifi, Container, Github, Code2, Award } from 'lucide-react';

export function ToolsSection() {
  const tools = [
    { name: 'Kali Linux', icon: Terminal },
    { name: 'Metasploit', icon: Activity },
    { name: 'Nmap', icon: Radar },
    { name: 'Wireshark', icon: Wifi },
    { name: 'Docker', icon: Container },
    { name: 'GitHub', icon: Github },
    { name: 'VS Code', icon: Code2 }
  ];

  const certifications = [
    'CompTIA Security+ (In Progress)',
    'Certified Ethical Hacker (CEH) - Planned',
    'OSCP - Goal'
  ];

  return (
    <section id="tools" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
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
            Tools & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-6 text-center lg:text-left"
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#00D1FF'
              }}
            >
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl backdrop-blur-sm text-center transition-all"
                    style={{
                      background: 'rgba(0, 209, 255, 0.05)',
                      border: '1px solid rgba(0, 209, 255, 0.2)',
                      boxShadow: '0 0 20px rgba(0, 209, 255, 0.1)'
                    }}
                  >
                    <div className="flex justify-center mb-2">
                      <Icon size={28} style={{ color: '#00D1FF' }} />
                    </div>
                    <p className="text-sm font-medium" style={{ color: '#fff' }}>
                      {tool.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-6 text-center lg:text-left"
              style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#6C63FF'
              }}
            >
              Certifications
            </h3>
            <div 
              className="p-8 rounded-2xl backdrop-blur-sm"
              style={{
                background: 'rgba(108, 99, 255, 0.05)',
                border: '1px solid rgba(108, 99, 255, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(108, 99, 255, 0.1)'
              }}
            >
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div 
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{
                        background: 'rgba(108, 99, 255, 0.2)'
                      }}
                    >
                      <Award size={24} style={{ color: '#6C63FF' }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: '#fff' }}>
                        {cert}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(108, 99, 255, 0.2)' }}>
                <p className="text-sm text-center" style={{ color: '#B0B0B0' }}>
                  Continuously learning and expanding my cybersecurity knowledge
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
