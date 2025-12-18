import {
  calculateFit,
  inchesToCm,
  cmToInches,
  getDefaultSafetyMargin,
  getWarnThreshold,
  isValidNumber,
  parseNumber,
  formatClearance,
  hasMeasurementMismatch,
} from './calc';

describe('Unit Conversion', () => {
  test('converts inches to centimeters correctly', () => {
    expect(inchesToCm(1)).toBe(2.5);
    expect(inchesToCm(10)).toBe(25.4);
    expect(inchesToCm(3)).toBe(7.6);
  });

  test('converts centimeters to inches correctly', () => {
    expect(cmToInches(2.54)).toBe(1);
    expect(cmToInches(25.4)).toBe(10);
    expect(cmToInches(7.6)).toBeCloseTo(3, 1);
  });

  test('rounds conversions to 1 decimal place', () => {
    expect(inchesToCm(1.234)).toBe(3.1);
    expect(cmToInches(3.175)).toBe(1.2); // 3.175 / 2.54 ≈ 1.250 rounds to 1.2
  });
});

describe('Default Values', () => {
  test('returns correct default safety margin for inches', () => {
    expect(getDefaultSafetyMargin('in')).toBe(3);
  });

  test('returns correct default safety margin for centimeters', () => {
    expect(getDefaultSafetyMargin('cm')).toBe(7.6);
  });

  test('returns correct warn threshold for inches', () => {
    expect(getWarnThreshold('in')).toBe(1.5);
  });

  test('returns correct warn threshold for centimeters', () => {
    expect(getWarnThreshold('cm')).toBe(3.8);
  });
});

describe('Fit Calculation', () => {
  describe('Pass Status', () => {
    test('returns pass when clearance > 1.5 inches', () => {
      const result = calculateFit(36, 30, 20, 'in');
      expect(result.status).toBe('pass');
      expect(result.clearance).toBe(13); // 36 - 3 - 20 = 13
      expect(result.unit).toBe('in');
    });

    test('returns pass when clearance > 3.8 cm', () => {
      const result = calculateFit(90, 70, 50, 'cm');
      expect(result.status).toBe('pass');
      expect(result.clearance).toBe(32.4); // 90 - 7.6 - 50 = 32.4
      expect(result.unit).toBe('cm');
    });
  });

  describe('Warn Status', () => {
    test('returns warn when clearance between 0 and 1.5 inches', () => {
      const result = calculateFit(24, 20, 22, 'in');
      expect(result.status).toBe('warn');
      expect(result.clearance).toBe(1); // 24 - 3 - 20 = 1
    });

    test('returns warn when clearance exactly at threshold', () => {
      const result = calculateFit(24.5, 20, 22, 'in');
      expect(result.status).toBe('warn');
      expect(result.clearance).toBe(1.5); // 24.5 - 3 - 20 = 1.5
    });

    test('returns warn when clearance is 0', () => {
      const result = calculateFit(23, 20, 22, 'in');
      expect(result.status).toBe('warn');
      expect(result.clearance).toBe(0); // 23 - 3 - 20 = 0
    });
  });

  describe('Fail Status', () => {
    test('returns fail when clearance is negative', () => {
      const result = calculateFit(20, 32, 25, 'in');
      expect(result.status).toBe('fail');
      expect(result.clearance).toBe(-8); // 20 - 3 - 25 = -8 (min of 32, 25 is 25)
    });

    test('returns fail when clearance is slightly negative', () => {
      const result = calculateFit(22.9, 20, 23, 'in');
      expect(result.status).toBe('fail');
      expect(result.clearance).toBe(-0.1); // 22.9 - 3 - 20 = -0.1 (min of 20, 23 is 20)
    });
  });

  describe('Minimum Dimension Logic', () => {
    test('uses smaller of height and depth', () => {
      const result1 = calculateFit(36, 30, 20, 'in');
      expect(result1.clearance).toBe(13); // Uses 20 (depth)

      const result2 = calculateFit(36, 20, 30, 'in');
      expect(result2.clearance).toBe(13); // Uses 20 (height)
    });
  });

  describe('Custom Safety Margin', () => {
    test('uses custom safety margin when provided', () => {
      const result = calculateFit(36, 30, 20, 'in', 6);
      expect(result.clearance).toBe(10); // 36 - 6 - 20 = 10
    });

    test('uses default safety margin when not provided', () => {
      const result = calculateFit(36, 30, 20, 'in');
      expect(result.clearance).toBe(13); // 36 - 3 - 20 = 13
    });
  });

  describe('Rounding', () => {
    test('rounds clearance to 1 decimal place', () => {
      const result = calculateFit(36.75, 30, 20.44, 'in');
      expect(result.clearance).toBe(13.3); // 36.75 - 3 - 20.44 = 13.31 -> 13.3
    });
  });
});

