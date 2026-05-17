import { motion } from 'motion/react';
import { 
  Shield, 
  Network, 
  Terminal, 
  Code2, 
  Layers, 
  Container, 
  GitBranch, 
  Radar,
  Wifi,
  Bug,
  KeyRound,
  Calculator
} from 'lucide-react';

export function SkillsSection() {
  const skills = [
    { name: 'Pentesting', icon: Shield, color: '#00D1FF' },
    { name: 'Networking', icon: Network, color: '#6C63FF' },
    { name: 'Linux', icon: Terminal, color: '#00D1FF' },
    { name: 'Django', icon: Code2, color: '#6C63FF' },
    { name: 'React', icon: Layers, color: '#00D1FF' },
    { name: 'Docker', icon: Container, color: '#6C63FF' },
    { name: 'Git', icon: GitBranch, color: '#00D1FF' },
    { name: 'Nmap', icon: Radar, color: '#6C63FF' },
    { name: 'Wireshark', icon: Wifi, color: '#00D1FF' },
    { name: 'Burp Suite', icon: Bug, color: '#6C63FF' },
    { name: 'Cryptography', icon: KeyRound, color: '#00D1FF' },
    { name: 'Mathematics', icon: Calculator, color: '#6C63FF' }
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
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
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl backdrop-blur-sm text-center transition-all cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${skill.color}33`,
                  boxShadow: `0 8px 32px 0 ${skill.color}1A`
                }}
              >
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-4 rounded-xl"
                    style={{
                      background: `${skill.color}1A`,
                      boxShadow: `0 0 20px ${skill.color}33`
                    }}
                  >
                    <Icon size={32} style={{ color: skill.color }} />
                  </div>
                </div>
                <h3 
                  className="font-semibold"
                  style={{ color: '#fff' }}
                >
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
