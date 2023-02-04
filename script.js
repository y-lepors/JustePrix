window.addEventListener("DOMContentLoaded", () => {

    const selectedObject = Math.floor(Math.random() * 4)

    const obj = [
        {name: 'tableau', price: 500},
        {name: 'tabouret', price: 100},
        {name: 'lit', price: 1000},
        {name: 'meuble antique', price: 2000},
        {name: 'humain', price: 1}
    ]

    const prixAGuess = obj[selectedObject].price;

    const inputBox = document.getElementById("prix")
    const divProduit = document.getElementById("produit")
    const divResult = document.getElementById("result")
    const btnValide = document.getElementById("verif")

    function HigherOrLower(price) {
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
        divProduit.innerHTML = "Essayons de deviner le prix de ce charmant " + obj[selectedObject].name + " !"
        // for(let i = 0; i < obj.length; i++) {
        //     let div = document.createElement("div");
        //     div.innerHTML = obj[i].name;
        //     document.getElementById("roue").appendChild(div);
        // }
    }

    function Guess() {
        HigherOrLower(inputBox.value)
    }

    function enterGuess() {
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