describe('Number Validation', () => {
  test('validates positive numbers', () => {
    expect(isValidNumber(10)).toBe(true);
    expect(isValidNumber(0.1)).toBe(true);
    expect(isValidNumber('10')).toBe(true);
    expect(isValidNumber('0.1')).toBe(true);
  });

  test('rejects zero and negative numbers', () => {
    expect(isValidNumber(0)).toBe(false);
    expect(isValidNumber(-5)).toBe(false);
    expect(isValidNumber('0')).toBe(false);
    expect(isValidNumber('-5')).toBe(false);
  });

  test('rejects NaN and Infinity', () => {
    expect(isValidNumber(NaN)).toBe(false);
    expect(isValidNumber(Infinity)).toBe(false);
    expect(isValidNumber('abc')).toBe(false);
    expect(isValidNumber('')).toBe(false);
  });
});

describe('Number Parsing', () => {
  test('parses valid numeric strings', () => {
    expect(parseNumber('10')).toBe(10);
    expect(parseNumber('10.5')).toBe(10.5);
    expect(parseNumber('0.1')).toBe(0.1);
  });

  test('parses valid numbers', () => {
    expect(parseNumber(10)).toBe(10);
    expect(parseNumber(10.5)).toBe(10.5);
  });

  test('returns null for invalid inputs', () => {
    expect(parseNumber('abc')).toBe(null);
    expect(parseNumber('')).toBe(null);
    expect(parseNumber(0)).toBe(null);
    expect(parseNumber(-5)).toBe(null);
    expect(parseNumber(NaN)).toBe(null);
  });
});

describe('Clearance Formatting', () => {
  test('formats positive clearance', () => {
    expect(formatClearance(13, 'in')).toBe('13.0 in');
    expect(formatClearance(13.5, 'cm')).toBe('13.5 cm');
  });

  test('formats negative clearance with minus sign', () => {
    expect(formatClearance(-5, 'in')).toBe('-5.0 in');
    expect(formatClearance(-2.3, 'cm')).toBe('-2.3 cm');
  });

  test('formats zero clearance', () => {
    expect(formatClearance(0, 'in')).toBe('0.0 in');
  });
});

describe('Measurement Mismatch', () => {
  test('detects mismatch greater than 0.5 inches', () => {
    expect(hasMeasurementMismatch(30, 31, 'in')).toBe(true);
    expect(hasMeasurementMismatch(30, 29, 'in')).toBe(true);
  });

  test('does not detect mismatch within 0.5 inches', () => {
    expect(hasMeasurementMismatch(30, 30.4, 'in')).toBe(false);
    expect(hasMeasurementMismatch(30, 29.6, 'in')).toBe(false);
    expect(hasMeasurementMismatch(30, 30, 'in')).toBe(false);
  });

  test('converts threshold to cm for metric measurements', () => {
    // 0.5 inches = 1.27 cm
    expect(hasMeasurementMismatch(75, 76.5, 'cm')).toBe(true);
    expect(hasMeasurementMismatch(75, 76, 'cm')).toBe(false);
  });
});
