var count  = 2;
var countelement = document.querySelector("#count");

function add1(){
    count++;
    countelement.innerText = count + " like(s) ";
    console.log(count);
}
add1()