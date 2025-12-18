import React from 'react';
import { Unit } from '@/lib/calc';

interface ToggleProps {
  value: Unit;
  onChange: (value: Unit) => void;
  label?: string;
}

export function Toggle({ value, onChange, label }: ToggleProps) {
  return (
    <div className="inline-flex flex-col gap-1">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      <div 
        className="inline-flex bg-gray-200 rounded-lg p-1"
        role="group"
        aria-label={label || "Unit toggle"}
      >
        <button
          type="button"
          onClick={() => onChange('in')}
          className={`
            px-4 py-1.5 rounded-md font-medium text-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${value === 'in' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}
          `}
          aria-pressed={value === 'in'}
        >
          in
        </button>
        <button
          type="button"
          onClick={() => onChange('cm')}
          className={`
            px-4 py-1.5 rounded-md font-medium text-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${value === 'cm' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}
          `}
          aria-pressed={value === 'cm'}
        >
          cm
        </button>
      </div>
    </div>
  );
}
