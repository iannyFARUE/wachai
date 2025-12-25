export function getLabelFromKey(key: string): string {
  const result: string[] = key.split(/(?=[A-Z])/);
  return `${result[0].charAt(0).toUpperCase()}${result[0].slice(1)} ${
    result[1]
  }`;
}
