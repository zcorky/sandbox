
import createSandbox, { createFunctionSandbox } from '../src';

describe('sandbox', () => {
  describe('function body', () => {
    it('done', () => {
      const code = `return a + b`;
      const sandbox = createSandbox(code);

      expect(sandbox({ a: 1, b: 2 })).toBe(3);
      expect(sandbox({ a: '1', b: 2 })).toBe('12');
      expect(sandbox({})).toBe(NaN);
    });
  });

  describe('function', () => {
    it('done', () => {
      const code = `function (data) { return data.a + data.b }`;
      const sandbox = createFunctionSandbox(code);

      expect(sandbox({ data: { a: 1, b: 2 } })).toBe(3);
      expect(sandbox({ data: { a: '1', b: 2 } })).toBe('12');
      expect(() => sandbox({})).toThrow();
    });

    it('done', () => {
      const code = `function (data) asdasd { return data.a + data.b }`;
      expect(() => createFunctionSandbox(code)).toThrow();
    });
  });
});
