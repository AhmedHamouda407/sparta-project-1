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
  var wordarray = ['january', 'january', 'january'];
  var randomword = wordarray[Math.floor(Math.random() * wordarray.length)]
  var guessarray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  console.log(randomword);

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
if (randomword[0]==='j'){
  console.log('true')
  document.getElementById('list').style.color = 'red';//and append the first child of the list to change to red
  document.getElementById("list").firstChild.innerHTML

}



})
