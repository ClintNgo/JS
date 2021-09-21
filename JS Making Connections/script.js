function edit(){
    var name = document.querySelector("#janename").value;
    document.querySelector("#janename").innerHTML = "Luan Ngo";
    console.log(name);
}

var circle = 2
var circle1 = 418

function add(){
    var div = document.querySelector("#todd")
    div.remove("#todd");
    var countelement = document.querySelector("#circle1");
    console.log(countelement);
    circle1++;
    countelement.innerText = circle1;
    console.log(circle1);
}


function subtract(){
    var div = document.querySelector("#todd")
    div.remove("#todd");
    var countelement = document.querySelector("#circle");
    console.log(countelement);
    circle--;
    countelement.innerText = circle;
    console.log(circle);
}

function add1(){
    var div = document.querySelector("#phil")
    div.remove("#phil");
    var countelement = document.querySelector("#circle1");
    console.log(countelement);
    circle1++;
    countelement.innerText = circle1;
    console.log(circle1);
}


function subtract1(){
    var div = document.querySelector("#phil")
    div.remove("#phil");
    var countelement = document.querySelector("#circle");
    console.log(countelement);
    circle--;
    countelement.innerText = circle;
    console.log(circle);
}
