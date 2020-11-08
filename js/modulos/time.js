const d = document;

export default function time(empezar,nuevoSudo,time,container) {
    const play = d.getElementById(empezar),
        newPlay = d.getElementById(nuevoSudo),
        times = d.querySelector(time),
        containers = d.querySelector(container);
        
    d.addEventListener("click", e => {
        const inputContent = containers.querySelectorAll("input")
        let tammaño = (play.tamaño.value === "smoll")?  9 :  12;
        console.log(inputContent.length);
        if(inputContent.length/tammaño !== tammaño) return;
        if(e.target === newPlay) {
            times.innerHTML = "si";
        }
    });
        
        
        
    d.addEventListener("submit", e => {
        const inputContent = containers.querySelectorAll("input")
        let tammaño = (play.tamaño.value === "smoll")?  9 :  12;
        console.log(inputContent.length);

        if(inputContent.length/tammaño !== tammaño) return;
        if(e.target === play) {
            times.innerHTML = "si si";
        }
    });

    

}