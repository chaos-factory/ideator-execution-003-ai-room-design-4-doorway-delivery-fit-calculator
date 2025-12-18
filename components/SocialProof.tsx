import React from 'react';
import { content } from '@/content/fit-pass-landing';

export function SocialProof() {
  return (
    <section className="py-8 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 mb-6">{content.socialProof.text}</p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {content.socialProof.partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-lg border border-gray-300 text-gray-500 font-semibold"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
