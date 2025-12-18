'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { ShieldIcon, CameraIcon, ClockIcon } from './icons/Icons';
import { content } from '@/content/fit-pass-landing';
import { Modal } from './ui/Modal';
import Link from 'next/link';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">
              {content.hero.eyebrow}
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {content.hero.h1}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {content.hero.subhead}
            </p>
            
            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {content.hero.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-status-pass flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/wizard">
                <Button variant="primary">Start Fit Check</Button>
              </Link>
              <a href="/pdfs/example-fit-pass.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">View example PDF</Button>
              </a>
              <Button variant="tertiary" onClick={() => setIsVideoModalOpen(true)}>
                Watch 45-second demo
              </Button>
            </div>
            
            {/* Reassurance Row */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              {content.hero.reassurance.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon === 'shield' && <ShieldIcon size={20} className="text-primary" />}
                  {item.icon === 'camera' && <CameraIcon size={20} className="text-primary" />}
                  {item.icon === 'clock' && <ClockIcon size={20} className="text-primary" />}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20">
              {/* Device Mockup Placeholder */}
              <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-status-pass/10 rounded-lg border border-status-pass/30">
                    <span className="text-sm font-medium">Entry Door</span>
                    <span className="px-2 py-1 bg-status-pass text-white text-xs font-bold rounded">PASS</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-status-warn/10 rounded-lg border border-status-warn/30">
                    <span className="text-sm font-medium">Hallway Turn</span>
                    <span className="px-2 py-1 bg-status-warn text-white text-xs font-bold rounded">WARN</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg border border-gray-300">
                    <span className="text-sm font-medium">Stair Landing</span>
                    <span className="px-2 py-1 bg-gray-400 text-white text-xs font-bold rounded">—</span>
                  </div>
                </div>
              </div>
              
              {/* Tag */}
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 border border-gray-200">
                {content.hero.overlayTag}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="Fit Pass Demo"
      >
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Video placeholder - demo coming soon</p>
        </div>
      </Modal>
    </section>
  );
}
