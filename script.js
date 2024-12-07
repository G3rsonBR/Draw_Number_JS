function getDrawNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawANumber() {
  const minValue = document.querySelector("#range_1").value
  const maxValue = document.querySelector("#range_2").value
  const showDrawNumber = document.querySelector("#number_draw")
  
  if(minValue == maxValue) {
    return alert("Opa, você digitou valores iguais!")
  }
  
  const numberDraw = getDrawNumber(minValue, maxValue)

  showDrawNumber.innerText = numberDraw
}