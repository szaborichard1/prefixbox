
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

function arNovekvo(arak, tipus) {
    let termekek = document.querySelectorAll(".product")
    if (tipus === "asc"){
        arak.sort(function(a, b){return a-b})
    }
    else {
        arak.reverse()
    }
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

function arCsokkeno(arak, tipus) {
    
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

function abcNovekvo(joNevek) {
    joNevek.sort()
    console.log(joNevek)
}

function abcCsokkeno(joNevekasc) {
    let joNevek = []
    for (let i=joNevekasc.length-1; i>=0; i--){
        joNevek.push(joNevekasc[i])
    }
    console.log(joNevek)
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
            arNovekvo(joArak, "asc")
        } else if (opciok.value == 1) {
            arNovekvo(joArak, "desc")
        } else if (opciok.value == 2) {
            abcNovekvo(joNevek)
        } else {
            abcCsokkeno(joNevek)
        }
    })
}







function main() {
    akcio()
    dropdown()
}

main()

