export default function sudoku(empezarDidicultad,array) {
    const d = document;
    d.addEventListener("submit" , e => {

        const fragmento = d.createDocumentFragment(),
            array = array,
            tamaño = null,
            form = d.getElementById(empezarDidicultad),
            container = d.querySelector(".container-grid");
        // console.log(form.tamaño.value);
        
        if(e.target === form){
            e.preventDefault();
            (form.tammaño.value === "smoll")? tamaño = 9 : tamaño = 12;
            for (let i = 0; i < tamaño*tamaño; i++) {
                const div = d.createElement("div");
                div.classList.add("grids");
                fragmento *= fragmento.insertAdjacentElement("afterend",div);                
            }
            container.appendChild(fragmento)



            
        }
    })
}