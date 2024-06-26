let score=JSON.parse(localStorage.getItem('score')) || {
  ties:0,
  losses:0,
  wins:0
};
updateScoreElement();

/*
if (!score) {
  score={
  ties:0,
  losses:0,
  wins:0
  }
  
}
*/
            
  function playgame(playerMove){
  const computerMove=pickComputerMove();
  let result ='';
    if (playerMove==='scissors') {

     if (computerMove ==='scissors') {
         result='Tie.';
      }
     else if (computerMove ==='rock'){
         result='You lose.';
     }
     else if (computerMove ==='paper'){
         result='You win.';
     }  
     
    }
    else if(playerMove==='paper'){
      if (computerMove==='paper') {
        result='Tie.';  
      }
      else if(computerMove==='scissors'){
        result='You lose.';
      }
      else if(computerMove==='rock'){
        result='You win.';
      }

    }
    else if(playerMove==='rock'){
      if (computerMove==='paper') {
        result='You lose.';  
      }
      else if(computerMove==='scissors'){
        result='You win.';
      }
      else if(computerMove==='rock'){
        result='Tie.';
      }

    }
    if (result==='You lose.') {
      score.losses+=1;
          
    } else if (result==='You win.') {
      score.wins+=1;
      
    }
    else if (result==='Tie.') {
      score.ties+=1;
      
    }
    localStorage.setItem('score',JSON.stringify(score));


    updateScoreElement();

  
    document.querySelector('.js-result')
    .innerHTML= result;
    document.querySelector('.js-moves')
    .innerHTML= `You <img src="rock-paper-images/${playerMove}-emoji.png" class="move-icon"> <img
src="rock-paper-images/${computerMove}-emoji.png" class="move-icon"> Computer`;

  }
  

  function updateScoreElement() {

    document.querySelector('.js-score')
   .innerHTML= `wins=${score.wins},losses=${score.losses},  ties=${score.ties}`;

  }
   

  
        

  function pickComputerMove(){
  let computerMove='';
  const randomNumber= Math.random();

  if (randomNumber >=0   && randomNumber < 1/3)
  {
    computerMove='rock';
  }
  else if (randomNumber>=1/3  && randomNumber<2/3) {
    computerMove='paper';
  }
  else if(randomNumber>=2/3  &&  randomNumber <1) 
  {
    computerMove='scissors';

  }
  return computerMove ;
  }

