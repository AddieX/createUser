# Simple Create User | Addie

A clean, modern user account creation webpage built with HTML, CSS, and JavaScript.

## Overview

This project provides a simple form for creating new user accounts. It features a visually appealing interface, enhanced client-side validation, and clear user feedback for a smooth experience.

## Features

- User-friendly account creation form
- Input fields for username, email, and password
- Password confirmation validation
- Responsive design for all devices
- Modern UI with gradient backgrounds and styled components
- Real-time error and success messages for user feedback

## Project Structure

```
├── App.html            # Main HTML file with the registration form
├── src/
│   ├── css/
│   │   └── main.css    # CSS styling for the application
│   └── js/
│       └── main.js     # JavaScript for validation and feedback
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript if you want to modify the code

### Installation

1. Clone or download this repository to your local machine
2. Open the `App.html` file in your browser

### Usage

1. Fill out the form with your desired username, email address, and password
2. Confirm your password
3. Click the "Create Account" button to submit

## Form Validation & Feedback

The form implements the following validation and feedback:

- All fields are required
- Username must be at least 3 characters
- Email must be in valid format (checked by JavaScript and HTML5)
- Password must be at least 6 characters
- Passwords must match
- Error messages are shown below each field if validation fails
- Success message is shown after successful account creation

## Customization

You can customize the appearance by modifying the CSS in `src/css/main.css`.
To change validation logic or feedback, edit `src/js/main.js`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
