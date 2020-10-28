
export default function sudoku(empezarDidicultad) {
    const d = document;
    d.addEventListener("submit" , e => {

        const fragmento = d.createDocumentFragment(),
            form = d.getElementById(empezarDidicultad),
            template = d.querySelector("template"),
            inputs = template.content.querySelector("input"),
            container = d.querySelector(".content-grid");
            
        let tammaño = null;
            
        if(e.target === form){
            e.preventDefault();
            if(container.matches("div")) container.innerHTML = "";
            (form.tamaño.value === "smoll")? tammaño = 9 : tammaño = 12;
            for (let i = 0; i < tammaño*tammaño; i++) {
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
        }
    })
}
            


            