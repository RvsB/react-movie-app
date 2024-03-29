# react-movie-app

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

MovieFlix is an app which provides you with information of various movies and has a special feature to sort movies out based on their Genres.

Features:

- The database is hoted on a JSON Server
- You can filter movies based on their Genre
- You can update movie data too

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Material UI](https://mui.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Clone the repository and .

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Go to the `client` directory and install NPM packages
   ```sh
   npm install
   ```
3. To start the JSON server open another terminal and run the command
   ```sh
   npx json-server --watch data/movie.json --port 8000
   ```
4. Then run this command to start the app
   ```sh
   npm run start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- REMARKS -->

## Remarks

1. The part with the usage of `React Router` in the `App` component was commented out because, there was some problem with React Router in my machine, I checked everything but there weren't any bugs either, will try to ake it work but for now, i had to go with conditional rendering of the router related components.

2. All the backend code is in the `api` directory and all the frontend code is in the `client` directory. The backend part is still under developement.

<!-- CONTACT -->

## Contact

Raj Vardhan Singh Birani - rbrajvardhan@gmail.com

Project Link: https://github.com/RvsB/react-movie-app

<p align="right">(<a href="#top">back to top</a>)</p>
