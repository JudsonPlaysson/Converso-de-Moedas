const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".select-currency")

function cliquei() {
    const input = document.querySelector(".input-currency").value

    const conversorDolar = document.querySelector(".para4")
    const valorReal = document.querySelector(".para2")
    const valorDolar = 5.2
    const valorEuro = 6.2

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

    cliquei()
}


selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", cliquei)