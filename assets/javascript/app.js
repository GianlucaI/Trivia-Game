//test to check if html and java script are linked
// console.log('start button was clicked');
//removes start button when
// $('#subwrapper').remove();
//removes start button once pressed
//   $('#start').remove();
//   for (var i = 0; i < questions.length; i++) {
//     $('#subwrapper').append('<h2>' + questions[i].question + '<h2>');
//     for (var j = 0; j < questions[i].answer.length; j++) {
//       $('#subwrapper').append(
//         "<input type='radio' name='question-" +
//           i +
//           "' value='" +
//           questions[i].answer[j] +
//           "'>" +
//           questions[i].answer[j]
//       );
//     }
//   }
//   game.start();
// });

$('#start').on('click', function() {
  game.start();
});

$(document).on('click', '#end', function() {
  game.done();
});

var questions = [
  {
    question: '1. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '2. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '3. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '4. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '5. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '6. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '7. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '8. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '9. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  },
  {
    question: '9. Who is Darth Vader?',
    answer: ['Aniken Skywalker', 'Han Solo', 'Darth Maul', 'Asoku'],
    correctAnswer: 'Aniken Skywalker'
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 20,
  countdown: function() {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      console.log('Time is up!');
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend(
      '<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>'
    );
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
      $('#subwrapper').append('<h2>' + questions[i].question + '<h2>');
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
