const d = document;

export default function guardar(btnGuardar,conatiner,arr,infoSudo,form) {
    
    d.addEventListener("click", e => {
        const positionSudo = d.getElementById(infoSudo).textContent,
            btn = d.getElementById(btnGuardar),
            container = d.querySelector(conatiner),
            forms = d.getElementById(form),
            indexCasillas = [],
            valoresCasillas = [],
            inputContainer = container.querySelectorAll("input"),
            numberSudoku = d.getElementById("numeroSudoku");

        let numberSudo,tamaño,dificultad;

        if(e.target === btn) {
            if(btn.textContent === "Cargar") {

                
                const indexCasillasLocal = localStorage.getItem("arrIndex"),
                valoresCasillasLocal = localStorage.getItem("arrValores");
                
                numberSudo = Number(localStorage.getItem("numeroSudoku")) - 1;
                tamaño = Number(localStorage.getItem("tamaño"));
                dificultad = localStorage.getItem("dificultad");
                
                forms.tamaño.value = (tamaño === 9)? "smoll":"big";
                forms.dificultad.value = dificultad;
                if(!numberSudo) return;
               
                if(container.matches("div")) container.innerHTML = "";
                
                const fragmento = d.createDocumentFragment(),
                    template = d.querySelector("template"),
                    inputs = template.content.querySelector("input");

                for (let i = 0; i < tamaño*tamaño; i++) {
                    inputs.name = i;
                    inputs.style.minWidth = "contain";
                    if(tamaño === 12) inputs.maxLength = 2;  
                    const div =  d.createElement("div"),
                    clon = d.importNode(inputs,true);
                    div.classList.add("grids");
                    div.style.backgroundColor = "white";  
                    // div.style.color = "red";
                    if(i % 3 === 0) {
                        div.style.borderLeftWidth = "4px";
                        div.style.borderLeftColor = "#000";
                    }
                    if(tamaño === 9) {
                        if((i >= 18 && i <= 26) || (i >= 45  && i <= 53)) div.style.borderBottom = "4px solid #000"; 
                    };
                    if(tamaño === 12) {
                        if((i >= 24 && i <= 35) || (i >= 60  && i <= 71) || (i >= 96 && i <= 107)) div.style.borderBottom = "4px solid #000"; 
                    };
                    // clon.value= i;
                    clon.style.color = "blue";
                    div.appendChild(clon);
                    fragmento.insertBefore(div, fragmento.childNodes[fragmento.childNodes.length]);
                }

                container.style.backgroundSize =  "0%";
            
                container.appendChild(fragmento);
                container.style.gridTemplateRows = `repeat(${tamaño}, 1fr)`;
                container.style.gridTemplateColumns = `repeat(${tamaño}, 1fr)`;
                forms.submitClick.value = "Nuevo Juego";
                
                
                const numberPosition = (posicion,valores,arrays) => {
                    const inputContainer = container.querySelectorAll("input");
                    let posicions = posicion.split(",");
                    let valor = valores.split(",");  
                    
                    inputContainer.forEach(el => el.value = "");

                    posicions.forEach((el,index) => {          
                        let numero = Number(el);
                        inputContainer[numero].value = valor[index];
                    });

                    arrays[0].forEach(el => {
                        inputContainer[el].readOnly = true;
                        inputContainer[el].style.color = "#000";
                    })
                }
                        
                numberPosition(indexCasillasLocal,valoresCasillasLocal,arr[`arr${tamaño}`][dificultad][numberSudo]);
                numberSudoku.innerHTML = `Sudoku ${numberSudo + 1} de ${arr[`arr${tamaño}`][dificultad].length} del nivel ${dificultad}`; 
                btn.textContent = "Guardar Ultimo Juego";
                

            } else {
                const separacionText = positionSudo.split(" ");

                inputContainer.forEach((el,index) => {
                    if(el.value !== "") {
                    indexCasillas.push(index);
                    valoresCasillas.push(el.value)
                    }
                });
                // console.log(indexCasillas);
                // console.log(valoresCasillas);
                
                
                numberSudo = separacionText[1],
                tamaño = (inputContainer.length === 81)? 9:12,
                dificultad = separacionText[separacionText.length-1];           

                localStorage.setItem("numeroSudoku",numberSudo);
                localStorage.setItem("dificultad",dificultad);
                localStorage.setItem("tamaño",tamaño);
                localStorage.setItem("arrIndex",indexCasillas);
                localStorage.setItem("arrValores",valoresCasillas);

                btn.textContent = "Cargar";
            }
        }
    })
}