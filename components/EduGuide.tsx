import React from 'react';
import { content } from '@/content/fit-pass-landing';

export function EduGuide() {
  return (
    <section id="edu-guide" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {content.eduGuide.title}
        </h2>
        
        <div className="space-y-12">
          {content.eduGuide.topics.map((topic) => (
            <article key={topic.id} id={topic.id} className="scroll-mt-20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {topic.title}
              </h3>
              <div className="text-gray-700 leading-relaxed">
                {topic.content.split('. ').map((sentence, index, array) => (
                  <React.Fragment key={index}>
                    {sentence}
                    {index < array.length - 1 && '. '}
                    {index < array.length - 1 && (index + 1) % 3 === 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {topic.id === 'compare' && (
                <p className="mt-4 text-primary">
                  <a href="/wizard" className="hover:underline">
                    Open the Fit Check wizard
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
        
        {/* Jump Links */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Quick Navigation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.eduGuide.topics.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className="text-primary hover:underline text-sm"
              >
                {topic.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
