"use strict"
let cont = 0 ;
const d = document,
    container = d.querySelector(".content-grid");
export default function sudoku(empezarDidicultad, arrays,numberSudo,respuesta,cargar) {
    const numberSudoku = d.getElementById(numberSudo);


    /********************  funcion resolver ********************************************************************************************************* */
    const resolverSudo = arr => {
        const inputContent = container.querySelectorAll("input");

        inputContent.forEach(el => el.value = "");
        // inputContainer.forEach((el,index)=>el.value = index)
        arr[2].forEach((el, index) => {            
            inputContent[index].value = el;
            inputContent[index].readOnly = true;
            inputContent[index].style.color = "#000";
        });
    }


    /************************************************************************************************************************************************************** */

    /****************************************************************************************************************************************** */
    





     /******************* funcion de dar los valores estaticos ****************************************************************************************** */
        
     const numberPosition = (arr) => {
        const inputContainer = container.querySelectorAll("input");

        inputContainer.forEach(el => el.value = "");
        // inputContainer.forEach((el,index)=>el.value = index)
        arr[0].forEach((el, index) => {            
            inputContainer[el].value = arr[1][index];
            inputContainer[el].readOnly = true;
            inputContainer[el].style.color = "#000";
        });
    }
    /*************************************************************************************************************************************************************************** */


    d.addEventListener("submit" , e => {
        /************** creacion de las variables ***************************************************************** */

        const fragmento = d.createDocumentFragment(),
        form = d.getElementById(empezarDidicultad),
        template = d.querySelector("template"),
        inputs = template.content.querySelector("input"),
        dif = localStorage.getItem("dificultad"),
        tam = localStorage.getItem("tamaño");
        /************************************************************************************************************************************* */
        
        
        /**********  dar valor del tamaño de nuesto container sudoku ************************************************************************************** */
        
        let tammaño;
        (form.tamaño.value === "smoll")? tammaño = 9 : tammaño = 12;
        /****************************************************************************************************************************************************** */
        if(cont < 0 ) cont = 0;
        console.log(container);
        if(form.submitClick.value === "Empezar Partida") {
            if(tammaño === Number(tam) && form.dificultad.value === dif) {
                let texto = dif.charAt(0).toUpperCase().concat(dif.substring(1,dif.length));
                let existe = localStorage.getItem(`sud${tam}${texto}`);
                if(existe !== null) {
                    // console.log(existe.charAt(existe.length-1))
                    cont = Number(existe.charAt(existe.length-1));
                    console.log(cont);
                    console.log(typeof cont);
                }
            }
        }
        /**************** creacion de nuestro container ****************************************************************************************************************************** */
        
        if(e.target === form){
            e.preventDefault();
            d.getElementById("btn-cargarGuardar").textContent = "Guardar Ultimo Juego";
            if(container.matches("div")) container.innerHTML = "";
            for (let i = 0; i < tammaño*tammaño; i++) {
                inputs.name = i;
                inputs.style.minWidth = "contain";
                if(tammaño === 12) inputs.maxLength = 2;  
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
            if(arrays[`arr${tammaño}`][`${form.dificultad.value}`].length <= cont) cont = 0; 
            
            container.style.backgroundSize =  "0%";
            
            container.appendChild(fragmento);
            container.style.gridTemplateRows = `repeat(${tammaño}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${tammaño}, 1fr)`;
            numberPosition(arrays[`arr${tammaño}`][`${form.dificultad.value}`][cont]);
            numberSudoku.innerHTML = `Sudoku ${cont+1} de ${arrays[`arr${tammaño}`][`${form.dificultad.value}`].length} del nivel ${form.dificultad.value}`;
            ++cont;
            form.submitClick.value = "Nuevo Juego";
        }
        /************************************************************************************************************************************************************************* */

    });

    d.addEventListener("click",e => {
        const respuestaSudoku = d.getElementById(respuesta),
            cargarSudo = d.getElementById(cargar),
            forms = d.getElementById(empezarDidicultad);
            let tammaño;
            (forms.tamaño.value === "smoll")? tammaño = 9 : tammaño = 12;
            
        if(e.target === cargarSudo) {
            let existirEnLocal = Number(localStorage.getItem("numeroSudoku"))-1;
            if(existirEnLocal !== undefined) {
                cont = existirEnLocal;
                cont++;
            }
        }
        
        if(e.target === respuestaSudoku){
            let cunt = cont -1;
            resolverSudo(arrays[`arr${tammaño}`][`${forms.dificultad.value}`][(cont === 0)? arrays[`arr${tammaño}`][`${forms.dificultad.value}`].length-1 : cunt])
        }
    })
}

            