export function RenderPlanet(planet) {
  return (
    <div>
      <p>
        Planet Name: {planet.name}<br />
        Starport Rating: {planet.starport}<br />
        Size: {planet.size}<br />
        Gravity: {planet.g}<br />
        Atmo: {planet.atmo}<br />
        Pressure: {planet.pressure}<br />
        Temp: {planet.temp}℃<br />
        Hydro: {planet.hydro}<br />
        Population: {planet.pop}<br />
        Govt: {planet.govt}<br />
        Culture: {planet.culture}<br />
        Law Level: {planet.law}<br />
        Tech Level: {planet.tech}<br />
        Trade Codes: {planet.tradeCodes}<br />
        Zoning: {planet.zone}<br />
      </p>
      <p>Planet Description: <br />{planet.description}</p>
      <p>{planet.govDes}</p>
      <p>{planet.cultDesc}</p>
      <p>{planet.tDesc}</p>
      {planet.survivalGearReq !== undefined ? (<p>Requried survival gear: {planet.survivalGearReq}</p>) : null}
    </div>
  );
}
