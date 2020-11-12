"use strict"
const d = document;



export default function time(empezar,nuevoSudo,time,container,fin) {
    const play = d.getElementById(empezar),
        btnFin = d.getElementById(fin), 
        newPlay = d.getElementById(nuevoSudo),
        times = d.querySelector(time),
        containers = d.querySelector(container);
    let tiempo,
        tiempoPlay,
        contenido;       
        
        
    d.addEventListener("click", e => {
        tiempoPlay = new Date();
        console.log(e.target);
        const inputContent = containers.querySelectorAll("input")
        let tammaño = (play.tamaño.value === "smoll")?  9 :  12;
        // console.log(inputContent.length);
        if(inputContent.length/tammaño !== tammaño) return;
        if(e.target === newPlay || e.target === btnFin) {
            let setInter = () => {
                tiempo = new Date();
                contenido = `Empesaste ${tiempoPlay.getHours()}:${tiempoPlay.getMinutes()}:${tiempoPlay.getSeconds()} ---
                Llevas ${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`;
                times.innerHTML = `${contenido}`;                    
                }
                setInterval(setInter,1000);
            }
            clearInterval(inter);
    });
    
    
    
    d.addEventListener("submit", e => {
        tiempoPlay = new Date();
        const inputContent = containers.querySelectorAll("input")
        let tammaño = (play.tamaño.value === "smoll")?  9 :  12;
        // console.log(inputContent.length);
        
        if(inputContent.length/tammaño !== tammaño) return;
        if(e.target === play) {
            
        
        
    }
    });

    

}