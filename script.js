window.addEventListener("DOMContentLoaded", () => {

    const selectedObject = Math.floor(Math.random() * 4)

    const obj = [
        {name: 'tableau', price: 500},
        {name: 'tabouret', price: 100},
        {name: 'lit', price: 1000},
        {name: 'meuble antique', price: 2000}
    ]

    const prixAGuess = obj[selectedObject].price;

    const inputBox = document.getElementById("prix")
    const divProduit = document.getElementById("produit")
    const divResult = document.getElementById("result")
    const btnValide = document.getElementById("verif")

    const buttonPhrases = [
        "peut-être ?", "Laurent ?", "je pense ?", "j'imagine ?", "j'espère ?", ", non ?", "alors ?"
    ]

    function HigherOrLower(price) {
        // console.log("prix:", price)
        console.log(prixAGuess > price)
        if (prixAGuess > price) {
            divResult.innerHTML = "C'est plus" // true si supérieur
        } else if (prixAGuess < price) {
            divResult.innerHTML = "C'est moins" // false si inférieur
        } else if (prixAGuess == price) {
            divResult.innerHTML = "Oui oui oui, c'est gagné !" // egal si égal
            btnValide.disabled = "true";
        }
    }

    function init() {
        divProduit.innerHTML = "Essayons de deviner le prix de ce charmant "
        divProduit.innerHTML += obj[selectedObject].name
        divProduit.innerHTML += " !"
        btnValide.innerHTML = buttonPhrases[Math.floor(Math.random() * buttonPhrases.length)]
    }

    function Guess() {
        let price = inputBox.value
        UpdateColorInput(price)
        HigherOrLower(price)
    }

    function UpdateColorInput(price) {
        let decalage = Math.abs(1 - Math.abs(price / prixAGuess))
        console.log("decalage:", decalage)
        let couleur
        switch (true) {
            case decalage < 0.05:
                couleur = "green"
                break
            case decalage < 0.1:
                couleur = "lightgreen"
                break
            case decalage < 0.25:
                couleur = "yellow"
                break
            case decalage < 0.5:
                couleur = "orange"
                break
            default:
                couleur = "red"
                break
        }
        inputBox.style.borderColor = couleur
        btnValide.innerHTML = buttonPhrases[Math.floor(Math.random() * buttonPhrases.length)]
    }

    function enterGuess() {
        inputBox.classList.add("animationZoom")
        setTimeout(() => {
            inputBox.classList.remove("animationZoom")
        }, 1000)
        Guess()
        inputBox.placeholder = inputBox.value
        inputBox.value = ""
    }

    init()

    btnValide.addEventListener("click", () => { enterGuess() })

    inputBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") enterGuess()
    })
})