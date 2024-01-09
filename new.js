//function myfunc(){
//    alert(document.getElementById("subject").value);
//}

var countQues=0;
var subject;
var score=0;

var CPquestions = [
    {
        question: "What does IDE stand for?",
        choices: ["Integrated Development Environment", "Interpreted Development Environment", "Internet Development Environment", "Integrated Design Environment"],
        answer: 1
    },
    {
        question: "Which programming language is known for its use in artificial intelligence and machine learning?",
        choices: ["Java", "Python", "C++", "Ruby"],
        answer: 2
    },
    {
        question: "What is the purpose of the 'break' statement in programming?",
        choices: ["Terminate the program", "Exit the loop or switch statement", "Skip the current iteration of a loop", "Print a line break"],
        answer: 2
    },
    {
        question: "In object-oriented programming, what is encapsulation?",
        choices: ["Hiding the implementation details of an object", "Creating a copy of an object", "Combining multiple objects into one", "Creating a private class"],
        answer: 1
    },
    {
        question: "What is the syntax for declaring a function in most programming languages?",
        choices: ["def function_name():", "function function_name():", "void function_name()", "function_name() {}"],
        answer: 4
    },
    {
        question: "What does the term 'API' stand for in programming?",
        choices: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
        answer: 1
    },
    {
        question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        choices: ["Queue", "Stack", "Linked List", "Array"],
        answer: 2
    },
    {
        question: "What is the purpose of the 'return' statement in a function?",
        choices: ["Print a value to the console", "Exit the function and return a value", "Define the return type of a function", "Create a loop"],
        answer: 2
    },
    {
        question: "Which sorting algorithm has the best time complexity in most cases?",
        choices: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
        answer: 3
    },
    {
        question: "What is the primary use of the 'this' keyword in object-oriented programming?",
        choices: ["Refer to the current instance of the object", "Create a new object", "Define a static method", "Access a global variable"],
        answer: 1
    }
];
var CFquestions = [
    {
        question: "What is the binary equivalent of the decimal number 25?",
        choices: ["10100", "11001", "11111", "10011"],
        answer: 2
    },
    {
        question: "What does RAM stand for?",
        choices: ["Random Access Memory", "Read Only Memory", "Running Application Memory", "Real-time Access Memory"],
        answer: 1
    },
    {
        question: "Which component is responsible for performing arithmetic and logical operations in a computer?",
        choices: ["Hard Disk Drive", "Central Processing Unit (CPU)", "Random Access Memory (RAM)", "Motherboard"],
        answer: 2
    },
    {
        question: "What is the purpose of an operating system?",
        choices: ["Run applications", "Manage hardware resources", "Provide a user interface", "All of the above"],
        answer: 4
    },
    {
        question: "Which programming language is considered low-level?",
        choices: ["Python", "C++", "Assembly", "Java"],
        answer: 3
    },
    {
        question: "What is the function of the BIOS (Basic Input/Output System) in a computer?",
        choices: ["Provide the user interface", "Manage hardware resources", "Bootstrap the computer and initiate the hardware", "Run application software"],
        answer: 3
    },
    {
        question: "Which storage device is non-volatile and retains data even when the power is turned off?",
        choices: ["Hard Disk Drive (HDD)", "Solid State Drive (SSD)", "CD-ROM", "Flash Drive"],
        answer: 1
    },
    {
        question: "What does CPU cache help improve?",
        choices: ["Storage capacity", "Processing speed", "Memory size", "Network connectivity"],
        answer: 2
    },
    {
        question: "Which binary digit is the smallest unit of data in computing?",
        choices: ["Bit", "Byte", "Nibble", "Kilobyte"],
        answer: 1
    },
    {
        question: "What is the purpose of a firewall in a computer network?",
        choices: ["Filter incoming and outgoing network traffic", "Boost processing speed", "Store data temporarily", "Manage file permissions"],
        answer: 1
    }
];

var APquestions = [
    {
        question: "What is the SI unit of force?",
        choices: ["Newton", "Joule", "Watt", "Coulomb"],
        answer: 1
    },
    {
        question: "Which law of thermodynamics states that energy cannot be created or destroyed, only converted from one form to another?",
        choices: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
        answer: 2
    },
    {
        question: "What is the phenomenon where light waves change direction as they pass through a medium with varying refractive index?",
        choices: ["Diffraction", "Reflection", "Dispersion", "Refraction"],
        answer: 4
    },
    {
        question: "Which type of energy is associated with the motion of particles?",
        choices: ["Kinetic Energy", "Potential Energy", "Mechanical Energy", "Thermal Energy"],
        answer: 1
    },
    {
        question: "What is the unit of electrical resistance?",
        choices: ["Ampere", "Volt", "Ohm", "Watt"],
        answer: 3
    },
    {
        question: "Which law of motion is often stated as 'For every action, there is an equal and opposite reaction'?",
        choices: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Newton's Law of Gravitation"],
        answer: 3
    },
    {
        question: "What is the speed of light in a vacuum?",
        choices: ["300,000 km/s", "150,000 m/s", "3,000,000 m/s", "30,000 km/s"],
        answer: 1
    },
    {
        question: "Which instrument is used to measure electric current?",
        choices: ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        answer: 2
    },
    {
        question: "What is the SI unit of power?",
        choices: ["Joule", "Watt", "Ampere", "Volt"],
        answer: 2
    },
    {
        question: "In which state of matter do particles have the least energy and the most disorder?",
        choices: ["Solid", "Liquid", "Gas", "Plasma"],
        answer: 3
    }
];
var FEquestions = [
    {
        question: "What is the correct plural form of 'child'?",
        choices: ["Childs", "Childes", "Children", "Childs'"],
        answer: 3
    },
    {
        question: "Choose the correct sentence: 'She is waiting for John and I' or 'She is waiting for John and me'?",
        choices: ["She is waiting for John and I", "She is waiting for John and me", "Both are correct", "Neither is correct"],
        answer: 2
    },
    {
        question: "What is the past tense of 'run'?",
        choices: ["Runned", "Ran", "Run", "Running"],
        answer: 2
    },
    {
        question: "Which word is the antonym of 'benevolent'?",
        choices: ["Malevolent", "Kind", "Generous", "Altruistic"],
        answer: 1
    },
    {
        question: "What is the correct spelling: 'accomodate' or 'accommodate'?",
        choices: ["Accomodate", "Accommodate", "Acommodate", "Accommodatte"],
        answer: 2
    },
    {
        question: "Choose the correct sentence: 'Neither the cat nor the dogs (is/are) hungry.'",
        choices: ["Is", "Are", "Both are correct", "Neither is correct"],
        answer: 1
    },
    {
        question: "What is the superlative form of 'good'?",
        choices: ["Better", "Best", "Gooder", "Goodest"],
        answer: 2
    },
    {
        question: "Which word is a synonym for 'ubiquitous'?",
        choices: ["Scarce", "Pervasive", "Rare", "Limited"],
        answer: 2
    },
    {
        question: "What is the correct order of the English alphabet?",
        choices: ["ABCD...", "ZYXW...", "MNOP...", "WXYZ..."],
        answer: 2
    },
    {
        question: "Choose the correct usage: 'fewer cars' or 'less cars'?",
        choices: ["Fewer cars", "Less cars", "Both are correct", "Neither is correct"],
        answer: 1
    }
];

