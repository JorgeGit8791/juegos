const d = document;

export default function correccionFinal(btnFin,content,input){

    const btn = d.getElementById(btnFin),
        // llenado = Boolean,
        contents = d.querySelector(content),
        inputs = contents.querySelectorAll("input");

        
        d.addEventListener("click", e => {
        if(e.target === btn) {
            console.log(inputs)
            inputs.forEach(el => {
                if(el.value) {
                    el.style.background = "#000";
                    console.log(el)
                }
            })
        }
    })
}