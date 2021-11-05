window.onload = function() {
  for (var i = 0; i < 9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>'
  }

  let hod = 0;

  document.getElementById('game').onclick = function
  (event) {
    if (event.target.className == "block") {
      if (hod % 2 == 0) {
        event.target.innerHTML = 'x';
      } else {
        event.target.innerHTML = 'o';
      }
      hod++;

      checkWinner();
  }
}


function checkWinner() {
  let allBlock = 
  document.getElementsByClassName('block')
  if (allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x' && allBlock[2].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[5].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x' && allBlock[8].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x' && allBlock[6].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[7].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x' && allBlock[8].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[8].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && allBlock[6].innerHTML == 'x') alert("Победили крестики");
  if (allBlock[0].innerHTML == 'o' && allBlock[1].innerHTML == 'o' && allBlock[2].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[3].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[5].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[6].innerHTML == 'o' && allBlock[7].innerHTML == 'o' && allBlock[8].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[0].innerHTML == 'o' && allBlock[3].innerHTML == 'o' && allBlock[6].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[1].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[7].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[2].innerHTML == 'o' && allBlock[5].innerHTML == 'o' && allBlock[8].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[0].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[8].innerHTML == 'o') alert("Победили нолики");
  if (allBlock[2].innerHTML == 'o' && allBlock[4].innerHTML == 'o' && allBlock[6].innerHTML == 'o') alert("Победили нолики");
}
}
