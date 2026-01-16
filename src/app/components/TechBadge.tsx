interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'primary' | 'secondary';
}

export function TechBadge({ name, variant = 'default' }: TechBadgeProps) {
  const variants = {
    default: 'bg-slate-800 text-slate-300 border-slate-700',
    primary: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    secondary: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        border transition-all hover:scale-105
        ${variants[variant]}
      `}
    >
      {name}
    </span>
  );
}
