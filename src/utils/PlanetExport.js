import * as XLSX from "xlsx";

export function PlanetExport(planet) {
    const workbook = XLSX.utils.book_new();
    const planetData = [{//Even as an array with one object this is needed for the export
        Name: planet?.name,
        Starport: planet?.starport,
        Size: planet?.size,
        Gravity: planet?.g,
        Atmo: planet?.atmo,
        Pressure: planet?.pressure,
        Temperature: planet?.temp,
        Hydro: planet?.hydro,
        Pop: planet?.pop,
        Govt: planet?.govt,
        Gov_Desc: planet?.govDes.map(item => item.props?.children).join('\n'),
        Culture: planet?.culture,
        Culture_Desc: planet?.cultDesc,
        Law: planet?.law,
        Tech: planet?.tech,
        Tech_Desc: planet?.tDesc,
        Trade_Codes: planet?.tradeCodes,
        Zoning: planet?.zone,
        PBG: planet?.PBG,
        Details: planet?.description,
        S_Gear: planet?.survivalGearReq
    }];

    const worksheetPlanet = XLSX.utils.json_to_sheet(planetData);
    XLSX.utils.book_append_sheet(workbook, worksheetPlanet,planetData[0].Name);
    XLSX.writeFile(workbook, 'Planet.xlsx');
}
