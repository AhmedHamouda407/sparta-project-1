document.addEventListener('DOMContentLoaded', function(){
  //DEFINE Variables
  //words which can be guessed use array and mathrandom
  //letters which can be guessed need to use array
  //number of guessed letters-a constant value must be assigned
  //remaining number of guessed letters(lives)
  //guess button
  //pushing letters in correct position, letters which matched
  //win condition
  //lose condition

  // testing random words

  console.log('working')
  var wordarray = ['linux', 'ctf', 'ram', 'hack', 'virus'];
  var randomword = wordarray[Math.floor(Math.random() * wordarray.length)]
  var guessarray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var randomstoredword = [];
  randomstoredword.push(randomword)
  var randomswordletters = randomword.split("")
  var randomlettersstored= [];
  var score = 5
  document.getElementById("scoreCounter").innerHTML = score
  randomlettersstored.push(randomswordletters)


  var userinputstored=[];
  var userinput=document.getElementById("letter")
  userinputstored.push(userinput.value)
  console.log(userinputstored);


  console.log(randomstoredword);
  console.log(randomword);
  console.log(randomswordletters);
  console.log(randomlettersstored);

  // generate random word
  //determine number of characters in word
  console.log(randomword.length)

  const ul = document.getElementById('list')

  // apend to body
  // document.body.appendChild(ul);
  //add list items
  for (var i = 0; i < randomword.length; i++ ){
    const li=document.createElement('li');

    li.innerHTML= randomword[i];
    ul.appendChild(li);
  }
  //letter+output result, if correct, turn letter red
  let guessedWord = '';
  document.getElementById("hangman").addEventListener("submit", function(e){
    e.preventDefault();
    for(let i=0; i<randomlettersstored.length; i++){
      let value = document.getElementById("letter").value;
      console.log("letter value:", value)
      if(randomlettersstored[i].includes(value)){
        guessedWord += value;
        console.log('guessed word' + guessedWord);
        console.log("yaaay boiii");
        let colourKid = randomlettersstored[i].indexOf(value);
        console.log(colourKid)
        document.getElementById("list").children[colourKid].style.color = 'red';
        if (guessedWord === randomword) {
          console.log('winner');
          alert('well done, you win')
        }
      } if (!randomlettersstored[i].includes(value)) {
        alert('wrong letter, try again'),
        score--
        console.log("score", score)
        document.getElementById("scoreCounter").innerHTML = score
      } else {
        console.log("awwww")
      }
    }if (score===0){
      alert('unlucky, start another game')
    }
  });

  document.getElementById("restart").addEventListener("click", function(e){
    console.log('restart');
  });

  //win condition

})
