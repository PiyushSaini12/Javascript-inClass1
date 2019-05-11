console.log('working');

      var but = document.querySelector('#submitButton');
      var resetBut = document.querySelector('#resetButton');
      var price = Math.floor(Math.random() * 100) + 1;

      console.log(price);
      but.addEventListener('click', dosomething);
      
      resetBut.addEventListener('click',resetthegame);

      function resetthegame(){
        var input = document.querySelector('#guessField');
        input.value = "";
        var price = Math.floor(Math.random() * 100) + 1;
        console.log(price);
      }

      function dosomething(){
        var input = document.querySelector('#guessField');
        var lowOrHiMessage = document.querySelector('#lowOrHi');
    
      if(input.value > price){
        console.log('too high');
        lowOrHiMessage.textContent = 'too high'
      }
      else if(input.value < price){
        console.log('too low');
        lowOrHiMessage.textContent = 'too low'

      }
      else {
        console.log('you win');
        lowOrHiMessage.textContent = 'you win'

      }
    }
