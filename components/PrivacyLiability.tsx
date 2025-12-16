import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { ShieldIcon } from './icons/Icons';
import Link from 'next/link';

export function PrivacyLiability() {
  const iconMap: Record<string, React.ReactNode> = {
    noAddress: <ShieldIcon size={32} className="text-primary" />,
    exif: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    autoDelete: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    secure: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {content.privacy.title}
        </h2>
        
        {/* Privacy Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {content.privacy.points.map((point, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                {iconMap[point.icon] || <ShieldIcon size={32} className="text-primary" />}
              </div>
              <p className="text-sm font-medium text-gray-700">{point.text}</p>
            </div>
          ))}
        </div>
        
        {/* Liability Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liability Notice</h3>
          <p className="text-gray-700 mb-4">{content.privacy.liability}</p>
          <Link href="/terms" className="text-primary hover:underline font-medium">
            Read full terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
