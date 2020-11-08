import correccionFinal from "./modulos/corregirFin.js";
import sudoku from "./modulos/enlace.js";
import escrituraMovimiento from "./modulos/escritura.js";
import info from "./modulos/info.js";
import time from "./modulos/time.js";


const array9 = {
    arr9 : {
        facil:[
                [
                    [1,3,8,9,14,19,20,22,26,31,33,34,36,38,39,40,41,44,45,49,50,51,52,54,56,58,60,61,63,65,69,71,72,73,75,77,78,79],
                    [4,8,5,5,2,2,7,4,1,5,8,2,2,8,3,9,6,4,7,8,4,1,6,1,5,6,4,9,9,2,3,7,3,7,9,8,5,1],   
                ],
                [
                    [3,4,6,8,9,11,12,13,16,19,20,22,24,26,27,29,33,35,37,38,41,42,43,46,49,52,54,57,58,60,65,66,70,72,75,76,78,79],
                    [9,1,4,7,3,4,6,8,1,7,9,5,6,3,9,2,8,1,1,5,6,3,4,3,9,5,2,5,3,7,3,1,9,6,4,7,1,3],
                ]
            ],
        dificil:[
            [
                [80],
                [5]
            ],
            [
                [45],
                [6]
            ]
        ]
    },
    arr12 : {
        facil:[
                [
                    [1,3,8,9,14,19,20,22,26,31,33,34,36,38,39,40,41,44,45,49,50,51,52,54,56,58,60,61,63,65,69,71,72,73,75,77,78,79],
                    [4,8,5,5,2,2,7,4,1,5,8,2,2,8,3,9,6,4,7,8,4,1,6,1,5,6,4,9,9,2,3,7,3,7,9,8,5,1],   
                ],
                [
                    [3,4,6,8,9,11,12,13,16,19,20,22,24,26,27,29,33,35,37,38,41,42,43,46,49,52,54,57,58,60,65,66,70,72,75,76,78,79,130],
                    [9,1,4,7,3,4,6,8,1,7,9,5,6,3,9,2,8,1,1,5,6,3,4,3,9,5,2,5,3,7,3,1,9,6,4,7,1,3,99],
                ]
            ],
        dificil:[
            [130],
            [3]
        ]
    }
}
    

document.addEventListener("DOMContentLoaded",(e) => {
    info(".nav-footer section a",".info-btn");
    sudoku("empezarDificultad",array9,"btn-newplayer","numeroSudoku");
    correccionFinal("btn-finJuego",".content-grid", ".grids input","btn-finJuego");
    time("empezarDificultad","btn-newplayer",".count-p2",".content-grid")
});

document.addEventListener("keyup", (e) => {
    escrituraMovimiento(e,".grids input",".content-grid");
})