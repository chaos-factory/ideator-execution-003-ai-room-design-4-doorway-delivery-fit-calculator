import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { Button } from './ui/Button';
import Link from 'next/link';

export function BottomCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-hover text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {content.bottomCta.title}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {content.bottomCta.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/wizard">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Start Fit Check
            </Button>
          </Link>
          <a href="/pdfs/example-fit-pass.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="bg-transparent text-white border-white hover:bg-white/10">
              View example PDF
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
