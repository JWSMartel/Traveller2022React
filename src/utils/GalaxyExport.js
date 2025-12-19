import * as XLSX from "xlsx";
export function GalaxyExport(galaxy) {
    const sheets = [];

    Object.keys(galaxy).forEach((sectorKey)=>{
        const sectorData = galaxy[sectorKey];
        const rows = [];

        rows.push([`Sector: ${sectorKey} - ${sectorData.sectorType}`]);

        rows.push(["Route List"]);
        if (sectorData.routeList && sectorData.routeList.length > 0) {
            sectorData.routeList.forEach((route) => {
            rows.push([`Route: ${route.formatRoute}`]);
        });} else {
            rows.push(["No Routes"]);
        }

        rows.push(["Planet List"]);
        if (sectorData.flatSub && sectorData.flatSub.length > 0) {
            sectorData.flatSub.forEach((planet, index) => {
            rows.push([`Planet ${index + 1}: ${String(planet)}`]);
        });} else {
            rows.push(["No Planets"]);
        }
        const ws = XLSX.utils.aoa_to_sheet(rows);
        sheets.push({ sheet: ws, name: sectorKey });
    });

    const wb = XLSX.utils.book_new();
    sheets.forEach((sheetData) => {
        XLSX.utils.book_append_sheet(wb, sheetData.sheet, sheetData.name);
    });
    XLSX.writeFile(wb, "galaxy_export.xlsx");
}
