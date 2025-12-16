export type Unit = 'in' | 'cm';

export type FitStatus = 'pass' | 'warn' | 'fail';

export interface CalculationResult {
  status: FitStatus;
  clearance: number;
  unit: Unit;
}

// Constants
const IN_TO_CM = 2.54;
const CM_TO_IN = 1 / IN_TO_CM;
const DEFAULT_SAFETY_MARGIN_IN = 3;
const DEFAULT_SAFETY_MARGIN_CM = 7.6;
const WARN_THRESHOLD_IN = 1.5;
const WARN_THRESHOLD_CM = 3.8;

/**
 * Convert inches to centimeters
 */
export function inchesToCm(inches: number): number {
  return Math.round(inches * IN_TO_CM * 10) / 10;
}

/**
 * Convert centimeters to inches
 */
export function cmToInches(cm: number): number {
  return Math.round(cm * CM_TO_IN * 10) / 10;
}

/**
 * Get default safety margin for a unit
 */
export function getDefaultSafetyMargin(unit: Unit): number {
  return unit === 'in' ? DEFAULT_SAFETY_MARGIN_IN : DEFAULT_SAFETY_MARGIN_CM;
}

/**
 * Get warn threshold for a unit
 */
export function getWarnThreshold(unit: Unit): number {
  return unit === 'in' ? WARN_THRESHOLD_IN : WARN_THRESHOLD_CM;
}

/**
 * Calculate fit status for a single checkpoint (straight-through doorway check)
 * 
 * @param doorwayWidth - Width of the doorway opening
 * @param boxHeight - Height of the box/furniture
 * @param boxDepth - Depth of the box/furniture
 * @param unit - Unit of measurement ('in' or 'cm')
 * @param safetyMargin - Optional safety margin (defaults to 3 in or 7.6 cm)
 * @returns Calculation result with status and clearance
 */
export function calculateFit(
  doorwayWidth: number,
  boxHeight: number,
  boxDepth: number,
  unit: Unit = 'in',
  safetyMargin?: number
): CalculationResult {
  // Use default safety margin if not provided
  const margin = safetyMargin ?? getDefaultSafetyMargin(unit);
  
  // For straight-through check, use the minimum of height and depth
  const minBoxDimension = Math.min(boxHeight, boxDepth);
  
  // Calculate clearance: doorway width - safety margin - minimum box dimension
  const clearance = doorwayWidth - margin - minBoxDimension;
  
  // Round to 1 decimal place
  const roundedClearance = Math.round(clearance * 10) / 10;
  
  // Determine status based on thresholds
  let status: FitStatus;
  const warnThreshold = getWarnThreshold(unit);
  
  if (roundedClearance < 0) {
    status = 'fail';
  } else if (roundedClearance <= warnThreshold) {
    status = 'warn';
  } else {
    status = 'pass';
  }
  
  return {
    status,
    clearance: roundedClearance,
    unit
  };
}

/**
 * Validate numeric input
 */
export function isValidNumber(value: string | number): boolean {
  if (typeof value === 'number') {
    return !isNaN(value) && isFinite(value) && value > 0;
  }
  
  const num = parseFloat(value);
  return !isNaN(num) && isFinite(num) && num > 0;
}

/**
 * Parse numeric input safely
 */
export function parseNumber(value: string | number): number | null {
  if (typeof value === 'number') {
    return isValidNumber(value) ? value : null;
  }
  
  const num = parseFloat(value);
  return isValidNumber(num) ? num : null;
}

/**
 * Format clearance value with unit
 */
export function formatClearance(clearance: number, unit: Unit): string {
  const absValue = Math.abs(clearance);
  const formatted = absValue.toFixed(1);
  return `${clearance < 0 ? '-' : ''}${formatted} ${unit}`;
}

/**
 * Check if two measurements differ by more than threshold
 */
export function hasMeasurementMismatch(
  measurement1: number,
  measurement2: number,
  unit: Unit,
  thresholdIn: number = 0.5
): boolean {
  const threshold = unit === 'in' ? thresholdIn : inchesToCm(thresholdIn);
  return Math.abs(measurement1 - measurement2) > threshold;
}
