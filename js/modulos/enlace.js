"use strict"
let cont = 0 ;
const d = document,
    container = d.querySelector(".content-grid");
export default function sudoku(empezarDidicultad, arrays, newPlayer,numberSudo) {
    const numberSudoku = d.getElementById(numberSudo);

     /******************* funcion de dar los valores estaticos ****************************************************************************************** */
        
     const numberPosition = (arr) => {
        const inputContainer = container.querySelectorAll("input");

        inputContainer.forEach(el => el.value = "");

        arr[0].forEach((el, index) => {
            
            inputContainer[el].value = arr[1][index];
            inputContainer[el].readOnly = true;
            inputContainer[el].style.color = "#000";
        });
        
    }
    /*************************************************************************************************************************************************************************** */

    /****************** funcion de arrays de dificultad ********************************************************************************************************************** */
    
    const dific = () => {
        if( tamaño === 9){
            if(form.dificultad === facil){
                return arrays.arr9.facil;
            }else {
                return arrays.arr9.dificil;
            }
        }
    }

    /************************************************************************************************************************************************** */

    d.addEventListener("submit" , e => {
        /************** creacion de las variables ***************************************************************** */

        const fragmento = d.createDocumentFragment(),
        form = d.getElementById(empezarDidicultad),
        template = d.querySelector("template"),
        inputs = template.content.querySelector("input");
        /************************************************************************************************************************************* */
        
        
        /**********  dar valor del tamaño de nuesto container sudoku ************************************************************************************** */
        
        let tammaño;
        (form.tamaño.value === "smoll")? tammaño = 9 : tammaño = 12;
        /****************************************************************************************************************************************************** */
        
        /**************** creacion de nuestro container ****************************************************************************************************************************** */
        
        if(e.target === form){
            e.preventDefault();
            if(container.matches("div")) container.innerHTML = "";
            for (let i = 0; i < tammaño*tammaño; i++) {

                inputs.name = i;
                inputs.style.minWidth = "contain";
                const div =  d.createElement("div"),
                clon = d.importNode(inputs,true);
                div.classList.add("grids");
                div.style.backgroundColor = "white";  
                // div.style.color = "red";
                if(i % 3 === 0) {
                    div.style.borderLeftWidth = "4px";
                    div.style.borderLeftColor = "#000";
                }
                if(tammaño === 9) {
                    if((i >= 18 && i <= 26) || (i >= 45  && i <= 53)) div.style.borderBottom = "4px solid #000"; 
                };
                if(tammaño === 12) {
                    if((i >= 24 && i <= 35) || (i >= 60  && i <= 71) || (i >= 96 && i <= 107)) div.style.borderBottom = "4px solid #000"; 
                };
                // clon.value= i;
                clon.style.color = "blue";
                div.appendChild(clon);
                fragmento.insertBefore(div, fragmento.childNodes[fragmento.childNodes.length]);
            }
            
            container.style.backgroundSize =  "0%";
            
            container.appendChild(fragmento);
            container.style.gridTemplateRows = `repeat(${tammaño}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${tammaño}, 1fr)`;
            numberPosition(arrays[`arr${tammaño}`][`${form.dificultad.value}`][cont]);
            numberSudoku.innerHTML = `Sudoku ${cont+1} del nivel ${form.dificultad.value}`;
            ++cont;
            if(arrays[`arr${tammaño}`][`${form.dificultad.value}`].length <= cont) cont = 0; 
        }
        /************************************************************************************************************************************************************************* */

    })
    
    d.addEventListener("click", e => {
        const newPlay = d.getElementById(newPlayer),
            inputContainer = container.querySelectorAll("input"),
            form = d.getElementById(empezarDidicultad);

        /**********  dar valor del tamaño de nuesto container sudoku ************************************************************************************** */
        
        // console.log(inputContainer.length);
        if(e.target === newPlay) {
            let tammaño = (form.tamaño.value === "smoll")?  9 :  12;
            if(inputContainer.length === 0) return;
            if(inputContainer.length/tammaño !== tammaño){
                alert("Cambiaste el tamaño del sudoku ahora debes de hacer click en Empezar Partida");
                return;
            };
 /****************************************************************************************************************************************************** */

 /************************* ubicacion del sudoku con los arrays ****************************************************************************************************+ */
            numberSudoku.innerHTML = `Sudoku ${cont+1} del nivel ${form.dificultad.value}`;
            numberPosition(arrays[`arr${tammaño}`][`${form.dificultad.value}`][cont]);
            ++cont;
            if(arrays[`arr${tammaño}`][`${form.dificultad.value}`].length <= cont) cont = 0;
        } else {
            return;
        }
    })
}

            