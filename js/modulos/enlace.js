let cont = 0 ;
const d = document,
    container = d.querySelector(".content-grid");
export default function sudoku(empezarDidicultad, arrays, newPlayer) {

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
            numberPosition(arrays[cont]);
            ++cont;
            if(arrays.length <= cont) cont = 0; 
        }
        /************************************************************************************************************************************************************************* */

    })
    
    d.addEventListener("click", e => {
        const newPlay = d.getElementById(newPlayer);

        /************************* ubicacion del sudoku con los arrays ****************************************************************************************************+ */
        if(e.target === newPlay) {
            numberPosition(arrays[cont]);
            ++cont;
            if(arrays.length <= cont) cont = 0;
        } else {
            return;
        }
    })
}

            