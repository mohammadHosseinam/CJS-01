const userName = "sina";
console.log(typeof(userName));
const Birthday = 2002;
const sinaCurrentAge = 2020 - birthday;
const isMarried = true;
const x ; //undefind
const y = null;

//null example
const birthday = prompt("SINA KEI CHESH BE GAHAN GOSHOD...")
let sinaCurrentAgeina = null;
sinaCurrentAgeina = 2022 - birthday;
console.log(sinaCurrentAgeina);

// + - / * ** %
const secounds = 200;
const miniutes = 200 / 60; //3.333
const overSecounds = 200 % 60; //20

let a = "10";
let b = 10;
Boolean(a==b) //true
Boolean(a===b) //false
Boolean(a!=b) //false
Boolean(a!==b) //true

if (sinaCurrentAgeina < 18) {
    console.log("boro shir bokhor bozorg shi");
} else if(sinaCurrentAgeina < 50){
    console.log("salam amo inja chekar mikoni");
}else {
    console.log("ok bia to");
}

switch (sinaCurrentAgeina) {
    case 18:
        console.log("hijdah");
        break;
    case 19:
        console.log("nozdah");
        break;
    case 20:
        console.log("bist");
        break;
    
    default:
        console.log("eror");
        break;
}

// || &&
const Age = true;
const isM =  false;

if (Age && isM){
    console.log("good bacheh!");
}else{
    console.log("bad bacheh!");
}

if (Age || isM){
    console.log("good bacheh!");
}else{
    console.log("bad bacheh!");
}

// truthy or falsy
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
const UserName = prompt("USER NAME PLEASE");
if (UserName){
    console.log("good bacheh");
}

const num = num2 = num3 ="10";
console.log(typeof(num));
const num1 = Number("10");
console.log(typeof(num1));
const num2 = ParseInt("10");
console.log(typeof(num2));
const num3 = +"10";
console.log(typeof(num3));



const leftHandNumber = +prompt("left hand number:")
const operator = +prompt("operator:")
const rightHandNumber = prompt("right hand number:")
let result= 0;
switch (operator) {
    case "+":
        result = leftHandNumber + rightHandNumber
        break;
    case "-":
        result = leftHandNumber - rightHandNumber
        break;
    case "*":
        result = leftHandNumber * rightHandNumber
        break;
    case "/":
        result = leftHandNumber / rightHandNumber
        break;
    default:
        console.log("000");
        break;
}
console.log(result)

const NAME = "jafar";
const age = 50;
const loc = "shiraz"
const test = NAME +"+"+ age + "saleh ast!/n" + " dar" + loc + "zendegi mikonad";
const test2 =`${NAME} ${age} saleh ast!
dar ${loc} zendegi mikonad`
console.log(test);
console.log(test2);

function jafar(yechizhaiee , yekari) {
    //...
    console.log(mast ,yechizhaiee);
    console.log(yekari);
}

jafar("chips , ab albaloo ", "yesar be motory bezzan")
jafar("piaz", "tond bia")

function soghra(yechizi) {
    return yechizi
}
const salad = soghra(piaz) + "goje" + "khiar";
console.log(salad);

function kakayJafar(folan = "mowz") {
    console.log(folan);
}
kakayJafar("piaz") //piaz
kakayJafar() //mowz

function sum(a=0 , b=0) {
    console.log(a + b);
}
sum(10 , 20) //30
sum(30 , 20) //50
sum() //0


