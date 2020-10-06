export default function info(acerca,contacto,descripcion,cerrar){
    const d = document;


    d.addEventListener("click", (e)=> {
        
        const ventana = clase => {
            e.preventDefault();
            d.querySelector(".info").classList.add("is-active");
            d.querySelector(clase).classList.remove("none");        
        }
        
        if(e.target.matches(acerca)){
            ventana(".info-acerca");
        }else if(e.target.matches(contacto)) {
            ventana(".info-contact");
        }else if(e.target.matches(descripcion)) {
            ventana(".info-descrip");
        }else if(e.target.matches(cerrar)) {
            d.querySelector(".info-acerca").classList.add("none");
            d.querySelector(".info-contact").classList.add("none");
            d.querySelector(".info-descrip").classList.add("none");
            d.querySelector(".info").classList.remove("is-active");
        }
    });
}