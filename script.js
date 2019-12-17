"use strict"

let ElArticle = $('#mainArticle');
let mainNav = $('#mainNav');

mainNav.css('background-image', 'url(fireBackground,gif)')
mainNav.css('background-size', '100% 100%');
//$('input').css('width',((input.getAttribute('placeholder').length + 1) * 8) + 'px');
ElArticle.on('click', 'button',isRandom);

  function isRandom() {
    let seed = Math.random() * 1000 + 1;
    if ($('#userSin').val() === '') {

      //alert("WARNING: NOT CONFESSING YOUR SINS DOES NOT MEAN YOU WON'T BE JUDGED");

    } else {

      seed = $('#userSin').val().split('')
      .map(x=>x.charCodeAt(0))
      .reduce((a,b)=>a+b);
    }
    let x = ((Math.cos(seed) * 1000)/Math.sin(seed)) * seed * ($("#userSin").val().length + 1);
    x = Math.floor(x);
    if (x < 0) {
    x *= -1;
    }
    if (x < 100) {
      x *=10;
    }
    if (x < 10) {
      x *=100;
    }

    x = Math.trunc(x);

    console.log(x);
    setSentence(x);
}

function setSentence(x) {

    let numArray = [];
    let tempX = String(x);
    let i = 0;

    for (i = 0; i < tempX.length; i++){
    //console.log("I ran");

      numArray.push(tempX[i] * 1);
      console.log(numArray[i]);
    }
    if (tempX.length > 3) {
      numArray[0] = 0;
      for (i = 0; i < tempX.length - 3; i++) {
        numArray[0] += (tempX[i] + tempX[i + 1]) * 1;
      }

    }
    //x = Math.trunc(x);
    console.log("Sentence Num:" + x);
    /*
    if (tempX.length > 3) {
      for (i = 0; i < tempX.length - 3; i++) {
        numArray[0](tempX[i] + tempX[i + 1]);
      }
      genPunishment(numArray[0], numArray[2], numArray[3]);
    }
    */
    while (numArray[0] > 20) {
      numArray[0] -= 20;
      //numArray[0] = Math.trunc(numArray[0]);
    }
    genPunishment(numArray[0], numArray[1], numArray[2]);
}

function genPunishment(first, second, third) {
  console.log(" Num1: " + first + " Num2: " + second + " Num3: " + third);
  let verb = [" read awful poetry ", " be stared at awkwardly ", " be subjected to easily the worst mongolian throat singing you've ever heard ", " be forced to watch someone perform a task poorly that you could easily help them with, but they are unwilling to accept help ", " be told three answers to mankinds greatest mysteries, but you are then told that two of them are lies ", " be given icecream, but it is pistachio and has been in the freezer for too long ", " be forced to give a public speech while the audience are all imagining you in your underwear ", " be trapped in a room with hundreds of film critics all criticizing your favorite movie in different ways ", " be forced to watch your worst enemy win the lottery ", " be forced to chew all the bubble gum in a gumball machine and they are all flavorless "," clean all outhouses you've ever been in with a toothbrush "," clean the litter boxes of tigers with irritable bowels "," take a test in a subject you've never heard of in old english and get 100% "," help " + (first + second) + " old ladies across the street while they hit you with their walking canes "," read a fanfiction of a spanish soap opera written by a 13 year old "," live in a snow-globe where the music box never stops "," fight Yoda and Darth Vader at the same time "," be tickled but you must not laugh "," potty train Cerberus ", " serve jury duty "];
  //console.log("Verb is " + verb.length);

  let sentenceLength = [" a quadrillion years ", " as long as I find that entertaining ", " I don't know maybe a day or two ", " a really really long time, like a SUPER-DUPER LONG TIME ", " as long as it takes for all the paint in existence to dry ", " " + (first + third) + " years or whenever the mole-people finally rise up ", " until humans meet aliens ", " as long as it takes for you to make the best of your situation ", " as long as they continue to make Simpsons episodes ", "ever "];

  let location = [" underwater and upside down", " in a volcano", " at your birthday party when you were 8", " next to a polar bear at the north pole", " at a circus with clown makeup on", " in the middle of a dodgeball game and the balls are made of metal", " you are in space, but you forgot your spacesuit", " you are inside a Quentin Tarintino movie and you just made Samuel L Jackson angry", " spinning way too fast", " Garfield watches"];

  let finalSentence = "You will" + verb[first - 1] + "while" + location[third] + ". For" + sentenceLength[second];
  console.log(finalSentence);
  let y = document.querySelector('#allSins');
    console.log('We shall check if you have children');

  if (y.firstElementChild == null)
  {
    console.log('you got no children');
    $('#allSins').append("<th id = 'allSins'>YOUR PUNISHMENT</th>");
  }

  $('#sinTable').append("<tr><td id = 'oneSin'>" + finalSentence + "</td></tr>");
}

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
}, false);

var autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};