
function akcio() {
    let checkbox = document.querySelector(".sale")
    checkbox.addEventListener('click', function () {
        let termekek = document.querySelectorAll(".product")
        if (checkbox.checked) {
            for (let i = 0; i < termekek.length; i++) {
                let price = termekek[i].querySelector(".product-old-price")
                if (price === null) termekek[i].classList.add("nemLathato")
            }
        }
        else {
            for (let i = 0; i < termekek.length; i++) {
                termekek[i].classList.remove("nemLathato")
            }
        }
    })
}

function arNovekvo(cica) {
    console.log(cica.sort(function(a, b){return a-b}))
}

function arCsokkeno(kutya) {
    console.log(kutya.reverse())
}

function abcNovekvo() {
    let nevek = document.querySelectorAll(".product-name")
    let joNevek = []
    for (let i=0; i<nevek.length; i++){
        let joNev = nevek[i]
        joNevek.push(joNev)
    }
    console.log()
}

function abcCsokkeno() {

}

function getJoArak(){
    let arak = document.querySelectorAll(".product-price")
    let joArak = []
    for (let i=0; i<arak.length; i++){
        let joAr = parseInt(arak[i].textContent.replace(" Ft", "").replace(".", ""))
        joArak.push(joAr)
    }
    return joArak
}

function dropdown() {
    let opciok = document.querySelector(".order")
    let tegla = getJoArak()
    opciok.addEventListener("change", function () {
        if (opciok.value == 0) {
            arNovekvo(tegla)
        } else if (opciok.value == 1) {
            arCsokkeno(tegla)
        } else if (opciok.value == 2) {
            abcNovekvo()
        } else {
            abcCsokkeno()
        }
    })
}







function main() {
    akcio()
    dropdown()
}

main()

