const d = document,
    colores = ["red","green","yellow","blueViolet","gray","chartreuse","chocolate","darkOrange","darkSlateGrey","fushsia","indigo","marron","cyan"];

export default function correccionFinal(btnFin){

    const btn = d.getElementById(btnFin),
        contents = d.querySelector(".content-grid");
    
    
    d.addEventListener("click", e => {
        const  inputs = contents.querySelectorAll("input"),
            filasColumnas = (inputs.length === 81)? 9 : 12;
        let llenado = true,
            arrays2 = [],
            arrays = [];

        if(e.target === btn) {
            inputs.forEach( el => {
                if(!el.value) {
                    el.style.border = "solid #000";  
                    llenado = false
                }
            });

            if(!llenado) {
                setTimeout(() => inputs.forEach(el => el.style.border = "none"),3000);
                setTimeout(() => alert("Debes de llenar todos los contenedores"),3200);
                return;
            }
            if(llenado) {
                llenado = 0;
                for(let i = 0; i < filasColumnas; i++) {
                    for(let index = 0; index < filasColumnas;index++){
                        arrays.push(inputs[((i*filasColumnas + index))].value);
                    }
                    for(let index = 0; index < filasColumnas;index++){
                        arrays2.push(inputs[filasColumnas * index + i].value);
                    }
                    
                    arrays.forEach((el, count) => {
                        for(let cont = 0; cont < arrays.length; ++cont) {
                            if(cont === count) continue;
                            if(el === arrays[cont]){
                                inputs[((i*filasColumnas + count))].style.backgroundColor = colores[count];
                                inputs[((i*filasColumnas + cont))].style.backgroundColor = colores[count];
                                llenado++;
                            }
                        }
                    })

                    arrays2.forEach((el,count) => {
                        for(let ind = 0; ind < arrays2.length; ++ind) {
                            if(ind === count) continue;
                            if(el === arrays2[ind]) {
                                inputs[(ind*filasColumnas + i)].style.border = "4px solid #000";
                                inputs[(count * filasColumnas) + i].style.border = "4px solid #000";
                                llenado++;
                            }
                        }
                    })
                    arrays2 = [];
                    arrays = [];
                }
            }

            llenado = (llenado === 0)? true:false;

            if(llenado) {
                const time = d.querySelector(".count-p2").textContent;
                const seguirReto = confirm(`Grandioso has pasado este reto con un tiempo de ${time} Segdos.\nAhora deseas comenzar otro reto: `);
                if(seguirReto) d.getElementById("empezarDificultad").submitClick.click();
                return;
            }

            if(!llenado) {
                alert(`Tienes varios errores errores`);
                setTimeout(()=> {
                    inputs.forEach(el => {
                        el.style.backgroundColor = "white"
                        el.style.border = "none";
                    })

                },3000);
                    

            }
            
        }
    })
}