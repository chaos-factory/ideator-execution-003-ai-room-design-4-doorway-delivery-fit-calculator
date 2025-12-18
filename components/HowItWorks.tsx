import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { DoorIcon, StairsIcon } from './icons/Icons';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {content.howItWorks.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {content.howItWorks.steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                {step.number === 1 && <DoorIcon size={48} className="text-gray-400" />}
                {step.number === 2 && (
                  <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
                {step.number === 3 && <StairsIcon size={48} className="text-gray-400" />}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
