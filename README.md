
# Movie Application

### Overview
The Movie Application is a web application that allows users to search for movies, view movie details, and explore information about various films. Here's an overview of its functionality:

## Features
### 1. Search Movies: 
- Users can enter search queries to find movies by title or keywords. The application connects to an external API to fetch a list of matching movies and displays them on the homepage.
### 2. View Movie Details: 
- Users can click on a movie from the search results to access its detailed information. This includes the movie's title, year of release, actors, writers, plot, and IMDb rating.

## Technology Stack
- Frontend: React.js + Vanilla CSS
- Backend: Node.js (Express.js)
- Database: MongoDB
- API Integration: OMDB API for movie data

## Project Structure



## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/gyan2501/movie-app
   ```
2. Install frontend dependencies:
   ```sh
   cd client
   npm install
   ```
3. Install backend dependencies:
   ```sh
   cd server
   npm install
   ```


4. Create a .env file in the server directory with the following variables:
   ```js
   PORT=8080
   MONGODB_URL=<your-mongodb-url>
   API_KEY=<your-OMDB-api-key>
   
   
5. Start the frontend and backend servers:
 - Frontend:
    ```sh
    cd client
    npm start
    ```

- Backend:
  ```sh
    cd server
    npm run server
  ```
6. Access the application in your web browser at http://localhost:3000.

### Usage
- Search for movies, and view movie details.
