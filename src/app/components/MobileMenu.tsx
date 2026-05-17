import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isOpen: boolean;
  onNavigate: (section: string) => void;
}

export function MobileMenu({ isOpen, onNavigate }: MobileMenuProps) {
  const menuItems = ['About', 'Skills', 'Education', 'Projects', 'Tools', 'Contact'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden fixed top-16 left-0 right-0 z-40 backdrop-blur-md border-b overflow-hidden"
          style={{
            backgroundColor: 'rgba(11, 15, 25, 0.95)',
            borderColor: 'rgba(0, 209, 255, 0.1)'
          }}
        >
          <div className="px-4 py-6 space-y-3">
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onNavigate(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 rounded-lg transition-all hover:bg-white/5"
                style={{ color: '#fff' }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
