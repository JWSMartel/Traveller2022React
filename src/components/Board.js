export function Board({ grid, gridDetails, onHexClick, offsetX = 0, offsetY = 0, selectedPlanet }) {
  if (!grid) return null;
  return (
    <div className="board">
      {grid.map((row, r) => (
        <div key={r} className="board-row">
          {row.map((cell, c) => {
            const hexId = `${offsetX}${r}${offsetY}${c}`;
            const planetObj = gridDetails?.[r]?.[c] || null;
            const isSelected = planetObj && planetObj === selectedPlanet;
            return (
              <Hex
                key={hexId}
                hasPlanet={!!cell}
                label={hexId}
                onClick={() => planetObj && onHexClick(planetObj)}
                selected={isSelected} />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Hex({ hasPlanet, onClick, label, selected }) {
  return (
    <button className={`hex ${selected ? "selected" : ""}`} onClick={onClick}>
      <span className="hex-label">{label}</span>
      {hasPlanet && <span className="planet-dot" />}
    </button>
  );
}