import { compile } from './core';

export function createSandbox(rawCode: string) {
  return compile(rawCode);
}

export function createFunctionSandbox(rawCode: string) {
  try {
    return compile((/function\s+\(data\)\s+\{([^\}]+)\}/mg.exec(rawCode) as any)[1])
  } catch (err) {
    throw new Error('Invalid Code');
  }
}