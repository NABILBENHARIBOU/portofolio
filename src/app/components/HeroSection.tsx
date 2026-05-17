import { motion } from 'motion/react';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import naka from '../../assets/naka.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#00D1FF' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#6C63FF' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ backgroundColor: '#00D1FF' }}
              />
              <div
                className="relative rounded-full overflow-hidden backdrop-blur-sm p-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 209, 255, 0.2) 0%, rgba(108, 99, 255, 0.2) 100%)',
                  border: '2px solid rgba(0, 209, 255, 0.3)',
                  boxShadow: '0 0 40px rgba(0, 209, 255, 0.2)'
                }}
              >
                <ImageWithFallback
                  src={naka}
                  alt="Nabil Ben Haribou"
                  className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="mb-4"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #00D1FF 0%, #6C63FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Nabil Ben Haribou
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                color: '#00D1FF',
                fontWeight: '600'
              }}
            >
              Cybersecurity Student & Full-Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mb-8 text-lg lg:mx-0 mx-auto"
              style={{ color: '#B0B0B0' }}
            >
              Passionate about cybersecurity, ethical hacking, and modern web development.
              I build secure, scalable applications and perform security testing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => onNavigate('projects')}
                className="px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: '#00D1FF',
                  color: '#0B0F19',
                  boxShadow: '0 0 30px rgba(0, 209, 255, 0.3)'
                }}
              >
                View My Work
              </Button>
              <Button
                onClick={() => {
                  // Create a link element and trigger download
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'cv.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-6 text-lg rounded-full transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid #00D1FF',
                  color: '#00D1FF',
                  boxShadow: '0 0 20px rgba(0, 209, 255, 0.2)'
                }}
              >
                <Download size={20} />
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} style={{ color: '#00D1FF' }} />
      </motion.div>
    </section>
  );
}
