// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

var items = document.getElementsByClassName("items");
var price = 0;
var displayPrice = document.querySelector(".price-details");

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");

  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");

  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");

  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");

  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  if (state.Patty) {
    document.querySelector(".btn-patty").classList.add("active");
  } else {
    document.querySelector(".btn-patty").classList.remove("active");
  }

  if (state.Cheese) {
    document.querySelector(".btn-cheese").classList.add("active");
  } else {
    document.querySelector(".btn-cheese").classList.remove("active");
  }

  if (state.Tomatoes) {
    document.querySelector(".btn-tomatoes").classList.add("active");
  } else {
    document.querySelector(".btn-tomatoes").classList.remove("active");
  }

  if (state.Lettuce) {
    document.querySelector(".btn-lettuce").classList.add("active");
  } else {
    document.querySelector(".btn-lettuce").classList.remove("active");
  }

  if (state.Onions) {
    document.querySelector(".btn-onions").classList.add("active");
  } else {
    document.querySelector(".btn-onions").classList.remove("active");
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  // const ingredientKeys = Object.keys(state);

  // for (let i = 0; i < ingredientKeys.length; i++) {
  //   const ingredient = ingredientKeys[i];

  //   if (state[ingredient]) {
  //     items[i].innerHTML = ingredient;
  //   } else {
  //     items[i].innerHTML = "";
  //   }
  // }
  if(state.Patty)
  {
    items[0].innerHTML="Patty"
  }
  else
  {
    items[0].innerHTML="";
  }

  if(state.Onions)
  {
    items[1].innerHTML="Onions"
  }
  else
  {
    items[1].innerHTML="";
  }

  if(state.Lettuce)
  {
    items[2].innerHTML="Lettuce"
  }
  else
  {
    items[2].innerHTML="";
  }

  if(state.Tomatoes)
  {
    items[3].innerHTML="Tomatoes"
  }
  else
  {
    items[3].innerHTML="";
  }

  if(state.Cheese)
  {
    items[4].innerHTML="Cheese"
  }
  else
  {
    items[4].innerHTML="";
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  price = wholeWheatBun;

  if(state.Cheese)
  {
    price += ingredients.Cheese
  }

  if(state.Patty)
  {
    price += ingredients.Patty
  }

  if(state.Onions)
  {
    price += ingredients.Onions
  }

  if(state.Lettuce)
  {
    price += ingredients.Lettuce
  }

  if(state.Tomatoes)
  {
    price += ingredients.Tomatoes
  }

  displayPrice.innerHTML = `INR ${price}`;

  //   price = wholeWheatBun;
  
  //   for (let ingredient in state) {
  //     if (state[ingredient]) {
  //       price += ingredients[ingredient];
  //     }
  //   }
  
  //   displayPrice.innerHTML = `INR ${price}`;
}
