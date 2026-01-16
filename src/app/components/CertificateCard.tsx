import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  year: number;
  image: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const handleImageClick = () => {
    window.open(certificate.image, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
    >
      {/* Certificate Image */}
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={handleImageClick}>
        <img
          src={certificate.image}
          alt={`${certificate.title} Certificate`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Certificate Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {certificate.title}
        </h3>
        <p className="text-blue-400 font-medium mb-1">
          {certificate.issuer}
        </p>
        <p className="text-slate-400 text-sm">
          {certificate.year}
        </p>
      </div>
    </motion.div>
  );
}