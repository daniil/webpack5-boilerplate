import example from './images/Fennec_Fox.jpg'
import './styles/main.scss'

// Create an image with imported image as a src
const img = document.createElement('img');
img.src = example;


// Create a class property without a constructor
class Game {
  name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`


// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Webpack 5 Boilerplate'

// Append all nodes to the DOM
const app = document.querySelector('#root')
app.append(heading)
app.append(p);
app.append(img)