# Multi-Theme Product Showcase – Senkar Rao

This is a modern, secure, and user-friendly single-page application built with ReactJS. The application dynamically displays products using the Fake Store API and supports multiple themes with smooth transitions and clean design.

## Features

- Dynamic product integration using https://fakestoreapi.com/products
- Context API used for global theme management
- Tailwind CSS used via CDN for fast and responsive UI styling
- Framer Motion used for smooth animations and transitions
- Single-page architecture for a seamless user experience
- Clean, maintainable, and modular code structure

## Project Structure

multi-theme-switcher/
├── public/  
├── src/  
│   ├── assets/ - Contains images and other static resources  
│   ├── components/  
│   │   ├── Header.js - Top navigation bar with theme selector  
│   │   └── ProductCard.js - Card layout for individual products  
│   ├── contexts/  
│   │   └── ThemeContext.js - React Context for theme management  
│   ├── pages/  
│   │   ├── Home.js - Displays all products  
│   │   ├── About.js - Company information  
│   │   └── Contact.js - Contact information   
│   ├── App.js - Main app with routes and layout  
│   └── main.js - Entry point for the React app

## Technical Overview

- ReactJS version: 19.1.1  
- Node.js version: v18.18.1  
- Tailwind CSS: via CDN format  
- Theme context stores dynamic class names which are applied based on the selected theme 
- Framer Motion is used to add minimal yet modern animations  

## Notes

- I have implemented the application using JavaScript instead of TypeScript, as I have strong experience in JavaScript and it allowed me to build quickly and effectively.  
- If TypeScript is required, I can convert the project in the next phase or future assignments.  
- The code is written in a clean, modular, and scalable format to ensure ease of maintenance and future extension.

## How to Run

1. Clone the repository:
   git clone https://github.com/magupillisenkar/multithemeswitcher.git

2. Navigate to the project folder:
   cd multithemeswitcher

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

## Contact

Thank you for reviewing my submission.  
If you need any further information or changes, please feel free to contact me.

Senkar Rao  
Email: magupillisenkar@gmail.com
