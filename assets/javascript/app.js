//Starts game when the start button is clicked
$('#start').on('click', function() {
  game.start();
});

//Function to endthe came when the done button is clicked
$(document).on('click', '#end', function() {
  game.done();
});

//Array of objects to hold all the questions, answer and correct answers
var questions = [
  {
    question: "1. What is the name of Han Solo's ship?",
    answer: ['The Falcon', 'Death Star', 'Star Cruiser', 'Millennium Falcon'],
    correctAnswer: 'Millennium Falcon'
  },
  {
    question: '2. Who is Darth Vader?',
    answer: [
      'Anaken Skywalker',
      'Chancellor Valorum',
      'Darth Maul',
      'The Sith'
    ],
    correctAnswer: 'Anaken Skywalker'
  },
  {
    question: "3. Who is Luke Skywalker and Leia's Mother?",
    answer: [
      'Aniken Skywalker',
      'Darth Vader',
      'Padme Amidala',
      'Queen Breha Organa'
    ],
    correctAnswer: 'Padme Amidala'
  },
  {
    question: '4. How many engines are on an X-wing fighter?',
    answer: ['2', '3', '4', '6'],
    correctAnswer: '4'
  },
  {
    question: '5. What plannet is home to Chebacca and the Wookies?',
    answer: ['Logray', 'Mandalor', 'Kashyyyk', 'Earth'],
    correctAnswer: 'Kashyyyk'
  },
  {
    question: '6. How many members are there in the Jedi Council?',
    answer: ['9', '10', '12', '14'],
    correctAnswer: '12'
  },
  {
    question: '7. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '8. What invsible power binds the galaxy together?',
    answer: ['Dark Matter', 'The Force', 'The Sith', 'The Jedi'],
    correctAnswer: 'The Force'
  },
  {
    question:
      '9. What animal did the visulaeffects crew stydy when designing the Imperial Walkers?',
    answer: ['Elephant', 'Zebra', 'Lion', 'Gorilla'],
    correctAnswer: 'Elephant'
  },
  {
    question: '10. What substance powers the Jedi lightsabers?',
    answer: ['Diamonds', 'Ilum Crystals', 'Water', 'The Force'],
    correctAnswer: 'Ilum Crystals'
  }
];

//Game variables are declared andset in an object as well the the countdown time function which is used to countdown the counter.
var game = {
  correct: 0,
  incorrect: 0,
  counter: 100,
  countdown: function() {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      console.log('Time is up!');
      game.done();
    }
  },

  //start function exectued when the start button is clicked.

  start: function() {
    //Steps:
    //1- timer starts and is reduced by 1 second.
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend(
      '<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>'
    );
    //2- wrapper containing the start button is replaced with the questions.
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answer.length; j++) {
        $('#subwrapper').append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answer[j] +
            "'>" +
            questions[i].answer[j]
        );
      }
    }
    //3- Done button added at bottom of questions so that the quiz can be ended before timer expires if required
    $('#subwrapper').append('<br><button id="end">DONE</button>');
  },

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function() {
    clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html('<h2>All done!</h2>');
    $('#subwrapper').append('<h3>Correct Answers: ' + this.correct + '</h3>');
    $('#subwrapper').append(
      '<h3>Incorrect Answers: ' + this.incorrect + '</h3>'
    );
    $('#subwrapper').append(
      '<h3>Unanswered: ' +
        (questions.length - (this.incorrect + this.correct)) +
        '</h3>'
    );
  }
};
