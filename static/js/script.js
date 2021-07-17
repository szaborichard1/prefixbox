
// kizárólag akciós termékek megjelenítése

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

function termekRendezes(rendezett, termekek, tipus, veglegesenRendezett){
    for (let j = 0; j < rendezett.length-1; j++) {
        let vizsgalando = rendezett[j]
        for (let k = 0; k < termekek.length-1; k++) {
            console.log(termekek[k])
            let aktualisVizsgalando = tipus ==="név"?termekek[k].querySelector(".product-name").textContent:parseInt(termekek[k].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", ""))
            if (vizsgalando === aktualisVizsgalando) {
                veglegesenRendezett.push(termekek[k])
                break
            }
        }
    }
}

// 

function arRendezes(tipus) {
    let termekek = document.querySelectorAll(".product")
    let arak = []
    let rendezett = []
    for (let i = 0; i < termekek.length; i++) {
        arak.push(parseInt(termekek[i].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", "")))
    }
    if (tipus === "asc"){
        arak.sort(function(a, b){return a-b})
    }
    else {
        arak.reverse()
    }
    for (let j = 0; j < arak.length; j++) {
        let ar = arak[j]
        for (let k = 0; k < termekek.length; k++) {
            let aktualisAr = parseInt(termekek[k].querySelector(".product-price").textContent.replace(" Ft", "").replace(".", ""))
            if (ar === aktualisAr) {
                rendezett.push(termekek[k])
                break
            }
        }
    }
    //termekRendezes(arak, termekek, "ár", rendezett)
    termekVisszatoltes(rendezett)
}

function productLetrehozas(product){
        let imgsrc = product.querySelector("img").src
        let azonosito = product.querySelector(".product-data").getAttribute("data-identifier")
        let termekNev = product.querySelector(".product-name").textContent
        let termekAr = product.querySelector(".product-price").textContent
        let regiTermekAr = product.querySelector(".product-old-price")
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
    return pluszElem
}

function abcRendezes(nevek, tipus){
    let termekek = document.querySelectorAll(".product")
    let rendezett = []
    let veglegesenRendezett =[]
    nevek.sort()
    if (tipus === "asc"){
        for (let i=0; i<nevek.length; i++){
            rendezett.push(nevek[i])
        }
    }
    else {
        for (let i=nevek.length-1; i>=0; i--){
            rendezett.push(nevek[i])
        }
    }
    for (let j = 0; j < rendezett.length; j++) {
        let nev = rendezett[j]
        for (let k = 0; k < termekek.length; k++) {
            let aktualisNev = termekek[k].querySelector(".product-name").textContent
            if (nev === aktualisNev) {
                veglegesenRendezett.push(termekek[k])
                break
            }
        }
    }
    //termekRendezes(rendezett, termekek, "név", veglegesenRendezett)
    termekVisszatoltes(veglegesenRendezett)
}


function termekVisszatoltes(veglegesenRendezett){
    let ures = document.querySelector(".products")
    ures.innerHTML = ""
    for (let l = 0; l < veglegesenRendezett.length; l++) {
        ures.innerHTML += productLetrehozas(veglegesenRendezett[l])
    }
}

function getData(tipus){
    let data = tipus==="név"?document.querySelectorAll(".product-name"):document.querySelectorAll(".product-price")
    let joData = []
    for (let i=0; i<data.length; i++){
        let egyData = tipus == "név"?data[i].textContent:data[i].textContent.replace(" Ft", "").replace(".", "")
        joData.push(egyData)
    }
    console.log(data)
    return joData
}

function dropdown() {
    let opciok = document.querySelector(".order")
    let joArak = getData("ár")
    let joNevek = getData("név")
    opciok.addEventListener("change", function () {
        console.log(document.querySelectorAll(".product"))
        if (opciok.value == 0) {
            arRendezes("asc")
        } else if (opciok.value == 1) {
            arRendezes("desc")
        } else if (opciok.value == 2) {
            abcRendezes(joNevek, "asc")
        } else {
            abcRendezes(joNevek, "desc")
        }
    })
}


function main() {
    akcio()
    dropdown()
}

main()

