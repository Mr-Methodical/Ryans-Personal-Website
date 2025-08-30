
document.addEventListener('DOMContentLoaded', function() {
    let incorrect = document.querySelectorAll('.incorrect');
    let correct = document.querySelector('.correct');
    for (each of incorrect) {
        each.addEventListener('click', function() {
            event.target.style.backgroundColor = 'red';
            document.getElementById("correctness").innerHTML = "Incorrect";
        });
    correct.addEventListener('click', function() {
        event.target.style.backgroundColor = 'green';
        document.getElementById("correctness").innerHTML = "Correct!";
    });

    let answer = document.querySelector('#answer');
    let button = document.querySelector('#button');
    button.addEventListener('click', function() {
        if (answer.value === "When's the Cave?")
        {
            document.getElementById("answer").style.backgroundColor = 'green';
            document.getElementById("textCorrect").innerHTML = "Correct!";
        }
        else
        {
            document.getElementById("answer").style.backgroundColor = 'red';
            document.getElementById("textCorrect").innerHTML = "Incorrect";
        }
    })
    }
});
