
export default function sudoku(empezarDidicultad) {
    const d = document;
    d.addEventListener("submit" , e => {

        const fragmento = d.createDocumentFragment(),
            form = d.getElementById(empezarDidicultad),
            container = d.querySelector(".content-grid");

        let tammaño = null;
        
        if(e.target === form){
            e.preventDefault();
            if(container) container.innerHTML = "";
            (form.tamaño.value === "smoll")? tammaño = 9 : tammaño = 12;
            for (let i = 0; i < tammaño*tammaño; i++) {
                const div = d.createElement("div");
                div.classList.add("grids");
                div.style.backgroundColor = "white";   
                div.style.color = "black";
                div.textContent = `${i + 1}`;            
                fragmento.insertBefore(div, fragmento.childNodes[fragmento.childNodes.length]);
            }
            container.appendChild(fragmento);
            container.style.gridTemplateRows = `repeat(${tammaño}, 1fr)`;
            container.style.gridTemplateColumns = `repeat(${tammaño}, 1fr)`;
            


            
        }
    })
}