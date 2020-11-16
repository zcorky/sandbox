
import { func } from '../src';

describe('providers.func', () => {
  describe('createSafeFunc', () => {
    it('works', () => {
      const code = `function (data) { return data.a + data.b }`;
      const sandbox = func.createSafeFunc(code);

      expect(sandbox({ data: { a: 1, b: 2 } })).toBe(3);
      expect(sandbox({ data: { a: '1', b: 2 } })).toBe('12');
      expect(() => sandbox({})).toThrow();
    });

    it('cached found', () => {
      const code = `function (data) { return data.a + data.b }`;
      const sandbox = func.createSafeFunc(code);

      expect(sandbox({ data: { a: 1, b: 2 } })).toBe(3);
      expect(sandbox({ data: { a: '1', b: 2 } })).toBe('12');
      expect(() => sandbox({})).toThrow();
    });
  });
});
