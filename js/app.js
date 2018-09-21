document.addEventListener('DOMContentLoaded', function(){



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




const ul = document.getElementById('list')


for (var i = 0; i < randomword.length; i++ ){
  const li=document.createElement('li');

  li.innerHTML= randomword[i];
  ul.appendChild(li);
}

let guessedWord = '';
document.getElementById("hangman").addEventListener("submit", function(e){
  e.preventDefault();
  for(let i=0; i<randomlettersstored.length; i++){
    let value = document.getElementById("letter").value;

    if(randomlettersstored[i].includes(value)){
      guessedWord += value;

      let colourKid = randomlettersstored[i].indexOf(value);

      document.getElementById("list").children[colourKid].style.color = 'red';
      if (guessedWord === randomword) {
        alert('well done, you win')
      }
    } if (!randomlettersstored[i].includes(value)) {
      alert('wrong letter, try again'),
      score--
      document.getElementById("scoreCounter").innerHTML = score
    } else {

    }
  }if (score===0){
    alert('unlucky, start another game')
  }
});

document.getElementById("restart").addEventListener("click", function(e){

});
})
