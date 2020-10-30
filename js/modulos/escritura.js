const d = document;

export default function escrituraMovimiento(e,input,caja) {
    const inputs = d.querySelectorAll(input),
    cajaGrids = d.querySelector(caja);
    
    console.log(inputs)
    const direccion = (e,dir) => {
        const position = Number(e.target.name),
            movimiento = position + dir;

        if(movimiento < 0 || movimiento > inputs.length) return;

        
    }
    // console.log(e.target.name);

    if(e.target.matches(input)){

        if(e.key === "ArrowUp") {
            direccion(e,-9);
            return;
        }
        if(e.key === "ArrowRight") {
            direccion(e,1);
            return;
        }
        if(e.key === "ArrowLeft") {
            direccion(e,-1);
            return;
        }
        if(e.key === "ArrowDown") {
            direccion(e,9);
            return;
        }
    }

          
    if(!Number(e.key)) {
        e.target.value = "";
            // console.log(e.target.value)
    }
        


}