import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { Button } from './ui/Button';
import Link from 'next/link';

export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {content.pricing.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {content.pricing.mainCard.price}
              </div>
              <div className="text-xl text-gray-600">
                {content.pricing.mainCard.title}
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {content.pricing.mainCard.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-status-pass flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-status-pass/10 border border-status-pass/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Refund:</strong> {content.pricing.mainCard.refund}
              </p>
            </div>
            
            <Link href="/wizard">
              <Button variant="primary" className="w-full">
                Start Fit Check
              </Button>
            </Link>
          </div>
          
          {/* Bundle Card */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {content.pricing.bundleCard.price}
              </div>
              <div className="text-lg text-gray-600 mb-4">
                {content.pricing.bundleCard.title}
              </div>
              <p className="text-sm text-gray-600">
                {content.pricing.bundleCard.description}
              </p>
            </div>
            
            <Button variant="secondary" className="w-full" disabled>
              {content.pricing.bundleCard.linkText}
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">Coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
