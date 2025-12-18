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
    Zoning: ""
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
    const planetData = [{//Even as an array with one object this is needed for the export
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
      Gov_Desc: details?.govDes.map(item => item.props?.children).join('\n'),
      
      
      Culture: details?.culture,
      Culture_Desc: details?.cultDesc,
      Law: details?.law,
      Tech: details?.tech,
      Tech_Desc: details?.tDesc,
      Trade_Codes: details?.tradeCodes,
      Zoning: details?.zone,
      Details: details?.description,
      S_Gear: details?.survivalGearReq
    }];
    console.log("govDes: "+planetData[0].Gov_Desc);
    rows.push({
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
    });
    
    const worksheetPlanet = XLSX.utils.json_to_sheet(planetData);
    XLSX.utils.book_append_sheet(workbook, worksheetPlanet,planetData[0].Name.slice(0,4));
  });

  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Subsector");

  const sheets = workbook.Sheets;
  const sheetNames = workbook.SheetNames;
  const subsectorSheet = sheetNames.pop();
  sheetNames.unshift(subsectorSheet);
  workbook.SheetNames = sheetNames;
  workbook.Sheets = sheets;

  XLSX.writeFile(workbook, "subsector.xlsx");
}
