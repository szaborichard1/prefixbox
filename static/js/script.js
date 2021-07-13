
function akcio() {
    let checkbox = document.querySelector(".sale")
    checkbox.addEventListener('click', function(){
        let termekek = document.querySelectorAll(".product")
        if (checkbox.checked) {
            for (let i=0; i<termekek.length; i++){
                let price = termekek[i].querySelector(".product-old-price")
                if (price===null) termekek[i].classList.add("nemLathato")
            }
        }
        else {
            for (let i=0; i<termekek.length; i++){
                termekek[i].classList.remove("nemLathato")
            }
        }
    })
}










function main() {
    akcio()
}

main()

