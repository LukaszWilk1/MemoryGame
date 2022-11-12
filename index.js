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
const shuffle = () => {
  index = Math.floor(Math.random() * pictures.length);
  let value = pictures[index];
  pictures.splice(index, 1);
  return value;
}
const reverse = card => {
  card.classList.add(cards[cards.map(object => object.card).indexOf(card)].value);
  card.classList.add("unclicable");
}
for (let i = 0; i < 16; i++) {
  cards[i].value = shuffle();                              //callback to shuffle function
  cards[i].card=document.getElementsByTagName("td")[i];
  document.getElementsByTagName("td")[i].addEventListener("click", (e) => {
    turnedCards++;
    if(turnedCards==2){
      for(let i=0; i<cards.length; i++){
        cards[i].card.classList.add("unclicable");
      }
      setTimeout(()=>{
        for(let i=0; i<cards.length; i++){
          cards[i].card.classList = "";
          turnedCards=0;
        }
      }, 750);
    }
    console.log(firstCard, secondCard);
    e.target.classList.add(e.target.getAttribute("value"));                     //showing card on click by passing value element to class
    reverse(e.target);
  })
}
console.log(cards);
