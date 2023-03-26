import getRandomArray from "../utils/getRandomArray"
import phrase from "../utils/phrases.json"

const RandomButton = ({ setRandomPhrases }) => {
    const changePhrase = () => {
        setRandomPhrases(getRandomArray(phrase))
    }
    return (
    <button onClick={changePhrase}>Ver frase</button>
    )
}

export default RandomButton