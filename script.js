

/*
Author: Richard Siska
Date: 3/4/2019


*/

/*
<!-- <option> Pepperoni </option>
                                                  <option> Cheese </option>
                                                  <option> Pineapple </option>
                                                  <option> ham </option> -->


*/

//Sets number of pizzas a customer can order
var numPizzas = 10;

//Submit button
var subBtn = document.getElementById('submitButton');

//Create pizza objects
var cheese = {

    type: "Cheese",
    price: 10.00,
    id: "cheese"

};

var pineapple = {

    type: "Pineapple",
    price: 10.00,
    id: "pineapple"

};

var ham = {

    type: "Ham",
    price: 10.00,
    id: "ham"

}


var doubleCheese = {

    type: "Double Cheese",
    price: 10.00,
    id: "dCheese"

}

var chocolate = {

    type: "Chocolate",
    price: 10.00,
    id: "chocolate"

}

//Create an array of pizzas to be used 
var pizzaArray = [cheese, pineapple, ham, doubleCheese, chocolate];


//Create a sale obj
var sale = {
    name: document.getElementById('fullName'),
    numPizzas: 0,
    

}


console.log("You got it!");

//Onload event in order to load in pizza options

window.addEventListener("load", ()=>{

    //This will call the add items to populate the pizza options
    addItems();


    //We will manipulate items here because they dont exist in the dom
    //Until adfter everything has loaded in




});

//Onclick event listener
subBtn.addEventListener("click", ()=>{
    
    //Alert
    

    //Calculate sales
    totalSale();

});

//Adds item to options when addItems is called
function addItems(){
    
    //Get the select element
    pizzaDropDown = document.getElementById('pizzaOptions');

    numDropDown = document.getElementById('numberOptions');

    //Itterate through array and add corresponding options elements
    for (var i = 0; i < pizzaArray.length; i++ ){

        //Add elements into the select element
        pizzaDropDown.innerHTML += `<option id=${pizzaArray[i].id}> ${pizzaArray[i].type} </option>`;
       
    }

    //Adds number of pizzas the customer can order
    for (var i = 1; i < numPizzas+1; i++ ){
        

        //Add elements into the select element
        numDropDown.innerHTML += `<option id=${i}Pizzas> ${i} </option>`;
       
    }
    
}

//Pizza orders determins how many are being ordered
function totalSale(){

    console.log(sale.name);
}





