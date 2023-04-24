
# Magic Land

Magic Land, the website where you can experience the magic of riddles!
Our website is dedicated to a single riddle, but with a twist. This riddle comes in five different levels, each one more challenging than the last. You can start with the easiest level and work your way up to the most difficult level. Each level is designed to be a unique and exciting challenge for riddle enthusiasts of all ages.


## Soft Skill Assessed
    1. Crital-thinking
    2. Problem Solving
    3. Patience and perseverance
## Screenshot

![Screenshot](screenshot.jpg)
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

SERVER:

`URL=mongodb+srv://chaudharyshub12:Shub%402107@puzzle.nqc7czp.mongodb.net/?retryWrites=true&w=majority`

`SECRET=magicmagic`


## Run Locally

Clone the project

```bash
  git clone https://github.com/shubchaudhary/magic.git
```

Go to the project directory

```bash
  cd magic
```

Go to the server directory and install dependencies

```bash
  cd server
  npm install
```

Start the server

```bash
  npm start
```

Go to the puzzle directory and install dependencies
```bash
  cd puzzle
  npm install
```

Start the frontend

```bash
  npm run dev
```

Open this in browser
```bash
  http://localhost:8080
```

## Ansers

```javascript
Level-1: tree
Level-2: shadow
Level-3: illusion
Level-4: time
Level-5: flag
```


## Admin
```javascrip
  email: admin@gmail.com
  password: 12345
```
## Checklist of functionalities

- [x]  Login/Logout
- [x]  1 solution
- [x]  5 clues
- [ ]  2 dead ends
- [x]  Progress stored
- [x]  Continue from last riddle
- [ ]  Dashboard
