const d = document,
    colores = ["red","green","yellow","blueViolet","gray","chartreuse","chocolate","darkOrange","darkSlateGrey","fushsia","indigo","marron","cyan"];

export default function correccionFinal(btnFin){

    const btn = d.getElementById(btnFin),
        contents = d.querySelector(".content-grid");

    const localSudos = (num,dif,tamaño) => {
        let sudo9Facil = localStorage.getItem("sud9Facil"),
        sudo9Dificil = localStorage.getItem("sud9Dificil"),
        sudo12Facil = localStorage.getItem("sud12Facil"),
        sudo12Dificil = localStorage.getItem("sud12Dificil");
        
        const anadirLocalS = (variable,sudoco,numero,tam,difl) => {
            let sudo = [],reducir,tamaño,dificultad;
            if(!variable) {
                sudo.push(numero);
                localStorage.setItem(sudoco,sudo);
                return
            }; 
                variable.split(",").forEach(el => sudo.push(el));
                sudo.push(numero);
                sudo.sort((a,b)=> a -b);
                reducir = [...new Set(sudo)];
                localStorage.setItem(sudoco,reducir);
                tamaño = localStorage.setItem("tamaño",tam);
                dificultad = localStorage.setItem("dificultad",difl);
        }

        if(tamaño === 9 && dif === "facil") {
            anadirLocalS(sudo9Facil,"sud9Facil",num,tamaño,dif);
            return;
            
        };

        if(tamaño === 9 && dif === "dificil") {
            anadirLocalS(sudo9Dificil,"sud9Dificil",num,tamaño,dif);
            return;
        };
        
        if(tamaño === 12 && dif === "facil") {
            anadirLocalS(sudo12Facil,"sud12Facil",num,tamaño,dif);
            return; 
        };
        
        if(tamaño === 12 && dif === "dificil") {
            anadirLocalS(sudo12Dificil,"sud12Dificil",num,tamaño,dif);
            return; 
        };
    }
    
    
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
                if(seguirReto) {
                    const texto = d.getElementById("numeroSudoku").textContent.split(" ");
                    let num = Number(texto[1])-1,
                        dif = texto[texto.length-1];
                    localSudos(num,dif,filasColumnas);                    
                    d.getElementById("empezarDificultad").submitClick.click();  
                }                 
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