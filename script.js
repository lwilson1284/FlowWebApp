function changePage(cardId, pageId) {
    var card = document.getElementById(cardId);
    var currentPage = card.querySelector('.page:not([style*="display: none"])');
    var nextPage = card.querySelector('#' + pageId);

    currentPage.style.display = 'none';
    nextPage.style.display = 'block';
}

const questions = [
  {
    question: "During which phase of the menstrual cycle does menstruation occur, and what hormonal changes are associated with it?",
    options: [
      "Rise in estrogen levels",
      "Drop in estrogen and progesterone levels",
      "Increase in progesterone levels",
      "Surge in follicle-stimulating hormone (FSH)"
    ],
    correctAnswer: 1
  },
  {
    question: "What physical changes commonly accompany menstruation, and why do they occur?",
    options: [
      "Increased energy levels due to hormonal shifts",
      "Uterine cramps from thickening of the uterine lining",
      "Decreased fatigue caused by hormonal changes",
      "Bloating due to high progesterone levels"
    ],
    correctAnswer: 1
  },
  {
    question: "What characterizes the follicular phase, and what hormonal changes take place during this phase?",
    options: [
      "Rise in estrogen levels; development of ovarian follicles",
      "Decrease in progesterone levels; shedding of the uterine lining",
      "Surge in FSH; increased libido",
      "Increase in progesterone levels; release of an egg"
    ],
    correctAnswer: 0
  },
  {
    question: "Explain the significance of ovulation within the menstrual cycle and its relation to fertility.",
    options: [
      "Ovulation marks the end of the menstrual cycle and reduces fertility.",
      "Ovulation is the phase where menstrual bleeding starts and indicates low fertility.",
      "Ovulation is crucial for fertility as it's the most fertile time in the menstrual cycle.",
      "Ovulation occurs after fertility peaks, reducing chances of conception."
    ],
    correctAnswer: 2
  },
  {
    question: "Describe the luteal phase and its role in preparing the uterus for potential pregnancy.",
    options: [
      "The luteal phase involves the shedding of the uterine lining, preventing pregnancy.",
      "It's a phase of reduced fertility as progesterone levels decrease.",
      "The luteal phase prepares the uterus by thickening its lining and sustaining a potential pregnancy.",
      "It's a phase of hormonal imbalance, leading to decreased chances of conception."
    ],
    correctAnswer: 2
  },
  {
    question: "During which phase of the menstrual cycle does ovulation typically occur?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 2
  },
  {
    question: "What hormonal changes control menstruation?",
    options: [
      "Rise in estrogen and progesterone",
      "Drop in estrogen and progesterone",
      "Increase in progesterone levels",
      "Surge in follicle-stimulating hormone (FSH)"
    ],
    correctAnswer: 1
  },
  {
    question: "Which phase is characterized by the development of ovarian follicles?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the primary hormone responsible for thickening the uterine lining during the menstrual cycle?",
    options: [
      "Estrogen",
      "Progesterone",
      "Follicle-stimulating hormone (FSH)",
      "Testosterone"
    ],
    correctAnswer: 1
  },
  {
    question: "When does ovulation typically occur in a 28-day menstrual cycle?",
    options: [
      "Around day 5",
      "Around day 14",
      "Around day 21",
      "Around day 28"
    ],
    correctAnswer: 1
  },
  {
    question: "What physical changes occur during ovulation?",
    options: [
      "Increased body temperature",
      "Decreased libido",
      "Reduced cervical mucus",
      "Diminished energy levels"
    ],
    correctAnswer: 0
  },
  {
    question: "What structure produces progesterone after ovulation?",
    options: [
      "Ovarian Follicles",
      "Endometrium",
      "Cervical Mucus",
      "Corpus Luteum"
    ],
    correctAnswer: 3
  },
  {
    question: "Which phase prepares the uterus for a potential pregnancy?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 3
  },
  {
    question: "What hormonal changes occur during the luteal phase?",
    options: [
      "Rise in estrogen",
      "Drop in progesterone",
      "Increase in FSH",
      "Rise in progesterone"
    ],
    correctAnswer: 3
  },
  {
    question: "Which phase marks the midpoint of the menstrual cycle?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 2
  },
  {
    question: "Which phase of the menstrual cycle begins after ovulation?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 3
  },
  {
    question: "What triggers the release of an egg during ovulation?",
    options: [
      "Decrease in estrogen levels",
      "Increase in progesterone levels",
      "Surge in luteinizing hormone (LH)",
      "Drop in follicle-stimulating hormone (FSH)"
    ],
    correctAnswer: 2
  },
  {
    question: "During which phase does the uterine lining thicken in preparation for a possible pregnancy?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 1
  },
  {
    question: "What physical symptom is commonly associated with menstruation?",
    options: [
      "Increased body temperature",
      "Breast tenderness",
      "Clear and stretchy cervical mucus",
      "Uterine cramps"
    ],
    correctAnswer: 3
  },
  {
    question: "Which hormone triggers the shedding of the uterine lining during menstruation?",
    options: [
      "Estrogen",
      "Progesterone",
      "Luteinizing hormone (LH)",
      "Follicle-stimulating hormone (FSH)"
    ],
    correctAnswer: 1
  },
  {
    question: "What role does the corpus luteum play in the menstrual cycle?",
    options: [
      "It produces estrogen",
      "It releases the egg during ovulation",
      "It secretes progesterone",
      "It thickens the uterine lining"
    ],
    correctAnswer: 2
  },
  {
    question: "What happens if fertilization doesn’t occur during the menstrual cycle?",
    options: [
      "The corpus luteum degenerates",
      "Estrogen levels drop sharply",
      "The uterine lining is shed",
      "Progesterone production increases"
    ],
    correctAnswer: 0
  },
  {
    question: "Which phase begins after the uterine lining is shed and lasts until ovulation?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 1
  },
  {
    question: "What characterizes the rise in estrogen levels during the menstrual cycle?",
    options: [
      "Thickening of the uterine lining",
      "Maturation of ovarian follicles",
      "Release of the egg",
      "Onset of menstruation"
    ],
    correctAnswer: 1
  },
  {
    question: "Which phase of the menstrual cycle is vital for fertility?",
    options: [
      "Menstruation",
      "Follicular Phase",
      "Ovulation",
      "Luteal Phase"
    ],
    correctAnswer: 2
  },
  {
    question: "What types of workouts are recommended during menstruation?",
    options: [
      "Cardio exercises",
      "Flexibility training",
      "High-intensity workouts",
      "Strength training"
    ],
    correctAnswer: 1
  },
  {
    question: "Which exercise is beneficial to alleviate cramps during menstruation?",
    options: [
      "Running",
      "Yoga",
      "Weightlifting",
      "Cycling"
    ],
    correctAnswer: 1
  },
  {
    question: "What type of workout is beneficial during the follicular phase to align with increased energy levels?",
    options: [
      "Cardio exercises",
      "Flexibility training",
      "High-intensity workouts",
      "Strength training"
    ],
    correctAnswer: 2
  },
  {
    question: "Which exercises are helpful during the luteal phase to accommodate increased progesterone levels?",
    options: [
      "Pilates",
      "Dance cardio",
      "Hiking",
      "Running"
    ],
    correctAnswer: 3
  }
];

