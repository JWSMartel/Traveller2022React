import * as XLSX from "xlsx";

export function subsectorExport( routes, flatSubsector, flatDetails ) {
  const rows = [{
    Type: "",
    Name: "",
    Starport: "",
    Size: "",
    Gravity: "",
    Atmo: "",
    Pressure: "",
    Temperature: "",
    Hydro: "",
    Pop: "",
    Govt: "",
    Culture: "",
    Law: "",
    Tech: "",
    Trade_Codes: "",
    Zoning: "",
    Details: ""
  }];
  
  const workbook = XLSX.utils.book_new();

  routes?.forEach(route => {
    rows.push({
      Type: "Route",
      Name: route.formatRoute,
      Details: ""
    });
  });
  
  flatSubsector?.forEach((planet, index) => {
    const details = flatDetails[index];
    rows.push({
      Type: "Planet",
      Name: String(planet),
      Starport: JSON.stringify(details?.starport),
      Size: JSON.stringify(details?.size),
      Gravity: JSON.stringify(details?.g),
      Atmo: JSON.stringify(details?.atmo),
      Pressure: JSON.stringify(details?.pressure),
      Temperature: JSON.stringify(details?.temp),
      Hydro: JSON.stringify(details?.hydro),
      Pop: JSON.stringify(details?.pop),
      Govt: JSON.stringify(details?.govt),
      Culture: JSON.stringify(details?.culture),
      Law: JSON.stringify(details?.law),
      Tech: JSON.stringify(details?.tech),
      Trade_Codes: JSON.stringify(details?.tradeCodes),
      Zoning: JSON.stringify(details?.zone),
      Details: JSON.stringify(details?.description)
    });

    const planetData = [{
      Type: "Planet",
      Name: String(planet),
      Starport: details?.starport,
      Size: details?.size,
      Gravity: details?.g,
      Atmo: details?.atmo,
      Pressure: details?.pressure,
      Temperature: details?.temp,
      Hydro: details?.hydro,
      Pop: details?.pop,
      Govt: details?.govt,
      Culture: details?.culture,
      Law: details?.law,
      Tech: details?.tech,
      Trade_Codes: details?.tradeCodes,
      Zoning: details?.zone,
      Details: details?.description
    }];

    const worksheetPlanet = XLSX.utils.json_to_sheet(planetData);
    XLSX.utils.book_append_sheet(workbook, worksheetPlanet, planetData.Name);
  });

  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Subsector");

  XLSX.writeFile(workbook, "subsector.xlsx");
}
