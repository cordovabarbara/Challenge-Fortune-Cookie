import { useState } from 'react'
import './App.css'
import RandomButton from './components/RandomButton'
import Phrases from './components/Phrases'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'

const images = [1, 2, 3, 4]


function App() {

  const [randomPhrases, setRandomPhrases] = useState(getRandomArray(phrases))
  const [imgRandom, setimgRandom] = useState(getRandomArray(images))

  const appStyle ={
    backgroundImage: `url('/background/fondo${imgRandom}.png')`
  }

  return (
    <div style={appStyle} className="App">
    <h1>Galleta de la Fortuna</h1>
    <RandomButton 
    setRandomPhrases={setRandomPhrases}
    setimgRandom={setimgRandom}
    />
    <div className='phrases__box'><Phrases randomPhrases={randomPhrases}/></div>
    </div>
  )
}

export default App
