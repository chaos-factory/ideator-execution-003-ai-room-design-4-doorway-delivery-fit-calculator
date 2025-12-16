import React from 'react';
import { FitStatus } from '@/lib/calc';

interface StatusChipProps {
  status: FitStatus;
  className?: string;
}

export function StatusChip({ status, className = '' }: StatusChipProps) {
  const statusConfig = {
    pass: {
      bg: 'bg-status-pass',
      text: 'Pass',
      label: 'Pass: Item will fit with adequate clearance',
    },
    warn: {
      bg: 'bg-status-warn',
      text: 'Warn',
      label: 'Warning: Tight fit with minimal clearance',
    },
    fail: {
      bg: 'bg-status-fail',
      text: 'Fail',
      label: 'Fail: Item will not fit',
    },
  };
  
  const config = statusConfig[status];
  
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-white text-sm font-bold uppercase tracking-wide
        ${config.bg} ${className}
      `}
      role="status"
      aria-label={config.label}
    >
      {config.text}
    </span>
  );
}
