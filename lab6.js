// for loop -> davtalt
// ()-> nuhtsul bichne
// for(var i=ehleh_too; i<=tugsdul_too; i++/i--){
// davtah code
//}
for(var i=1;i<=10;i++){
    console.log(i+".Hello");
}
// i=1 -> 1<=10 -> true -> 1.Hello i++ 2
// i=2 -> 2<=10 -> true -> 1.Hello i++ 3
// ...
//i=11 -> 11<=10 +-> false -> stop
for(var i=10;i>=1;i--){
    console.log(i+".hi");
}
for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(i+".tegsh");
    }else{
        console.log(i+".sondgoi");
    }
}
var niilber=0;
var urjver =1;
for(var i=1;i<11;i++){
    niilber = niilber + i;
    console.log(niilber);
}
console.log(niilber)
for(var i=1;i<11;i++){
    urjver = urjver * i;
}
console.log(urjver)
for(var i=1;i<11;i++){
    urjver = 10 * i;
    console.log(i + "*" + "10" + "=" + urjver)
}


// factraal oloh project
var input = document.getElementsByTagName('input')[0];
var result = document.querySelector(".result");
var fact =1;
console.log(input);
console.log(result);
function calc(){
    var number = input.value;
    for(var i=1; i<=number;i++){
        fact=fact*i;
    }
    result.innerText = "Result:"+fact;
    fact=1;
}