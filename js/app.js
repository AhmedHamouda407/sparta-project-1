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
  var wordarray = ['march', 'march', 'march'];
  var randomword = wordarray[Math.floor(Math.random() * wordarray.length)]
  var guessarray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var randomstoredword = [];
  randomstoredword.push(randomword)
  var randomswordletters = randomword.split("")
  var randomlettersstored= [];
  randomlettersstored.push(randomswordletters)

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
//   function userinput() {
//     var input = document.getElementById('letter').value;
//     console.log(input);
//
// console.log('working');
// if (randomword[0]==='j' ){//&&randomword[0]=user input)
//   console.log('true')
//   document.getElementById('list').style.color = 'red';//and append the first child of the list to change to red
//   document.getElementById("list").children[0].style.color = 'red';
//
// }if (randomword[1]==='a' && randomword[4]==='a'){
//   console.log('true')
//   document.getElementById('list').style.color = 'red';//and append the first child of the list to change to red
//   document.getElementById("list").children[1].style.color = 'red';
//   document.getElementById("list").children[4].style.color = 'red';
//
// }
function changecolor (){
  if (randomword[0]==='j' ){//&&randomword[0]=user input)
    console.log('true')
    document.getElementById('list').style.color = 'red';//and append the first child of the list to change to red
    document.getElementById("list").children[0].style.color = 'red';

  }if (randomword[1]==='a' && randomword[4]==='a'){
    console.log('true')
    document.getElementById('list').style.color = 'red';//and append the first child of the list to change to red
    document.getElementById("list").children[1].style.color = 'red';
    document.getElementById("list").children[4].style.color = 'red';

  }

}

// changecolor();

      // document.getElementById("guess").addEventListener("click", function(){
      //     console.log('test');
      //
      // });
      document.getElementById("hangman").addEventListener("submit", function(e){
        e.preventDefault();
        for(let i=0; i<randomlettersstored.length; i++){
          let value = document.getElementById("letter").value;
          console.log("letter value:", value)
          if(randomlettersstored[i].includes(value)){
            console.log("yaaay boiii");
            let colourKid = randomlettersstored[i].indexOf(value);
            console.log(colourKid)
            document.getElementById("list").children[colourKid].style.color = 'red';
          } else {
            console.log("awwww")
          }
        }


      });
      document.getElementById("restart").addEventListener("click", function(e){
          console.log('restart');

      });

})
