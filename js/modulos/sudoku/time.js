"use strict"
const d = document;
let segundo = 0,
minuto = 0,
hora = 0,
dia = 0;


export default function time(empezar,resolver,reloj) {
    const play = d.getElementById(empezar),
        textoTime = d.querySelector(reloj),
        respuestaPlay = d.getElementById(resolver);
    let times;


    setInterval(times = function ()  {
        // console.log("paso por time");
        ++segundo;
        if(segundo > 59) {
            ++minuto;
            segundo = 0;
            if(minuto > 59) {
                ++hora;
                minuto = 0;
                if(hora === 24) {
                    ++dia;
                    hora = 0;
                }
            }
        }
        textoTime.innerHTML = `${(dia > 0)?dia + ":": ""}${(hora === 0 && dia === 0)?"":hora + ":"}${(minuto === 0 && hora === 0)?"":(minuto < 10)?"0" + minuto + ":":minuto + ":"}${(segundo < 10)? "0" + segundo:segundo}`;
    }
,1000);

    
    

    d.addEventListener("click", e => {
        // console.log(e.target)
        
        if(e.target === respuestaPlay){
            // console.log("paso por fin respusta");
            // clearInterval(times);
            // const parar = clearInterval(time);;
        }
        
        if(e.target === play.submitClick) {
            segundo = 0;
            minuto = 0;
            hora = 0;
            dia = 0;
            // setInterval(times).reload();
            // clearInterval(times);
            // setInterval(times,1000);
            // setInterval(times,1000);
            // timess;
        }
    });

    // d.addEventListener("click", e => {
    //     if(e.target === respuestaPlay) {
    //         console.log("paso por fin respusta");
    //         clearInterval(times);
    //     }
    // });
    
}