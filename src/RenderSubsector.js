export function RenderSubsector(subsector, subsectorDetails) {
  const flatSubsector = subsector.flat(Infinity)
                        .filter((line) => typeof line === 'string' && line.trim() !== '');
  const flatDetails = subsectorDetails
                        .flat(Infinity)
                        .filter((item) => item != null);

  const show = (
    <div>
      <p>Routes will eventually go here</p>
      {flatSubsector.map((item, index) => (
          <button key={index}>{String(item)}</button>
        ))}
    </div>
  );

  return ([flatSubsector, flatDetails]);
}
