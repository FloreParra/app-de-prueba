const fs = require("fs");

//const string = fs.readFileSync("tareas.json", { encoding: "utf-8" });

const tareas = JSON.parse(fs.readFileSync("tareas.json", { encoding: "utf-8" }));
const argv = process.argv[2];

switch (argv) {
    case "Listar":
        for (i=0; i<tareas.length; i++){
            console.log("-"+tareas[i].title);
        }
        break;
    case undefined:
            console.log("Atención - Tienes que pasar una acción.");
        break;
    default:
            console.log("No entiendo qué quieres hacer");
        break;
}
