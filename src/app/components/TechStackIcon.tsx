import { motion } from 'motion/react';

interface TechStackIconProps {
  icon: React.ReactNode;
  name: string;
  category?: string;
}

export function TechStackIcon({ icon, name, category }: TechStackIconProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm transition-all group"
    >
      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-white font-medium text-sm">{name}</p>
        {category && (
          <p className="text-slate-500 text-xs mt-1">{category}</p>
        )}
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl pointer-events-none transition-all duration-300" />
    </motion.div>
  );
}
