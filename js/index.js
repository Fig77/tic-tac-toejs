const board = () => `
<div class="board m-4 row">
  <div class="position border col-4 p-3" data-id="1"></div>
  <div class="position border col-4 p-3" data-id="2"></div>
  <div class="position border col-4 p-3" data-id="3"></div>
  <div class="position border col-4 p-3" data-id="4">
    ${circle()}
  </div>

  <div class="position border col-4 p-3" data-id="5">
  ${plus()}
  </div>
  <div class="position border col-4 p-3" data-id="6"></div>
  <div class="position border col-4 p-3" data-id="7"></div>

  <div class="position border col-4 p-3" data-id="8"></div>
  <div class="position border col-4 p-3" data-id="9"></div>
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
`;


document.querySelector('#start').addEventListener('click', function(){
  this.parentElement.removeChild(this);

  document.querySelector('.game').insertAdjacentHTML('afterbegin', board());

  Array.from(document.querySelectorAll('.position'))
    .map(el => el.addEventListener('click', function(){
      let position = parseInt(this.dataset.id);
      let state = gameFlow.game(position);
      if( state == false){
      }
      else {
        if(gameFlow.getTurn() == 1) {

          this.insertAdjacentHTML('afterbegin', circle());
        }
        else {
          this.insertAdjacentHTML('afterbegin', plus());
        }
      }
  }));

});