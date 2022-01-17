function ageInDays() {

    var years = document.getElementById('age').value;

    if (years == '' || years <= 0) {
        document.querySelector('#calculated_age').innerText = 'Please Enter Valid Age.'
    } else {
        var days = years * 365;
        console.log(days);
        document.getElementById('calculated_age').innerText = 'You are ' + days + ' days old.';
    }


}


document.getElementById('btn-reset-age').addEventListener('click', function() {
    document.getElementById('age').value = '';
    document.getElementById('calculated_age').innerText = '';
})

document.getElementById('age').addEventListener('keyup', function() {
    ageInDays();
})

document.getElementById('age').addEventListener('change', function() {
    ageInDays();
})


var cat_id = 0;
document.getElementById('btn-cat').addEventListener('click', function() {
    cat_id++;
    var image = document.createElement('img');
    var div = document.getElementById('generated_cat');
    image.src = "images/star-wars-cat-vs-dog.gif";
    image.id = cat_id;
    image.className = "imageclass";

    div.appendChild(image);
})

document.body.addEventListener('click', function(event) {
    if (event.target.className == 'imageclass') {
        document.getElementById(event.target.id).remove();

    };
});


document.getElementById('btn-reset-cat').addEventListener('click', function() {
    document.getElementById('generated_cat').innerHTML = "";
})

function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissor': 0, 'paper': 0.5, 'rock': 1 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
    }

    var humanScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [humanScore, computerScore];
}

function finalMessage([humanScore, computerScore]) {
    if (humanScore == 0) {
        return {
            'message': 'You Lost',
            'color': 'red'
        };
    } else if ((humanScore == 0.5)) {
        return {
            'message': 'You Tied',
            'color': 'yellow'
        };
    } else {
        return {
            'message': 'You Won',
            'color': 'green'
        };
    }
}

function rpsFrontEnd(human, bot, message) {
    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var playAgainDiv = document.createElement('form')

    humanDiv.innerHTML = "<img src = '" + imgDatabase[human] + "' height = 150 width = 150 style = 'box-shadow: 10px 20px 50px 30px green'>";
    botDiv.innerHTML = "<img src = '" + imgDatabase[bot] + "' height = 150 width = 150 style = 'box-shadow: 10px 20px 50px 30px red'>";
    messageDiv.innerHTML = "<h1 style= 'color: " + message['color'] + "; font-size: 40px; padding:30px;'>" + message['message'] + "</h1>";

    playAgainDiv.innerHTML = "<input type='submit' class='btn btn-danger' value='Play Again'>";

    document.getElementById('game-results').appendChild(playAgainDiv);
    document.getElementById('game-results').appendChild(humanDiv);
    document.getElementById('game-results').appendChild(messageDiv);
    document.getElementById('game-results').appendChild(botDiv);

}

var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function changeButtonColor(btn) {
    if (btn.value == 'red') {
        btnRed();

    } else if (btn.value == 'green') {
        btnGreen();
    } else if (btn.value == 'random') {
        btnRandom();
    } else if (btn.value == 'reset') {
        btnReset();
    }
}

function btnRed() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function btnGreen() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function btnReset() {
    for (let i = 0; i < all_buttons.length; i++) {

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function btnRandom() {

    var colorDB = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++) {

        let randColor = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(colorDB[randColor]);
    }
}