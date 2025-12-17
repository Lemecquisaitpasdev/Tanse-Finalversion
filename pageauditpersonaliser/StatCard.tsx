interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  variant?: 'default' | 'highlight';
}

const StatCard = ({ value, label, delay = 0, variant = 'default' }: StatCardProps) => {
  return (
    <div 
      className={`relative rounded-2xl p-6 opacity-0 animate-slide-up overflow-hidden ${
        variant === 'highlight' 
          ? 'gradient-primary' 
          : 'bg-secondary border border-border'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {variant === 'highlight' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      )}
      <div className={`relative z-10 text-3xl md:text-4xl font-bold mb-2 stat-number ${
        variant === 'highlight' ? 'text-primary-foreground' : 'text-foreground'
      }`}>
        {value}
      </div>
      <div className={`relative z-10 text-sm ${
        variant === 'highlight' ? 'text-primary-foreground/80' : 'text-muted-foreground'
      }`}>
        {label}
      </div>
    </div>
  );
};

export default StatCard;