var TJquestions=[

    {
        question:  "What is the correct Arabic term for 'elongation' in Tajweed?",
        choices: ["Tafsheel", "Tafkheem", "Madd", "Idgham"],
        answer: 3
    },
    {
        question: "In Tajweed, what is the ruling for 'Idgham'?",
        choices: ["To merge two non-vowel letters", "To pronounce a letter clearly", "To stretch a vowel sound", "To stop at a particular letter"],
        answer: 1
    },
    {
        question: "Which term in Tajweed refers to the clear pronunciation of each letter?",
        choices: ["Ikhfa", "Iqlab", "Isti'la", "Idhar"],
        answer: 4
    },
    {
        question: "What is the purpose of 'Iqlab' in Tajweed?",
        choices: ["To merge two non-vowel letters", "To change the sound of noon saakin to a nasal sound", "To stretch a vowel sound", "To stop at a particular letter"],
        answer: 2
    },
    {
        question: "In Tajweed, what is 'Ghunnah'?",
        choices: ["Concealing a letter's sound", "Vowel elongation", "Nasal sound", "Stretching a letter"],
        answer: 3
    },
    {
        question: "Which term in Tajweed involves pronouncing a non-vowel letter as a vowel?",
        choices: ["Ikhfa", "Iqlab", "Isti'la", "Idhar"],
        answer: 2
    },
    {
        question: "What is the ruling for 'Qalqalah' in Tajweed?",
        choices: ["To merge two non-vowel letters", "To stop at a particular letter", "To pronounce a letter with a bouncing or vibrating sound", "To stretch a vowel sound"],
        answer: 3
    },
    {
        question: "What is the meaning of 'Makhaarij' in Tajweed?",
        choices: ["Elongation of sound", "Clear pronunciation of letters", "Points of articulation", "Vowel sounds"],
        answer: 3
    },
    {
        question: "Which term in Tajweed involves hiding the sound of a noon saakin or tanween?",
        choices: ["Idgham", "Ikhfa", "Isti'la", "Iqlab"],
        answer: 2
    },
    {
        question: "What is the ruling for 'Isti'la' in Tajweed?",
        choices: ["To merge two non-vowel letters", "To stop at a particular letter", "To pronounce a letter with a raised tone", "To stretch a vowel sound"],
        answer: 3
    }
    ];




document.onload = (function () {
    const opt1 = document.getElementById("opt0");
    opt1.checked = "checked";
});
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";





    const scrollToQuizButton = document.getElementById('scrollToQuiz');
    const quizSection = document.getElementById('wrapper');

    scrollToQuizButton.addEventListener('click', function() {
        quizSection.scrollIntoView({ behavior: 'smooth' });
    });



document.querySelector(".startBtn").addEventListener("click", function () {
    const quiz = document.querySelector(".quiz");

    subject = document.getElementById("course").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[subject].length;

    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[subject][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[subject][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[subject][countQues].choices[i];
    };
    quiz.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector(".submit-answer").addEventListener("click", function () {
    const opt1 = document.getElementById("opt0");
    opt1.checked = "checked";
    if (document.querySelector('input[name="options"]:checked').value === window[subject][countQues].choices[window[subject][countQues].answer - 1]) {
        score += 10;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";
    } else {
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[subject].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";
    }

    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[subject].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[subject][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[subject][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[subject][countQues].choices[i];
    };
});

document.querySelector(".view-results").addEventListener("click", function () {
    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("course").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = " Kia Baat Hai Lrkay! Chaa Gaya :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Bohat Khoob , Keep Improving.";
    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = " Maza Nai Aya..., Torhi Aor Mehnat Karo.";
    } else {
        document.querySelector(".remark").innerHTML = " Kia Kr Raha Hai Bai, Wapas se Kr .";
    }
});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();
});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Safwan Ishaq and Khizar Akram");
});






$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

function hideButton() {
    var button = document.querySelector('.view-results');
    button.classList.add('hidden');
}



