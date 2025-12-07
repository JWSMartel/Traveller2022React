export function RenderSubsector(subsector) {
  const flatSubsector = subsector.flat(Infinity);
  return (
    <div>
      {flatSubsector
        .filter((line) => typeof line === 'string' && line.trim() !== '')
        .map((item, index) => (
          <div key={index}>{String(item)}</div>
        ))}
    </div>
  );
}
