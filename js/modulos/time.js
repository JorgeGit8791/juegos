"use strict"
const d = document;

export default function time(empezar,nuevoSudo,time,container) {
    const play = d.getElementById(empezar),
        newPlay = d.getElementById(nuevoSudo),
        times = d.querySelector(time),
        containers = d.querySelector(container);
    let tiempo,
        tiempoPlay,
        contenido;
    
    const intervalTime = () => {
            const inter = setInterval(() => {
                tiempo = new Date();
                contenido = `Empesaste ${tiempoPlay.getHours()}:${tiempoPlay.getMinutes()}:${tiempoPlay.getSeconds()} ---
                Llevas ${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`;
                times.innerHTML = `${contenido}`;
                },1000);
                return;
        }

    
            
        d.addEventListener("click", e => {
            tiempoPlay = new Date;
            const inputContent = containers.querySelectorAll("input")
            let tammaño = (play.tamaño.value === "smoll")?  9 :  12;
            // console.log(inputContent.length);
            if(inputContent.length/tammaño !== tammaño) return;
            if(e.target === newPlay) {
                intervalTime();
            }
        });
    
    
    
    d.addEventListener("submit", e => {
        tiempoPlay = new Date;
        const inputContent = containers.querySelectorAll("input")
        let tammaño = (play.tamaño.value === "smoll")?  9 :  12;
        // console.log(inputContent.length);
        
        if(inputContent.length/tammaño !== tammaño) return;
        if(e.target === play) {

            intervalTime()
            
        }
    });

    

}