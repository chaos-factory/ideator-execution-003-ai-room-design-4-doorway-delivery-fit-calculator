import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { ShieldIcon, CameraIcon, CheckIcon, PdfIcon } from './icons/Icons';

export function FeatureGrid() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      path: <CheckIcon size={32} className="text-primary" />,
      engine: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      pdf: <PdfIcon size={32} className="text-primary" />,
      privacy: <ShieldIcon size={32} className="text-primary" />,
      measure: <CameraIcon size={32} className="text-primary" />,
      refund: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      ),
    };
    return icons[iconName] || <CheckIcon size={32} className="text-primary" />;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{getIcon(feature.icon)}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
