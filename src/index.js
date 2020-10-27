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

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)