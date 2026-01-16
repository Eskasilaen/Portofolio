import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  type?: 'internship' | 'organization' | 'project';
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  type = 'internship',
}: ExperienceCardProps) {
  const typeColors = {
    internship: 'border-l-blue-500',
    organization: 'border-l-purple-500',
    project: 'border-l-green-500',
  };

  return (
    <div
      className={`
        relative pl-6 pb-8 border-l-2 ${typeColors[type]}
        before:content-[''] before:absolute before:left-[-7px] before:top-0
        before:w-3 before:h-3 before:rounded-full before:bg-slate-800
        before:border-2 before:${typeColors[type].replace('border-l-', 'border-')}
      `}
    >
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-blue-400 font-medium mb-2">{company}</p>
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
