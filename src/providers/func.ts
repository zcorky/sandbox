import { lru as LRU } from '@zcorky/lru';
import { createFunctionSandbox } from '../createSandbox';

const cache = new LRU<string, Function>();

export function createSafeFunc(funcStr: string): Function {
  const cached = cache.get(funcStr);
  if (cached) {
    return cached;
  }

  const builtFunc = createFunctionSandbox(funcStr);
  cache.set(funcStr, builtFunc);
  return builtFunc;
}

createSafeFunc._cache = cache;