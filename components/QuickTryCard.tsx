'use client';

import React, { useState, useEffect } from 'react';
import { Unit, calculateFit, parseNumber, formatClearance, CalculationResult } from '@/lib/calc';
import { Input } from './ui/Input';
import { Toggle } from './ui/Toggle';
import { StatusChip } from './ui/StatusChip';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { content } from '@/content/fit-pass-landing';
import Link from 'next/link';

export function QuickTryCard() {
  const [unit, setUnit] = useState<Unit>('in');
  const [doorwayWidth, setDoorwayWidth] = useState('');
  const [boxHeight, setBoxHeight] = useState('');
  const [boxDepth, setBoxDepth] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isHelperOpen, setIsHelperOpen] = useState(false);

  // Calculate result whenever inputs change
  useEffect(() => {
    const newErrors: Record<string, string> = {};
    
    // Validate inputs
    const widthNum = parseNumber(doorwayWidth);
    const heightNum = parseNumber(boxHeight);
    const depthNum = parseNumber(boxDepth);
    
    if (doorwayWidth && widthNum === null) {
      newErrors.doorwayWidth = 'Please enter a valid positive number';
    }
    if (boxHeight && heightNum === null) {
      newErrors.boxHeight = 'Please enter a valid positive number';
    }
    if (boxDepth && depthNum === null) {
      newErrors.boxDepth = 'Please enter a valid positive number';
    }
    
    setErrors(newErrors);
    
    // Calculate result if all inputs are valid
    if (widthNum !== null && heightNum !== null && depthNum !== null) {
      const calculationResult = calculateFit(widthNum, heightNum, depthNum, unit);
      setResult(calculationResult);
    } else {
      setResult(null);
    }
  }, [doorwayWidth, boxHeight, boxDepth, unit]);

  const hasValidInputs = doorwayWidth && boxHeight && boxDepth && Object.keys(errors).length === 0;

  return (
    <section id="quick-try" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          {content.quickTry.title}
        </h2>
        
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Single checkpoint test</h3>
            <Toggle value={unit} onChange={setUnit} label="Units" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Input
              label={`Doorway width (${unit})`}
              type="number"
              step="0.1"
              min="0"
              value={doorwayWidth}
              onChange={(e) => setDoorwayWidth(e.target.value)}
              placeholder={unit === 'in' ? '32' : '81'}
              error={errors.doorwayWidth}
            />
            <Input
              label={`Box height (${unit})`}
              type="number"
              step="0.1"
              min="0"
              value={boxHeight}
              onChange={(e) => setBoxHeight(e.target.value)}
              placeholder={unit === 'in' ? '36' : '91'}
              error={errors.boxHeight}
            />
            <Input
              label={`Box depth (${unit})`}
              type="number"
              step="0.1"
              min="0"
              value={boxDepth}
              onChange={(e) => setBoxDepth(e.target.value)}
              placeholder={unit === 'in' ? '24' : '61'}
              error={errors.boxDepth}
            />
          </div>
          
          <button
            onClick={() => setIsHelperOpen(true)}
            className="text-sm text-primary hover:underline mb-6 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            type="button"
          >
            Add angle tilt consideration →
          </button>
          
          {/* Result Display */}
          {result && hasValidInputs && (
            <div 
              className="bg-gray-50 rounded-lg p-4 mb-4 border-2 border-gray-200"
              role="region"
              aria-live="polite"
              aria-label="Calculation result"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <StatusChip status={result.status} />
                  <span className="text-lg font-semibold text-gray-900">
                    Clearance: {formatClearance(result.clearance, unit)}
                  </span>
                </div>
              </div>
              
              {result.status === 'warn' && (
                <p className="mt-2 text-sm text-gray-600">
                  Tight fit. Consider removing doors or tilting diagonally.
                </p>
              )}
              
              {result.status === 'fail' && (
                <p className="mt-2 text-sm text-gray-600">
                  Item will not fit. Try an alternate entry route or disassemble if possible.
                </p>
              )}
            </div>
          )}
          
          <Link href="/wizard">
            <Button 
              variant="primary" 
              className="w-full"
              disabled={!hasValidInputs}
            >
              Open full path wizard
            </Button>
          </Link>
        </div>
        
        <p className="mt-6 text-center text-gray-600">
          {content.quickTry.belowCard}
        </p>
      </div>
      
      {/* Helper Modal */}
      <Modal
        isOpen={isHelperOpen}
        onClose={() => setIsHelperOpen(false)}
        title={content.quickTry.helperTitle}
      >
        <p className="text-gray-700">{content.quickTry.helperText}</p>
      </Modal>
    </section>
  );
}
