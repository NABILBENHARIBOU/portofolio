import { useState } from 'react';
import { motion } from 'motion/react';
import { Facebook, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!web3FormsAccessKey) {
      setSubmitStatus('Contact form is not configured yet. Please add your Web3Forms access key.');
      setIsSubmitting(false);
      return;
    }

    try {
      const submissionData = new FormData();
      submissionData.append('access_key', web3FormsAccessKey);
      submissionData.append('subject', `New portfolio message from ${formData.name}`);
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Message failed to send');
      }

      setSubmitStatus('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('Message could not be sent. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/NABILBENHARIBOU', color: '#fff' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/haribou-nabil-ben-609a91329/', color: '#0077B5' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100090475674769', color: '#1877F2' }
  ];

  return (
    <section id="contact" className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            Get In Touch
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: '#B0B0B0' }}>
            Have a project in mind or want to discuss cybersecurity? Let's connect!
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(0, 209, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 209, 255, 0.1)'
              }}
            >
              <div className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-2 text-sm"
                    style={{ color: '#fff' }}
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg transition-all focus:shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 209, 255, 0.2)',
                      color: '#fff'
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm"
                    style={{ color: '#fff' }}
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg transition-all focus:shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 209, 255, 0.2)',
                      color: '#fff'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-sm"
                    style={{ color: '#fff' }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full rounded-lg transition-all focus:shadow-lg resize-none"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 209, 255, 0.2)',
                      color: '#fff'
                    }}
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-lg transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #00D1FF 0%, #6C63FF 100%)',
                    color: '#fff',
                    boxShadow: '0 0 30px rgba(0, 209, 255, 0.3)'
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2" />
                </Button>

                {submitStatus && (
                  <p className="text-center text-sm" style={{ color: '#B0B0B0' }}>
                    {submitStatus}
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="grid grid-cols-3 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-xl backdrop-blur-sm transition-all"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(0, 209, 255, 0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        background: 'rgba(0, 209, 255, 0.1)'
                      }}
                    >
                      <Icon size={28} style={{ color: social.color }} />
                    </div>
                    <span className="text-sm" style={{ color: '#fff' }}>{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
