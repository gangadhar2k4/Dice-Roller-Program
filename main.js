
function RollDice(){
    let numberOfDice = document.getElementById("numberOfDice").value;
    const submitBtn = document.getElementById("submitBtn");
    const DiceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");

    let values = [];
    let images = [];

    numberOfDice = Number(numberOfDice);
    for(let i=0;i<numberOfDice;i++){
        let value = Math.floor(Math.random()*6)+1
        // console.log(value);
        values.push(value);
        images.push(`<img src="Dice Images/${value}.png">`)
    }
    DiceResult.textContent = `Dice: ${values.join(', ')}`;
    DiceImages.innerHTML = images.join('  ');

}