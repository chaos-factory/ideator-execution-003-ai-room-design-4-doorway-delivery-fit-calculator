import React from 'react';
import { content } from '@/content/fit-pass-landing';

export function RulesEngine() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {content.rulesEngine.title}
        </h2>
        
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <ul className="space-y-4">
            {content.rulesEngine.checks.map((check, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{check}</span>
              </li>
            ))}
          </ul>
          
          <p className="mt-6 text-sm text-gray-500 italic">
            {content.rulesEngine.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
