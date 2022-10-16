export function unique<Source>(sources: Source[]) {
  let t = new Map<Source, Source>();
  return sources.filter((value) => {
    return !t.has(value) && !!t.set(value, value);
  });
}

export default unique;
