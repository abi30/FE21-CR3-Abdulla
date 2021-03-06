

// ____________________________

/*(20 points) Create the function calculateInvoice in Javascript that returns the invoice for one customer (how much they spent). The parameters of the function should be starterPrice, maindishPrice, dessertPrice and beveragePrice. The function will return the sum of these four parameters.*/
// arow function




let calculateInvoice=(starterPrice, maindishPrice, dessertPrice,beveragePrice)=>{
return (starterPrice + maindishPrice + dessertPrice + beveragePrice);
}
//  i have inserted the 4  value  parameters and then i got the result .
console.log(`the customer has spent ${calculateInvoice(32,12,54,12)} Euro total.`);



// ____________________________


 /*(10 points) Use the prices on your menu to create four variables that you will pass to the function calculateInvoice as arguments. Print the result on the console.*/


 let soup = 5;
 let main_dish=15;
 let ice=3;
 let cola=2;



 console.log(`I have spent ${calculateInvoice(soup,main_dish,ice,cola)} Euro total in today.`);
// ____________________________
/*(10 points) Create at least 3 different combinations of different dishes on your menu to calculate the invoice and print it on the console. */






// first combination
let beef_soup= 3.1;
let schnitzl= 7.2;
let apple_strudel=5;
let pepsi =1.5;

console.log(`before without discount first guy has spent ${calculateInvoice(beef_soup,schnitzl,apple_strudel,pepsi)} Euro total in today.`);

// second combination
let semolina_dumplings =2;
let spring_asparagus =10;
let Cheese_pancakes =4;
let fanta = 1.4;

console.log(`before without discount second guy has spent ${calculateInvoice(semolina_dumplings,spring_asparagus,Cheese_pancakes,fanta)} Euro total in today.`);


// third combination
let crepe_slivers= 2.5;
let austrian_goulash= 12;
let sacher_Cake=6.5;
let redbull= 2.2;
console.log(`before without discount third guy has spent ${calculateInvoice(crepe_slivers,austrian_goulash,sacher_Cake,redbull)} Euro total in today.`);








// -----------------------Bonus Points:-----------------------


/*(10 points) Create a function studentInvoice that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice. This discount applies to the dishes but NOT the beverages. Print 3 examples of studentInvoice on the console.*/ 

 const studentInvoice=(starterPrice, maindishPrice, dessertPrice,beveragePrice)=>{
 let discont=(starterPrice + maindishPrice + dessertPrice )*0.1;
 let result=((starterPrice + maindishPrice + dessertPrice + beveragePrice)-discont).toFixed(2);
return result;
    
};

console.log(`the Student has spent ${studentInvoice(32,12,54,12)} Euro total and he/she also got the Discount from Abdulla's kitchen.`);

//  3 examples of studentInvoice on the console.

//------------------ Number 1 Example-----------------------


let  st_beef_soup= 3.1;
let  st_schnitzl= 7.2;
let  st_apple_strudel=5;
let  st_pepsi =1.5;

console.log(`after with discount the Student has spent ${studentInvoice( st_beef_soup, st_schnitzl, st_apple_strudel, st_pepsi)} Euro total and he/she also got the Discount from Abdulla's kitchen.`);

//------------------ Number 2 Example-----------------------

let  st_semolina_dumplings =2;
let  st_spring_asparagus =10;
let  st_Cheese_pancakes =4;
let  st_fanta = 1.4;

console.log(`after with discount the Student has spent ${studentInvoice( st_semolina_dumplings, st_spring_asparagus, st_Cheese_pancakes, st_fanta)} Euro total and he/she also got the Discount from Abdulla's kitchen.`);


//------------------ Number 3 Example-----------------------

let  st_crepe_slivers= 2.5;
let  st_austrian_goulash= 12;
let  st_sacher_Cake=6.5;
let  st_redbull= 2.2;
console.log(`after with discount the Student has spent ${studentInvoice( st_crepe_slivers, st_austrian_goulash, st_sacher_Cake, st_redbull)} Euro total and he/she also got the Discount from Abdulla's kitchen.`);




// ###############---------al done-----------############################### 


// i have also done another 10 bonus Point as well