function shuffle(array) {
  // Function to shuffle the array (Fisher-Yates shuffle algorithm)
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayRandomQuestions() {
  const shuffledQuestions = shuffle(questions);
  const selectedQuestions = shuffledQuestions.slice(0, 10); // Select 10 random questions

  const questionContainer = document.getElementById('question-container');
  selectedQuestions.forEach(questionObj => {
    const questionDiv = document.createElement('div');
    const questionText = document.createElement('p');
    questionText.textContent = questionObj.question;
    questionDiv.appendChild(questionText);

    questionObj.options.forEach((option, index) => {
      const optionDiv = document.createElement('div');
      const optionRadio = document.createElement('input');
      optionRadio.type = 'radio';
      optionRadio.name = `question_${questions.indexOf(questionObj)}`;
      optionRadio.value = index;
      optionDiv.appendChild(optionRadio);

      const optionLabel = document.createElement('label');
      optionLabel.textContent = option;
      optionDiv.appendChild(optionLabel);

      questionDiv.appendChild(optionDiv);
    });
    questionContainer.appendChild(questionDiv);
  });
}


function gradeQuiz() {
  const userAnswers = document.querySelectorAll('input[name^="question"]:checked');
  let score = 0;

  userAnswers.forEach(answer => {
    const questionIndex = parseInt(answer.name.split('_')[1]);
    const selectedQuestion = questions[questionIndex];
    if (parseInt(answer.value) === selectedQuestion.correctAnswer) {
      score++;
    }
  });
  let scorePercentage = score/10 * 100;
  if (score <= 50) {
    alert(`You got a ${scorePercentage}%. Try again!`);
  } else if (score === 100) {
    alert(`You got a ${scorePercentage}%. Great job!`);
  } else {
    alert(`You got a ${scorePercentage}%. Not bad!`);
  }
}

// Display randomly selected questions when the page loads
window.onload = displayRandomQuestions;