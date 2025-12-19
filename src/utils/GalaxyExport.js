import * as XLSX from "xlsx";
export function GalaxyExport(galaxy) {
    const sheets = [];
    const wb = XLSX.utils.book_new();

    Object.keys(galaxy).forEach((sectorKey)=>{
        const sectorData = galaxy[sectorKey];
        const rows = [];

        rows.push({
            Type: "Sector",
            Name: `${sectorKey} - ${sectorData.sectorType}`,
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
        });

        rows.push({
            Type: "Route",
            Name: "Route List",
            Details: ""
        });

        if (sectorData.routeList && sectorData.routeList.length > 0) {
            sectorData.routeList.forEach((route) => {
                rows.push({
                    Type: "Route",
                    Name: route.formatRoute,
                    Details: ""
                });
            });
        } else {
            rows.push({ Type: "Route", Name: "No Routes", Details: "" });
        }

        rows.push({
            Type: "Planet",
            Name: "Planet List",
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
        });
        
        if (sectorData.flatSub && sectorData.flatSub.length > 0) {
            sectorData.flatSub.forEach((planet, index) => {
                const details = sectorData.flatDet[index];
                rows.push({
                    Type: "Planet",
                    Name: details?.name,
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
                    Details: details?.description,
                    S_Gear: details?.survivalGearReq
                });
            });            
        } else {
            rows.push({
                Type: "Planet",
                Name: "No Planets",
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
            });
        }
        
        const ws = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(wb, ws, `${sectorKey} - Sector Summary`);

        if (sectorData.flatSub && sectorData.flatSub.length > 0) {
            sectorData.flatSub.forEach((planet, index) => {
                const details = sectorData.flatDet[index];

                const planetData = [{
                    Type: "Planet",
                    Name: details?.name,
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

                const worksheetPlanet = XLSX.utils.json_to_sheet(planetData);
                XLSX.utils.book_append_sheet(wb, worksheetPlanet, details?.name.slice(0, 4));
            });
        }
    });
    
    sheets.forEach((sheetData) => {
        XLSX.utils.book_append_sheet(wb, sheetData.sheet, sheetData.name);
    });
    XLSX.writeFile(wb, "galaxy_export.xlsx");
}
