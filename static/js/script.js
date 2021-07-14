
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

function arNovekvo() {
    let termekek = document.querySelectorAll(".product")
    let arak = []
    let rendezett = []
    for (let i = 0; i < termekek.length; i++) {
        arak.push(parseInt(termekek[i].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", "")))
    }
    arak.sort()
    for (let j = 0; j < arak.length; j++) {
        let ar = arak[j]
        for (let k = 0; termekek.length; k++) {
            let aktualisAr = parseInt(termekek[k].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", ""))
            if (ar === aktualisAr) {
                rendezett.push(termekek[k])
                break
            }
        }
    }
    let ures = document.querySelector(".products")
    ures.innerHTML = ""
    for (let l = 0; l < rendezett.length; l++) {
        let imgsrc = rendezett[l].querySelector("img").src
        let azonosito = rendezett[l].querySelector(".product-data").getAttribute("data-identifier")
        let termekNev = rendezett[l].querySelector(".product-name").textContent
        let termekAr = rendezett[l].querySelector(".product-price").textContent
        let regiTermekAr = rendezett[l].querySelector(".product-old-price")
        let pluszElem = `<div class="product">
        <span class="image-container">
            <img src="${imgsrc}">
        </span>
        <div class="product-data" data-identifier="${azonosito}">
            <div class="product-name">${termekNev}</div>
            <div class="product-price">${termekAr}</div>`
        if (regiTermekAr !== null) {
            pluszElem += `<div class="product-old-price">${regiTermekAr.textContent}</div>`
        }
        pluszElem += `</div>
    </div>`
        ures.innerHTML += pluszElem
    }
}

function arCsokkeno() {
    let termekek = document.querySelectorAll(".product")
    let arak = []
    let rendezett = []
    for (let i = 0; i < termekek.length; i++) {
        arak.push(parseInt(termekek[i].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", "")))
    }
    arak.reverse()
    for (let j = 0; j < arak.length; j++) {
        let ar = arak[j]
        for (let k = 0; termekek.length; k++) {
            let aktualisAr = parseInt(termekek[k].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", ""))
            if (ar === aktualisAr) {
                rendezett.push(termekek[k])
                break
            }
        }
    }
    let ures = document.querySelector(".products")
    ures.innerHTML = ""
    for (let l = 0; l < rendezett.length; l++) {
        let imgsrc = rendezett[l].querySelector("img").src
        let azonosito = rendezett[l].querySelector(".product-data").getAttribute("data-identifier")
        let termekNev = rendezett[l].querySelector(".product-name").textContent
        let termekAr = rendezett[l].querySelector(".product-price").textContent
        let regiTermekAr = rendezett[l].querySelector(".product-old-price")
        let pluszElem = `<div class="product">
        <span class="image-container">
            <img src="${imgsrc}">
        </span>
        <div class="product-data" data-identifier="${azonosito}">
            <div class="product-name">${termekNev}</div>
            <div class="product-price">${termekAr}</div>`
        if (regiTermekAr !== null) {
            pluszElem += `<div class="product-old-price">${regiTermekAr.textContent}</div>`
        }
        pluszElem += `</div>
    </div>`
        ures.innerHTML += pluszElem
    }
}

function abcNovekvo(termekek) {

}

function abcCsokkeno(termekek) {

}

function dropdown() {
    let opciok = document.querySelector(".order")
    opciok.addEventListener("change", function () {
        console.log(document.querySelectorAll(".product"))
        if (opciok.value == 0) {
            arNovekvo()
        } else if (opciok.value == 1) {
            arCsokkeno()
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

