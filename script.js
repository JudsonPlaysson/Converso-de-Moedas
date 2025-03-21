const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-currency")
const currencyValor = document.querySelector(".selectValor")

function cliquei() {
    const input = document.querySelector(".input-currency").value

    const conversorDolar = document.querySelector(".para4")
    const valorReal = document.querySelector(".para2")
    const valorDolar = 5.2
    const valorEuro = 6.2
    const valorLibra = 7.32
    const valorBitcoin = 85.773

    valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

    if (selectCurrency.value == "dolar") {
        conversorDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / valorDolar)
    }
    if (selectCurrency.value == "euro") {
        conversorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input / valorEuro)
    }
    if (selectCurrency.value == 'libra') {
        conversorDolar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input / valorLibra)
    }
    if (selectCurrency.value == "bitcoin") {
        conversorDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: 'BTC'
        }).format(input / valorBitcoin)
    }
    if (selectCurrency.value == 'brazil') {
        conversorDolar.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(input)
    }

}
function changeCurrency() {
    const currencyName = document.querySelector('.para3')
    const currencyImg = document.querySelector('.eua')

    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (selectCurrency.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png"
    }

    if (selectCurrency.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    if (selectCurrency.value == "brazil") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/brasil 2.png"
    }


    cliquei()
}

selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", cliquei)