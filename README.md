# react-advice-generator-app

This project is inspired by a [Frontend Mentor](https://www.frontendmentor.io/home) challenge, which involves creating an advice generator app using the [Advice Slip API](https://api.adviceslip.com/).

I extended the challenge to enhance my skills in working with APIs and dockerizing applications. In addition to fetching general advice, I've implemented features like searching for advice by keyword. Additionally, I also built this app using a different tech stack and created a Docker image of the application to further enhance my skills.
You can find the Nextjs version of the advice generator app [here](https://github.com/Nella1a/nextjs-advice-generator-app).



## Setup

1. Clone the repository

```
git clone https://github.com/Nella1a/react-advice-generator-app.git
```

2. Install dependencies

```
npm run install
```

3. Run application

```
npm run start
```

4. Open <http://localhost:3000> on your browser.

## Docker

1. Make sure that you have a reasonably recent version of docker installed and running
1. To simple start the application run in your terminal the following command which will
   run an instance of the image and expose it on port 3000:

```
docker container run -p 3000:3000 kanjaallen/react-advice-generator:1.2
```

3. Open <http://localhost:3000> on your browser.

## Technologies

JavaScript, React, Tailwind CSS, TypeScript, Docker
