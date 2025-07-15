# Prosepeek

Prosepeek is a simple web app that lets users search for books using the Google Books API. Anyone can browse and view book details. Logged-in users can also save books to their personal reading list.

**Prosepeek** = "prose" (written content) + "peek" (a quick look) — a quick look into the world of books.

## Features

- Search for books by title, author, or keyword
- View details like description, author, and cover image
- Sign up / Log in to save books to a reading list
- Guests can browse and search, but cannot save books

## Approach

- Frontend built with [your frontend framework]
- Integrated with the Google Books API for search results
- Authentication system for user sign up/sign in
- Saved books are tied to the authenticated user

## Assumptions

- Users without an account can search and view books, but need to log in to save them
- Book data comes from the Google Books API and may not always include full details

## Getting Started

1. Clone the project:
   ```bash
   git clone https://github.com/alianadzirah/prosepeek.git
   cd prosepeek

2. Install dependencies:
   npm install

3. Set up your environment:
   Create a .env file in the root and add API key: 
   VUE_APP_API_URL=https://www.googleapis.com/books/v1/volumes

4. Start the development server:
   npm run serve

## Run Tests
To run tests using Jest: npx jest