import * as XLSX from "xlsx";

export function subsectorExport( routes, flatSubsector, flatDetails ) {
  const rows = [];
  rows.push({
    Type: "Route / Planet",
    Name: "",
    Details: ""
  });

  console.log("Routes: "+routes);

  if(routes!=null&&routes!=undefined){
    routes.forEach(route =>{
      rows.push(({
        Type: "Route",
        Name: route.formatRoute,
        Details: ""
      }));
    });
  }

  console.log("Planets: "+flatSubsector);
  
  if(flatSubsector!=null&&flatSubsector!=undefined){
    flatSubsector.forEach((planet, index) => {
      rows.push({
        Type: "Planet",
        Name: String(planet),
        Details: JSON.stringify(flatDetails[index])
      });
    });
  }

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Subsector");
  XLSX.writeFile(workbook, "subsector.xlsx");
}
