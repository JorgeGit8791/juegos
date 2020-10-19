
export default function sudoku(empezarDidicultad) {
    const d = document;
    d.addEventListener("submit" , e => {

        const fragmento = d.createDocumentFragment(),
            form = d.getElementById(empezarDidicultad),
            container = d.querySelector(".content-grid");

        let tammaño = null;
        console.log(form.tamaño.value);
        
        if(e.target === form){
            e.preventDefault();
            if(container) container.innerHTML = "";
            (form.tamaño.value === "smoll")? tammaño = 9 : tammaño = 12;
            console.log(tammaño)
            for (let i = 0; i < tammaño*tammaño; i++) {
                console.log("esta en el bucle " + tammaño )
                const div = d.createElement("div");
                div.classList.add("grids");
                div.style.backgroundColor = "white";   
                div.style.color = "black";
                div.textContent = `${i + 1}`;            
                fragmento.insertBefore(div, fragmento.childNodes[fragmento.childNodes.length]);
            }
            // console.log(fragmento.textContent)
            container.appendChild(fragmento);
            container.style.gridTemplateRows = `repeat(${tammaño}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${tammaño}, 1fr)`;
            


            
        }
    })
}