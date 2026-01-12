export function PlanetButtonList({ names, planets, onPlanetClick, selectedPlanet = null }) {
  return names.map((name, i) => {
    const planetObj = planets[i];
    const isSelected = planetObj === selectedPlanet;
    return (
      <button
        key={i}
        className={`planetdetailbtn ${isSelected ? "selected" : ""}`}
        onClick={() => onPlanetClick(planetObj)}
      >
        {String(name)}
      </button>
    );
  });
}
