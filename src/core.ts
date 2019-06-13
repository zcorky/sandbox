function has<T>(target: T, key: PropertyKey) {
  return true;
}

function get<T extends object>(target: T, key: PropertyKey, receier?: any) {
  if (key === Symbol.unscopables) return undefined;
  return Reflect.get(target, key, receier)
}

export function compile(rawCode: string) {
  const code = `with (sandbox) { ${rawCode} }`;
  const fn = new Function('sandbox', code);

  return <T extends object>(sandbox: T) => {
    return fn(new Proxy(sandbox, { has, get }));
  }
}


