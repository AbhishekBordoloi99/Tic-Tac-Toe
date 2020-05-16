// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");


// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)

var b_1=document.querySelector('#one');
var b_2=document.querySelector('#two');
var b_3=document.querySelector('#three');
var b_4=document.querySelector('#four');
var b_5=document.querySelector('#five');
var b_6=document.querySelector('#six');
var b_7=document.querySelector('#seven');
var b_8=document.querySelector('#eight');
var b_9=document.querySelector('#nine');

b_1.addEventListener('click', function()
{
  if(b_1.textContent==='')
  {
    b_1.textContent='X'
  }
  else if (b_1.textContent==='X') {
    b_1.textContent='O'
  }
}
)

b_2.addEventListener('click', function()
{
  if(b_2.textContent==='')
  {
    b_2.textContent='X'
  }
  else if (b_2.textContent==='X') {
    b_2.textContent='O'
  }
}
)

b_3.addEventListener('click', function()
{
  if(b_3.textContent==='')
  {
    b_3.textContent='X'
  }
  else if (b_3.textContent==='X') {
    b_3.textContent='O'
  }
}
)

b_4.addEventListener('click', function()
{
  if(b_4.textContent==='')
  {
    b_4.textContent='X'
  }
  else if (b_4.textContent==='X') {
    b_4.textContent='O'
  }
}
)

b_5.addEventListener('click', function()
{
  if(b_5.textContent==='')
  {
    b_5.textContent='X'
  }
  else if (b_5.textContent==='X') {
    b_5.textContent='O'
  }
}
)

b_6.addEventListener('click', function()
{
  if(b_6.textContent==='')
  {
    b_6.textContent='X'
  }
  else if (b_6.textContent==='X') {
    b_6.textContent='O'
  }
}
)

b_7.addEventListener('click', function()
{
  if(b_7.textContent==='')
  {
    b_7.textContent='X'
  }
  else if (b_7.textContent==='X') {
    b_7.textContent='O'
  }
}
)

b_8.addEventListener('click', function()
{
  if(b_8.textContent==='')
  {
    b_8.textContent='X'
  }
  else if (b_8.textContent==='X') {
    b_8.textContent='O'
  }
}
)

b_9.addEventListener('click', function()
{
  if(b_9.textContent==='')
  {
    b_9.textContent='X'
  }
  else if (b_9.textContent==='X') {
    b_9.textContent='O'
  }
}
)
