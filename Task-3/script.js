let input = document.getElementById("input");

console.log(input);



const btn1 =() => 
{
    input.value += "1";
}

const btn2 =() => 
{
    input.value += "2";
}

const btn3 =() => 
{
    input.value += "3";
}

const btn4 =() => 
{
    input.value += "4";
}

const btn5 =() => 
{
    input.value += "5";
}

const btn6 =() => 
{
    input.value += "6";
}

const btn7 =() => 
{
    input.value += "7";
}

const btn8 =() => 
{
    input.value += "8";
}

const btn9 =() => 
{
    input.value += "9";
}

const btn0 =() => 
{
    input.value += "0";
}

const btnclear =() => 
{
    input.value = "";
}

const btnDel =() => 
{
    input.value = input.value.slice(0,-1);
}

const btnEqual =() => 
{
    input.value = eval(input.value);
}

const btnDot =() => 
{
    input.value = ".";
}

const btn1sqrt =() => 
{
    input.value = Math.sqrt(input.value);
}

const btnPercent =() => 
{
    input.value = input.value/100;
}

const btnPlus =() => 
{
    input.value += "+";
}

const btnMinus =() => 
{
    input.value += "-";
}

const btnMultiply =() => 
{
    input.value += "*";
}

const btnDivide =() => 
{
    input.value += "/";
}












// regular function
// function start(){
//     console.log("hii");
// }
// start();








// //parameterized function
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);







// //return type function
// function mul(a,b)
// {

//     return a*b;
// }
// mul(10,20); //here you won't get any output because you are not printing the return value
// console.log(mul(10,20)); //now you will get the output because you are printing the return value





// //callback function
// function sub(a,b)
// {
//     console.log(a-b);
//     return a-b;
// }
// sub(mul(10,20),100); //here you are passing the return value of mul function as an argument to sub function.





// //arrow function
// const Hello = () => 
// {
//     console.log("hii");
// }
// const div = (a, b) => 
// {
//     console.log(a/b);
// }
// div(20,10);





// //ananymous function
// const sum = function(a,b,c)
// {
//     console.log(a+b+c);
// }   
// sum(10,20,30);//here you are assigning an anonymous function to a variable sum and then calling it with arguments 10,20,30.
