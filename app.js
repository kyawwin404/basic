let par = document.querySelector('p');
par.addEventListener('click', addName);
function addName(){
 let name = prompt("Enter Your Name Here");
  par.textContent = 'Player 1: ' + name;
}