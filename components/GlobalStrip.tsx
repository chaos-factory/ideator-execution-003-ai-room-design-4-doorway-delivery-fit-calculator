'use client';

import React from 'react';
import { content } from '@/content/fit-pass-landing';

export function GlobalStrip() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <p className="text-center text-sm text-gray-600">
          {content.globalStrip}
        </p>
      </div>
    </div>
  );
}
