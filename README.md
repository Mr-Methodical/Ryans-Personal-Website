# Ryan's Personal Website - CS50 Project

This is a personal website project created as part of Harvard's CS50 course. It showcases various aspects of web development including HTML, CSS, JavaScript, and Bootstrap integration.

## Project Structure

```
├── index.html         # Main homepage
├── index.css          # Main stylesheet
├── index.js           # Main JavaScript file
├── hockey/            # Hockey statistics section
│   ├── stats.html
│   ├── stats.js
│   └── styles.css
├── hockey-video/      # Hockey video section
│   ├── hockey-video.html
│   ├── hockey-video.js
│   └── styles.css
├── trivia/           # Trivia game section
│   ├── index.html
│   ├── index.js
│   └── styles.css
```

## Features

- **Interactive Homepage**: Features a responsive design with interactive elements
- **Bootstrap Integration**: Uses Bootstrap for modern, responsive components
- **Dynamic Content**: JavaScript-powered interactions including:
  - Image hover effects
  - Interactive buttons
  - Page navigation
- **Multiple Sections**:
  - Personal information and photos
  - Hockey statistics
  - Hockey video gallery
  - Interactive trivia game
- **CSS Flexbox**: Implemented for responsive layouts
- **Image Interactions**: Special effects like zoom on hover

## Technologies Used

- HTML5
- CSS3 (including Flexbox)
- JavaScript
- Bootstrap 5.3.3

## Running the Project

To run this project locally, you'll need a web server. Here are a few options:

1. Using Python (Python 3):
   ```bash
   python -m http.server
   ```

2. Using Node.js:
   ```bash
   npx serve
   ```

3. Using VS Code:
   Install the "Live Server" extension and right-click on index.html to "Open with Live Server"

Then open your browser and navigate to `http://localhost:8000` (or the port provided by your chosen method).

## Project Requirements

This project fulfills CS50's requirements including:

- Use of at least 10 different HTML tags
- Use of at least 5 different CSS properties
- Use of JavaScript for dynamic content
- Multiple pages with consistent styling
- Responsive design principles
- Bootstrap integration

## License

This project is licensed under the terms included in the LICENSE file.

## Note

This project was originally developed using http-server (the command used in CS50 to set up the live server) but has been updated to support multiple serving options for better accessibility.
