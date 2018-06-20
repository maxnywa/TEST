const questionsTest = ( function () {
    let questions = [
        {
            question:'Как зовут куратора курса?',
            answers: ['Денис', 'Олег','Jhon Smith'],
            rightAnswer: 'Денис',
        },
        {
            question:'Какой язык программирования изучаем на курсе?',
            answers: ['Phyton', 'PHP','Java Script','Не знаю'],
            rightAnswer: 'Java Script',
        },
        {
            question:'Как дела?',
            answers: ['Отлично', 'Ничего не получается'],
            rightAnswer: 'Отлично',
        },
    ];

    let i = 0,
        rightAnswers = 0;

    function makeQuestion() {
        console.log(questions[i].question);
        questions[i].answers.forEach((answer, index) => console.log(index + ':' + answer));

        getAnswer();
    }

    function getAnswer() {
        let result = prompt( `Ваш ответ, введите число от 0 до ${questions[i].answers.length-1}` ,'');

        if (result === 'stop') stop();
        else if (result === null || result === ''|| result > questions[i].answers.length)loose();
        else if (questions[i].answers[result] === questions[i].rightAnswer) {
            console.log('Правильный ответ!');
            console.log('Ваш результат ' + rightAnswers);
            ++i;
            rightAnswers++;
            testIndex();
        } else {
            console.log('Ответ не верный!');
            loose();
        }
    }

    function testIndex() {
        if (i === questions.length ){
            if (rightAnswers === questions.length) console.log ('Ты выиграл!');
            else loose();
        } else makeQuestion();
    }

    function loose() {
        console.log(`Ты проиграл, начнем с начала`);
        console.log(`-----------------------------`);
        i = 0;
        rightAnswers = 0;
        makeQuestion()
    }

    function start() {
        makeQuestion();
    }

    function stop() {
        console.log(`Игра остановлена`);
        i = 0;
        rightAnswers = 0;
    }

    return {
        start,
    }
})();

// Events
 document.addEventListener("DOMContentLoaded",questionsTest.start.bind(questionsTest));
