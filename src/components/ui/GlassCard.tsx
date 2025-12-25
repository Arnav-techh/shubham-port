import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'solid' | 'dark';
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className, variant = 'default', style }: GlassCardProps) => {
  const variants = {
    default: 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg',
    solid: 'bg-white/90 backdrop-blur-xl border border-white/50 shadow-xl',
    dark: 'bg-foreground/5 backdrop-blur-xl border border-foreground/10 shadow-lg',
  };

  return (
    <div className={cn('rounded-2xl p-6', variants[variant], className)} style={style}>
      {children}
    </div>
  );
};

export default GlassCard;
