# Image Text Extraction and Search in Angular using Tesseract.js

This project is an Angular-based application that performs text extraction from images using the Tesseract.js OCR engine. It also allows users to search for specific text within the extracted text, highlight the searched term, and count its occurrences.

## Demo
Check out the live demo [here]().

## Features
- Upload an image for text extraction
- Extract text from the uploaded image using Tesseract.js
- Search for specific text within the extracted content
- Highlight the searched term
- Display the number of occurrences of the searched term

## Prerequisites
Ensure you have Angular CLI installed and an Angular project set up.

### Setting up a New Angular Project
```bash
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve --open
```

## Install Dependencies
```bash
npm install bootstrap
npm install tesseract.js
```

## Component Structure
### HTML Code
The HTML code in image-to-text.component.html provides the user interface for uploading images, entering search text, displaying extracted text, and showing search results.

### TypeScript Code
The core logic for file selection, OCR processing, and text searching is handled in the `image-to-text.component.ts` file.

### Highlight Pipe
A custom Angular pipe is created to highlight the searched text within the extracted text.

## Usage
- Upload an image using the file input
- The text is extracted automatically using Tesseract.js
- Enter the text to search in the provided input box and click on the search button
- The application highlights the searched text and displays the count of occurrences

## Conclusion
This application provides a simple and efficient way to extract text from images and perform text searches on the extracted content, all within an Angular frontend.

---


