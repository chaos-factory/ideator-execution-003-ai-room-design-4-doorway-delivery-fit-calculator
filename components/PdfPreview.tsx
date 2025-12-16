import React from 'react';
import { content } from '@/content/fit-pass-landing';
import { Button } from './ui/Button';
import { DownloadIcon } from './icons/Icons';

export function PdfPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          {content.pdfPreview.title}
        </h2>
        
        <div className="text-center mb-8">
          <a href="/pdfs/example-fit-pass.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              <DownloadIcon size={20} className="inline mr-2" />
              View example PDF
            </Button>
          </a>
        </div>
        
        {/* Thumbnail Preview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {content.pdfPreview.thumbnails.map((thumbnail) => (
            <div key={thumbnail.id} className="text-center">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 mb-2 aspect-[8.5/11] flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-600">{thumbnail.label}</p>
            </div>
          ))}
        </div>
        
        {/* Share Options Preview */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Share your Fit Pass</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
              Copy link
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
              Email to team
            </button>
            <a href="/pdfs/example-fit-pass.pdf" target="_blank" rel="noopener noreferrer">
              <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover">
                Download PDF
              </button>
            </a>
            <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
              QR code
            </button>
          </div>
        </div>
        
        {/* Microcopy */}
        <p className="text-sm text-gray-600 text-center">
          {content.pdfPreview.microcopy}
        </p>
      </div>
    </section>
  );
}
