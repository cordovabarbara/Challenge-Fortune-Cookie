import { useState } from 'react'
import './App.css'
import RandomButton from './components/RandomButton'
import Phrases from './components/Phrases'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'

const image = [1, 2, 3, 4]


function App() {
  const [randomPhrases, setRandomPhrases] = useState(getRandomArray(phrases))

  const appStyle ={
    backgroundImage:"url('./public/background/fondo1.png')"
  }

  return (
    <div style={appStyle} className="App">
    <h1>Galleta de la Fortuna</h1>
    <RandomButton setRandomPhrases={setRandomPhrases}/>
    <Phrases randomPhrases={randomPhrases}/>
    </div>
  )
}

export default App
