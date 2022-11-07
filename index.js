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
const shuffle = arg => {
  index = Math.floor(Math.random() * pictures.length);                          //getting random number and asigning it to variable index
  arg.setAttribute("value", pictures[index]);                                   //setting value attribute of actual td element to one of classes from pictures list
  pictures.splice(index, 1);                                                    //removing already used element from pictures list
}
for (let i = 0; i < 16; i++) {
  shuffle(document.getElementsByTagName("td")[i]);                              //callback to shuffle function
  document.getElementsByTagName("td")[i].addEventListener("click", (e) => {
    e.target.classList.add(e.target.getAttribute("value"));                     //showing card on click by passing value element to class
  })
}
