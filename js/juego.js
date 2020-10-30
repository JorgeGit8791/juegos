import sudoku from "./modulos/enlace.js";
import escrituraMovimiento from "./modulos/escritura.js";
import info from "./modulos/info.js";

document.addEventListener("DOMContentLoaded",(e) => {
    info(".nav-footer section a",".info-btn");
    sudoku("empezarDificultad")

});

document.addEventListener("keyup", (e) => {
    escrituraMovimiento(e,".grids input",".content-grid");
})