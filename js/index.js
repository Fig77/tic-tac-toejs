const board = (name1, name2) => `
<div class="board m-4 row">
  <div class="position border col-4 p-3" data-id="1"></div>
  <div class="position border col-4 p-3" data-id="2"></div>
  <div class="position border col-4 p-3" data-id="3"></div>
  <div class="position border col-4 p-3" data-id="4"></div>

  <div class="position border col-4 p-3" data-id="5"></div>
  <div class="position border col-4 p-3" data-id="6"></div>
  <div class="position border col-4 p-3" data-id="7"></div>

  <div class="position border col-4 p-3" data-id="8"></div>
  <div class="position border col-4 p-3" data-id="9"></div>
</div>
<div class="game-info m-2 d-flex flex-column align-items-center">
  <div class='turn'>
    <p class="mb-0 turn-message">${gameFlow.getTurn() === 1 ? `${name1} X turn` : `${name2} O turn`}</p>
  </div>
  <p class="mb-0">Game Score</p>
  <div class='d-flex justify-content-center game-score'>
    <div class="m-2 d-flex flex-column align-items-center score1">
      <p>${name1}</p>
      <p>${gameFlow.getScore()[0]}</p>
    </div>
    <div class="m-2 d-flex flex-column align-items-center score2">
      <p>${name2}</p>
      <p>${gameFlow.getScore()[1]}</p>
    </div>
  </div>
</div>
`

const updateScore = (name1, name2) => {
  document.querySelector('.game-score').removeChild(document.querySelector('.score1'));
  document.querySelector('.game-score').removeChild(document.querySelector('.score2'));

  document.querySelector('.game-score').insertAdjacentHTML('afterbegin', `
    <div class="m-2 d-flex flex-column align-items-center score1">
      <p>${name1}</p>
      <p>${gameFlow.getScore()[0]}</p>
    </div>
    <div class="m-2 d-flex flex-column align-items-center score2">
      <p>${name2}</p>
      <p>${gameFlow.getScore()[1]}</p>
    </div>
  `);
}

const showTurn = (name1, name2) => {
  document.querySelector('.turn').removeChild(document.querySelector('.turn-message'));
  document.querySelector('.turn').insertAdjacentHTML('afterbegin', `<p class="mb-0 turn-message">${gameFlow.getTurn() === 1 ? `${name1} X turn` : `${name2} O turn`}</p>`);
}

const circle = () => `
  <div class="move circle"></div>
`;

const plus = () => `
  <div class="move plus d-flex justify-content-center align-items-center">
    <div class="h"></div>
    <div class="v"></div>
  </div>
`;

const message = (text) => `
  <div class="alert alert-info mt-3" role="alert">
    ${text}
  </div>
`;

const options = () => `
  <div class="options d-flex justify-content-center p-4">
    <div class="mt-4">
      <button id="play-again" class="btn-primary">Play Again</button>
    </div>
  </div>
`

const drawMessage = (text) =>  document.querySelector('.message').insertAdjacentHTML('afterbegin', message(text));

const clearMessage = () => {
  if(document.querySelector('.alert')){
    document.querySelector('.alert').parentElement.removeChild(document.querySelector('.alert'));
  }
}

const clearBoard = () => {
  Array.from(document.querySelectorAll('.position'))
  .map(el =>{ 
    if(el.querySelector('.move'))
      el.removeChild(el.querySelector('.move'));
  });
}

document.querySelector('#start').addEventListener('click', function(e){
  e.preventDefault();
  clearMessage();

  let player1 = document.querySelector('#player-1').value;
  let player2 = document.querySelector('#player-2').value;

  if(player1.trim() && player2.trim()){
    document.querySelector('#form-start').parentElement.removeChild(document.querySelector('#form-start'));

    document.querySelector('.game').insertAdjacentHTML('afterbegin', board(player1, player2));

    Array.from(document.querySelectorAll('.position'))
      .map(el => el.addEventListener('click', function(){
        clearMessage();
        let position = parseInt(this.dataset.id);
        let state = gameFlow.game(position);
        console.log(state);
        if( state === false){
          drawMessage('Invalid Choice, choose a position that is empty.');
        }
        else if( state != -1){
          if(gameFlow.getTurn() == 4) {
            this.insertAdjacentHTML('afterbegin', circle());
          }
          else if(gameFlow.getTurn() == 1) {
            this.insertAdjacentHTML('afterbegin', plus());
          }
          updateScore(player1, player2);
          if(state === 0){
            drawMessage('It is a tie.');
          }
          else if(state === 1){
            drawMessage(`${player1} is the winner, congrats`);
          }
          else if(state === 2){
            drawMessage(`${player2} is the winner, congrats`);
          }

          document.querySelector('.container').insertAdjacentHTML('afterbegin', options());
          

        }
        else {
          if(gameFlow.getTurn() == 1) {
            this.insertAdjacentHTML('afterbegin', circle());
          }
          else if(gameFlow.getTurn() == 4) {
            this.insertAdjacentHTML('afterbegin', plus());
          }
          showTurn(player1, player2);
        }
    }));
  }
  else{
    document.querySelector('.message').insertAdjacentHTML('afterbegin', message('The name of players is required'));
  }
});