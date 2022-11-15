let Interval;
let turnedCards = 0;
let firstCard;
let secondCard;
let seconds = 00;
let minutes = 00;
let pairs = 0;
let index = 0;
let pictures = [
  "card-one",
  "card-one",
  "card-two",
  "card-two",
  "card-three",
  "card-three",
  "card-four",
  "card-four",
  "card-five",
  "card-five",
  "card-six",
  "card-six",
  "card-seven",
  "card-seven",
  "card-eight",
  "card-eight"
];
let cards = [
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
  {card: undefined, value:undefined},
];
/*const shuffle = arg => {
  index = Math.floor(Math.random() * pictures.length);                          //getting random number and asigning it to variable index
  arg.setAttribute("value", pictures[index]);                                   //setting value attribute of actual td element to one of classes from pictures list
  pictures.splice(index, 1);                                                    //removing already used element from pictures list
}*/

const game = e => {
  turnedCards++;
  if(turnedCards==2){
    for(let i=0; i<cards.length; i++){
      cards[i].card.classList.add("unclicable");
    }
    setTimeout(()=>{
      check();
    }, 750);
  }
  reverse(e.target);
}

const start = e => {
  console.log(pictures);
  document.getElementById("start").innerText="Start";
  for (let i = 0; i < 16; i++) {
    cards[i].value = shuffle();                              //callback to shuffle function
    cards[i].card=document.getElementsByTagName("td")[i];
    document.getElementsByTagName("td")[i].addEventListener("click", game);
    document.getElementById("start").style="visibility: hidden";
    document.getElementById("start").removeEventListener("click", start);
  }
}
document.getElementById("start").addEventListener("click", start);

const shuffle = () => {
  index = Math.floor(Math.random() * pictures.length);
  let value = pictures[index];
  pictures.splice(index, 1);
  return value;
}
const reverse = card => {
  card.classList.add(cards[cards.map(object => object.card).indexOf(card)].value);
  card.classList.add("unclicable");
  if(turnedCards==1) firstCard = cards[cards.map(object => object.card).indexOf(card)].value;
  else if(turnedCards==2) secondCard = cards[cards.map(object => object.card).indexOf(card)].value;
  console.log(firstCard, secondCard);
}

const reset = e => {
  turnedCards = 0;
  firstCard;
  secondCard;
  seconds = 00;
  minutes = 00;
  pairs = 0;
  index = 0;
  pictures = [
    "card-one",
    "card-one",
    "card-two",
    "card-two",
    "card-three",
    "card-three",
    "card-four",
    "card-four",
    "card-five",
    "card-five",
    "card-six",
    "card-six",
    "card-seven",
    "card-seven",
    "card-eight",
    "card-eight"
  ];
  for(let i=0;i<16;i++){
    cards[i].value = undefined;
    cards[i].card.classList="";
    cards[i].card=undefined;
    document.getElementsByTagName("td")[i].removeEventListener("click", game);
  }
  document.getElementById("start").innerText="Start";
  document.getElementById("start").removeEventListener("click", reset)
  document.getElementById("start").addEventListener("click", start);
}

const check = () => {
  if(turnedCards==2){
    for(let i=0; i<cards.length; i++){
      cards[i].card.classList.add("unclicable");
    }
    if(firstCard===secondCard){
      for(let i=0; i<cards.length;i++){
        if(cards[i].card.classList.contains("card-one")||cards[i].card.classList.contains("card-two")||cards[i].card.classList.contains("card-three")
        ||cards[i].card.classList.contains("card-four")||cards[i].card.classList.contains("card-five")||cards[i].card.classList.contains("card-six")
        ||cards[i].card.classList.contains("card-seven")||cards[i].card.classList.contains("card-eight")){
          cards[i].card.classList="";
          cards[i].card.classList.add("winner");
          cards[i].card.classList.add("unclicable");
        }
      }
      pairs++;
    }
    else{
      for(let i=0; i<cards.length; i++){
        if(cards[i].card.classList.contains("winner")) continue;
        cards[i].card.classList = "";
      }
    }
    for(let i=0; i<cards.length; i++){
      if(cards[i].card.classList.contains("winner")) continue;
      cards[i].card.classList = "";
    }
  }
  turnedCards=0;
  if(pairs===8){
    document.getElementById("start").innerText="Restart";
    document.getElementById("start").style="visibility: visible";
    document.getElementById("start").addEventListener("click", reset);
    console.log(cards);
  }
}

console.log(cards);
