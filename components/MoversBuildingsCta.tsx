import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { Button } from './ui/Button';
import { CheckIcon } from './icons/Icons';

export function MoversBuildingsCta() {
  return (
    <section id="for-movers" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.partners.title}
          </h2>
          <p className="text-xl text-gray-300">
            {content.partners.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Benefits for your business:</h3>
            <ul className="space-y-4">
              {content.partners.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon size={24} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTAs */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-6">Get started today</h3>
            
            <div className="space-y-4">
              <a href="mailto:partners@fitpass.example">
                <Button variant="secondary" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                  Get partner info
                </Button>
              </a>
              
              <a href="/pdfs/qr-poster-template.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="tertiary" className="w-full text-white border-white hover:bg-white/10">
                  Download QR poster template
                </Button>
              </a>
            </div>
            
            <p className="mt-6 text-sm text-gray-300">
              Questions? Email us at{' '}
              <a href="mailto:partners@fitpass.example" className="text-white underline hover:no-underline">
                partners@fitpass.example
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
