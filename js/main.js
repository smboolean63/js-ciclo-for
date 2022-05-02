const list = document.querySelector(".list");

for( let i = 1; i <= 90; i++ ) {
    const element = document.createElement("li");

    element.classList.add("item");
    element.innerText = i;
    list.append(element);
}

// alla pressione della barra spaziatrice
document.addEventListener("keyup", 
    function(event) {
        if( event.code === 'Space') {
            // estraggo un numero = random fra 1 e 90
            const randomNumber = Math.floor(Math.random() * 90) + 1;
            console.log(randomNumber);
            const item = document.querySelector(`.list .item:nth-child(${randomNumber})`);
            if ( !item.classList.contains("item-active") ) {
                alert(`il numero estratto è ${randomNumber}`);
                item.classList.add("item-active");
            } else {
                alert("il numero è gia stato estratto");
            }
            // seleziono la casella corrispondente al numero estratto e gli aggiungo la classe item-active
        }
    }
);

