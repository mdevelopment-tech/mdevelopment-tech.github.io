var today=new Date();
var hourNow=today.getHours();
var greetings;
if(hourNow>18){
    greetings='Good evening!';
}
else if(hourNow>12){
    greetings='Good afternoon!';
}
else if(hourNow>0){
    greetings='Good morning!';
}
else{
    greetings='Welcome!';
}
document.write('<h2 class="jav">'+greetings+'</h2>');