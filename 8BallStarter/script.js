var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function ask(){
    // console.log(document.querySelector("#question").value)
    // if (document.querySelector("#question").value =="");{
    //     document.querySelector("#answer").innerText ="Please ask me a question."; 
    // } else {
    document.querySelector("#image").setAttribute('src', 'ball.gif');
    setTimeout(replace, 1000);
    }
function replace(){
    document.querySelector("#image").setAttribute('src', 'ballStill.jpg')
    var random= Math.floor(Math.random()*lifesAnswers.length);
    document.querySelector("h2").innerText = lifesAnswers[random];
}