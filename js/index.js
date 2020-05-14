const board = () => `
<div class="board m-4 row">
  <div class="position border col-4 p-3"></div>
  <div class="position border col-4 p-3"></div>
  <div class="position border col-4 p-3"></div>
  <div class="position border col-4 p-3">
    ${circle()}
  </div>

  <div class="position border col-4 p-3">
  ${plus()}
  </div>
  <div class="position border col-4 p-3"></div>
  <div class="position border col-4 p-3"></div>

  <div class="position border col-4 p-3"></div>
  <div class="position border col-4 p-3"></div>
</div>
`
const circle = () => `
  <div class="circle"></div>
`;

const plus = () => `
  <div class="plus d-flex justify-content-center align-items-center">
    <div class="h"></div>
    <div class="v"></div>
  </div>
`


document.querySelector('#start').addEventListener('click', function(){
  this.parentElement.removeChild(this);

  document.querySelector('.game').insertAdjacentHTML('afterbegin', board());
});