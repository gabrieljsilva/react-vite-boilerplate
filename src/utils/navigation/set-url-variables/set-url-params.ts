export function setUrlParams(pattern: string, values: Record<string, string>) {
  const vars = Array.from(pattern.matchAll(/:(.*?)(\/|$)/g));

  for (const [maskedVariable, variable] of vars) {
    const urlVariable = maskedVariable.replace("/", "");
    pattern = pattern.replace(urlVariable, values[variable]);
  }

  return pattern;
}
