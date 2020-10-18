export default function info(footerNav,cerrar){
    const d = document;


    d.addEventListener("click", (e)=> {

        const footer = d.querySelectorAll(footerNav);
        // console.log(e)
            
        if(e.target.matches(".nav-footer *")){
            e.preventDefault();
            footer.forEach(el => {
                // console.log(e.target.className === el.className);
                // console.log(el.className);
                if(e.target.className === el.className) {
                    d.querySelector(`.info-${el.className}`).classList.remove("none");
                    // d.querySelector(`.info-contact`).classList.remove("none");
                    // console.log(`.${el.className} :  true`)
                }else {
                    d.querySelector(`.info-${el.className}`).classList.add("none");
                    // console.log(`.${el.className} :  false`)
                }
            })
            d.querySelector(".info").classList.add("is-active");

            
        } else if ( e.target.matches(cerrar)) {
            e.preventDefault();
            footer.forEach(el => d.querySelector(`.info-${el.className}`).classList.add("none"));
            d.querySelector(".info").classList.remove("is-active");

        }

        
    });
}