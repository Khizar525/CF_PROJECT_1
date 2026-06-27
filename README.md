# Test Your Knowledge — Interactive Quiz Website

> Computer Fundamentals Lab | Semester 1 | Fall 2023

## Project Overview

A web-based interactive quiz application that tests users' knowledge across multiple academic subjects. Users can select a course, answer multiple-choice questions, and receive immediate feedback with their final score and performance remarks.

## Academic Context

This project was developed as part of the Computer Fundamentals Lab course during the first semester. The primary objective was to apply foundational web development concepts including HTML, CSS, and JavaScript in a practical, interactive application.

## Problem Statement

Students often need a quick and engaging way to test their understanding of course material before exams or assignments. Traditional study methods can be monotonous and lack immediate feedback.

This project addresses the need for:
- An interactive learning tool that makes studying engaging
- Multi-subject quiz support for comprehensive review
- Immediate feedback on answers with score tracking
- A simple, user-friendly interface accessible through any web browser

## Features Implemented

### Core Functionality
- **Multi-Subject Quizzes**: Support for 5 different courses (Computer Programming, Computer Fundamentals, Applied Physics, Functional English, Tajweed)
- **Question Bank**: 10 carefully curated questions per subject with multiple-choice answers
- **Score Tracking**: Real-time score updates as users progress through the quiz
- **Performance Feedback**: Final results with score, correct/wrong count, and performance remarks

### User Interface
- **Modern Design**: Clean, responsive layout with gradient backgrounds and smooth transitions
- **Navigation Bar**: Easy access to project information
- **Banner Section**: Welcome message with call-to-action button
- **User Registration**: Simple form to enter name and select course
- **Progress Indicator**: Visual display of current question and total questions
- **Question Navigation**: Color-coded circles showing correct (green) and incorrect (red) answers

### User Experience
- **Smooth Scrolling**: Animated transitions between sections
- **Interactive Elements**: Hover effects on buttons and options
- **Immediate Feedback**: Visual confirmation of answer selection
- **Restart Capability**: Easy option to retake the quiz

## Technology Stack

| Component | Technology |
|-----------|------------|
| Structure | HTML5 |
| Styling | CSS3 |
| Interactivity | JavaScript (ES6) |
| Libraries | jQuery 3.3.1 |
| Platform | Web Browser |

## Project Structure

```
CF_PROJECT_1/
├── README.md              # This file
├── index.html             # Main quiz application page
├── new.js                 # JavaScript quiz logic and question banks
├── ProjectInfo.html       # Project information page
└── .gitignore             # Git ignore rules
```

## How to Run

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No server required — runs directly in the browser

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/Khizar525/CF_PROJECT_1.git
   cd CF_PROJECT_1
   ```

2. **Open the application**
   - Double-click `index.html` or open it in your browser
   - The quiz application will load in your browser

3. **Take a Quiz**
   - Enter your full name
   - Select a course from the dropdown menu
   - Click "Start Quiz"
   - Answer each question by selecting an option
   - Click "Submit Answer" to proceed
   - View your results after completing all questions

### Available Courses
| Code | Course Name |
|------|-------------|
| CP | Computer Programming |
| CF | Computer Fundamentals |
| AP | Applied Physics |
| FE | Functional English |
| TJ | Tajweed |

## Key Concepts Learned

### Web Development Fundamentals
- **HTML5**: Structuring web pages with semantic elements, forms, and interactive components
- **CSS3**: Styling with gradients, transitions, flexbox layout, and responsive design
- **JavaScript**: DOM manipulation, event handling, and dynamic content updates

### Programming Concepts
- **Arrays and Objects**: Storing question banks as structured data
- **Functions**: Modular code organization for quiz logic
- **Event Listeners**: Handling user interactions (clicks, form submissions)
- **Conditional Logic**: Score calculation and performance evaluation
- **String Manipulation**: Dynamic content generation and display

### User Interface Design
- **Form Design**: Creating intuitive input forms with validation
- **Visual Feedback**: Using colors and animations to indicate correct/incorrect answers
- **Navigation Design**: Implementing smooth scrolling and section transitions
- **Responsive Layout**: Designing for different screen sizes

### Problem Solving
- **State Management**: Tracking quiz progress, score, and current question
- **Data Structures**: Organizing questions and answers efficiently
- **Algorithm Design**: Implementing quiz flow and scoring logic

## Future Improvements

### Short-term Enhancements
- [ ] Add a timer for each question
- [ ] Implement a question shuffle feature
- [ ] Add more questions to each subject bank
- [ ] Include difficulty levels (Easy, Medium, Hard)

### Medium-term Features
- [ ] Store quiz results in local storage
- [ ] Add a leaderboard feature
- [ ] Create an admin panel for adding custom questions
- [ ] Implement sound effects for correct/wrong answers

### Long-term Vision
- [ ] Add a backend server for persistent data storage
- [ ] Implement user accounts and progress tracking
- [ ] Create a mobile-responsive version
- [ ] Add support for image-based questions

## Course Information

**Course**: Computer Fundamentals Lab  
**Semester**: 1  
**Institution**: Bahria University Karachi  
**Academic Year**: Fall-2023

## Authors

**M. Khizar Akram**  
BSE-1(B)  
Enrollment: 02-131232-064

**Safwan Ishaq**  
BSE-1(B)

## License

This project was developed for academic purposes as part of the Computer Fundamentals Lab course. It is intended for educational use and learning demonstration.

---

**Note**: This project demonstrates foundational web development concepts and is designed to showcase practical application of course material. It represents a first-semester learning experience in web development.
